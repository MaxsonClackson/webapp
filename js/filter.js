FiltersValues = {
    choose_collection: null,
    collection_weapons: null,
    exterior: null,
    quality: null,
    items: null,
}

function loadItemBlockHTML(item) {
    var type_and_name = item.hash_name.split(' | ')
    var $item = $('<div class="item"></div>')
    $item.append($('<div>', {class: 'item-skin-type', text: type_and_name[0]}))
    $item.append($('<div>', {class: 'item-skin-name', text: type_and_name[1]}))
    $item.append($(`<div class="item-img"><img src="./media/images/weapons/${item.weapon}/${item.hash_name}.png"></div>`))
    $item.append($('<div class="item-button"></div>'))
    return $item
}

function loadBubbleSettingFieldHTML(element, dict_setting) {
    $('.container').empty();
    var h3 = $('<h3 class="setting-title">' + element.textContent + '</h3>');
    $('.container').append(h3);
    for (var key in dict_setting) {
        var value = dict_setting[key];
        var div = $('<div class="setting-bubble" id="' + key + '">' + value + '</div>');
        $('.container').append(div);
    }
}

function loadExteriorSettingHTML(element) {
    var exterior_dict_html_id = {'exterior_all': 'All', 'exterior_FN': 'Factory New', 'exterior_MW': 'Minimal Wear', 'exterior_FT': 'Field Tested', 'exterior_WW': 'Well Worn', 'exterior_BS': 'Battle Scarred'};
    loadBubbleSettingFieldHTML(element, exterior_dict_html_id);
}

function loadQualitySettingHTML(element) {
    var quality_dict_html_id = {'quality_covert': 'Covert/Тайное', 'quality_classified': 'Classified/Засекреченное', 'quality_restricted': 'Restricted/Запрещенное', 'quality_milspec': 'Mil-Spec/Армейское', 'quality_industrial': 'Industrial/Промышленное', 'quality_consumer': 'Consumer/Ширпотреб'};
    loadBubbleSettingFieldHTML(element, quality_dict_html_id);
}

function loadCollectionSettingHTML() {
    $('.container').empty();

    if (FiltersValues.choose_collection == null) {
        var collections_json = window.FiltersSettingsJSON.collections_json
        $('.container').append($('<h3 class="setting-title">Collection</h3>'))

        var datatime_list = [];
        for (var i=0; i < collections_json.length; i++) {
            d = collections_json[i];
            datatime_list.push(d['release_date']);
        };
        datatime_list.sort();
        var flex_wrap = $('<div class="flex-wrap"></div>')
        var col_control = [];
        while (datatime_list.length > 0) {
            var d_time = datatime_list.pop(-1);
            for (var i=0; i < collections_json.length; i++) {
                  collection = collections_json[i];
                  if (collection['release_date'] == d_time && col_control.includes(collection['hash_name']) == false) {
                        var item = $('<div class="item"></div>');
                        item.append($('<div class="item-label">' + collection.hash_name + '</div>'));
                        item.append($('<div class="item-img"><img src="./media/images/collection/' + collection.hash_name + '.png"></div>'));
                        item.append($('<div class="item-button"></div>').append($('<button class="item-collection-button" value="' + collection.id + '">Выбрать</button>')));
                        flex_wrap.append(item);
                        col_control.push(collection['hash_name']);
                        break
                  };
            };
        };
        $('.container').append(flex_wrap);
    }
    else {
        var collection = FiltersValues.choose_collection;
        var collection_items = FiltersValues.collection_weapons;
        // collection_block
        var collection_block = $('<div class="collection-block"></div>');
        collection_block.append($('<div class="collection-img"></div>')
        .append([$('<img>', {src: `./media/images/collection/${collection.hash_name}.png`}),
                 $('<div id="change_collection">Сбросить</div>')]));
        collection_block.append($('<div class="collection-info"></div>').append($('<h3 class="collection-label">' + collection.hash_name + '</h3>')));
        var collection_buttons = $('<div class="collection-buttons"></div>')
        // collection-items
        var collection_items_block = $('<div class="collection-items"></div>');
        var covert_wrap = $('<div class="flex-wrap">'),
            classified_wrap = $('<div class="flex-wrap">'),
            restricted_wrap = $('<div class="flex-wrap">'),
            milspec_wrap = $('<div class="flex-wrap">'),
            industrial_wrap = $('<div class="flex-wrap">'),
            consumer_wrap = $('<div class="flex-wrap">');
        for (var i=0; i < collection_items.length; i++) {
            item = collection_items[i]
            if (item.quality == 'Covert') {
                covert_wrap.append(loadItemBlockHTML(item));
            }
            else if (item.quality == 'Classified') {
                classified_wrap.append(loadItemBlockHTML(item));
            }
            else if (item.quality == 'Restricted') {
                restricted_wrap.append(loadItemBlockHTML(item));
            }
            else if (item.quality == 'Mil-Spec') {
                milspec_wrap.append(loadItemBlockHTML(item));
            }
            else if (item.quality == 'Industrial Grade') {
                industrial_wrap.append(loadItemBlockHTML(item));
            }
            else if (item.quality == 'Consumer Grade') {
                consumer_wrap.append(loadItemBlockHTML(item));
            }
        }
        if (covert_wrap.children().length !== 0) {
            collection_items_block.append($('<div id="quality_covert" class="collection-quality-line">Covert/Тайное</div>'))
            collection_items_block.append(covert_wrap)
        }
        if (classified_wrap.children().length !== 0) {
            collection_items_block.append($('<div id="quality_classified" class="collection-quality-line">Classified/Засекреченное</div>'))
            collection_items_block.append(classified_wrap)
        }
        if (restricted_wrap.children().length !== 0) {
            collection_items_block.append($('<div id="quality_restricted" class="collection-quality-line">Restricted/Запрещенное</div>'))
            collection_items_block.append(restricted_wrap)
        }
        if (milspec_wrap.children().length !== 0) {
            collection_items_block.append($('<div id="quality_milspec" class="collection-quality-line">Mil-Spec/Армейское</div>'))
            collection_items_block.append(milspec_wrap)
        }
        if (industrial_wrap.children().length !== 0) {
            collection_items_block.append($('<div id="quality_industrial" class="collection-quality-line">Industrial/Промышленное</div>'))
            collection_items_block.append(industrial_wrap)
        }
        if (consumer_wrap.children().length !== 0) {
            collection_items_block.append($('<div id="quality_consumer" class="collection-quality-line">Consumer/Ширпотреб</div>'))
            collection_items_block.append(consumer_wrap)
        }
        $('.container').append(collection_block);
        $('.container').append(collection_items_block)
    }
    $('#change_collection').on('click', function() {
        FiltersValues.choose_collection = null;
        FiltersValues.collection_weapons = null;
        loadCollectionSettingHTML()
    })
};

function chooseCollection (element) {
    element.textContent = '';
    $(element).append($('<img>', {src: './media/loading.gif'}));

    var collection_id = element.value
    var weapon_of_collection = []
    var skins_json = window.FiltersSettingsJSON.weapons_skins_json
    var collections_json = window.FiltersSettingsJSON.collections_json
    // get skins
    for (var i=0; i < skins_json.length; i++) {
        var skin = skins_json[i]
        if (skin.collection_id == collection_id) weapon_of_collection.push(skin)
    }
    // get collection
    for (var i=0; i < collections_json.length; i++) {
        var collection = collections_json[i]
        if (collection.id == collection_id) {
            FiltersValues.choose_collection = collection
            break
        }
    
    }
    FiltersValues.collection_weapons = weapon_of_collection
    loadCollectionSettingHTML()
}

function settingFieldEventHandler(event){
    var element = event.target

    if (element.tagName == 'BUTTON' && element.className == 'item-collection-button') {
        chooseCollection (element)
    }

    if (element.className == 'setting-bubble') {
        blocks = document.getElementsByClassName('setting-bubble')
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i];
            if (element.id == block.id) {
                element.classList.add('on');
            }
            else {
                if (block.className.includes('on')) {
                    block.classList.remove('on');
               }
            }
        }
    }
}


function filterButtonsEventHandler(event){
    var element = event.target

    blocks = document.getElementsByClassName('filter-block')
    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if (element.id == block.id) {
            element.classList.add('on');
            if (element.id == 'exterior_btn') {
                loadExteriorSettingHTML(element);
                }
            else if (element.id == 'quality_btn') {
                loadQualitySettingHTML(element);
                }
            else if (element.id == 'collection_btn') {
                loadCollectionSettingHTML()
            }


        }
        else {
            if (block.className.includes('on')) {
                block.classList.remove('on');
            }
        }

    }
}

document.getElementsByClassName('filter-column-block')[0].addEventListener('click', filterButtonsEventHandler)
document.getElementsByClassName('container')[0].addEventListener('click', settingFieldEventHandler)

//event.target.className.includes('on')