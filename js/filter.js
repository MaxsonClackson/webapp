FiltersValues = {
    choose_collection: null,
    collection_weapons: null,
    items: null,
    exterior: null,
    float_range: null,
    quality: null,
    items: null,
    float_min: null,
    float_max: null,
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

function loadExteriorSettingHTML() {
    var exterior = FiltersValues.exterior
    var dict_setting = [{id: 'exterior_all', name: 'All', float_range: '0-1'},
    {id: 'exterior_FN', name: 'Factory New', float_range: '0.00-0.07'},
    {id: 'exterior_MW', name: 'Minimal Wear', float_range: '0.07-0.15'},
    {id: 'exterior_FT', name: 'Field Tested', float_range: '0.15-0.38'},
    {id: 'exterior_WW', name: 'Well Worn', float_range: '0.38-0.45'},
    {id: 'exterior_BS', name: 'Battle Scarred', float_range: '0.45-1.00'}];
    $('.container').empty();
    var h3 = $('<h3 class="setting-title">Exterior/Износ</h3>');
    $('.container').append(h3);
    for (var i=0; i < dict_setting.length; i++){
        var exterior_dict = dict_setting[i];
        var id_value = exterior_dict.id;
        var name = exterior_dict.name;
        var float_range = exterior_dict.float_range;
        // потом убрать это место, чтобы добавлять, убирать износ ALL в зависимости от магазина
        if (name == exterior) {
            var div = $('<div>', {class: 'setting-bubble exterior on', id: id_value, value: float_range, text: name});
        }
        else {
            var div = $('<div>', {class: 'setting-bubble exterior', id: id_value, value: float_range, text: name});
        }
        $('.container').append(div);
    }
}

function loadQualitySettingHTML(element) {
    var quality = FiltersValues.quality
    var dict_setting = {'quality_covert': 'Covert/Тайное', 'quality_classified': 'Classified/Засекреченное', 'quality_restricted': 'Restricted/Запрещенное', 'quality_milspec': 'Mil-Spec/Армейское', 'quality_industrial': 'Industrial/Промышленное', 'quality_consumer': 'Consumer/Ширпотреб'};
    $('.container').empty();
    var h3 = $('<h3 class="setting-title">Quality/Качество</h3>');
    $('.container').append(h3);
    for (var key in dict_setting) {
        var value = dict_setting[key];
        // потом убрать это место, чтобы добавлять, убирать износ ALL в зависимости от магазина
        if (value.includes(quality)) {
            var div = $('<div class="setting-bubble quality on" id="' + key + '">' + value + '</div>');
        }
        else {
            var div = $('<div class="setting-bubble quality" id="' + key + '">' + value + '</div>');
        }
        $('.container').append(div);
    }
}

function loadFloatSettingHTML () {
    var exterior = FiltersValues.exterior
    var float_range = FiltersValues.float_range
    $('.container').empty();
    $('.container').append('<h3 class="setting-title">Float</h3>')
    if (Boolean(exterior)) {
        // float-range
        var float_range_block = $('<div class="float-range"></div>')
        if (FiltersValues.float_min) {
            var float_min = FiltersValues.float_min
        }
        else {
            var float_min = ''
        }
        if (FiltersValues.float_max) {
            var float_max = FiltersValues.float_max
        }
        else {
            var float_max = ''
        }
        float_range_block.append($('<input>', {class: "filter_input float_min", placeholder: float_range[0], value: float_min}))
        float_range_block.append($('<span>-</span>'))
        float_range_block.append($('<input>', {class: "filter_input float_max", placeholder: float_range[1], value: float_max}))
        // buttons-block
        var buttons_block = $('<div class="buttons-block"></div>')
        buttons_block.append($('<div id="reset_float" class="action-button">Сбросить</div>'))
        buttons_block.append($('<div id="accept_float" class="action-button">Принять</div>'))
        $('.container').append(float_range_block)
        $('.container').append(buttons_block)
        // event listners
        $('.filter_input.float_min').on('focus', function () {
            var placeholder = $(this).attr('placeholder')
            var value = $(this).val()
            if (!value) {
                $(this).val(placeholder.split('.')[0] + '.')
            }
        }).on('blur', function () {
            var placeholder = $(this).attr('placeholder')
            var value = $(this).val()
            if (!value) {
                $(this).val('')
                return
            }
            if (value == '0.') {
                $(this).val('')
                return
            }
            var p = $('.filter_input.float_max').attr('placeholder')
            var v = $('.filter_input.float_max').val()
            if (value < placeholder || value > p) {
                $(this).val('')
                alert('Недопустимое значение! float_min: ' + value + ' за пределами диапазона ' + placeholder + ' - ' + p)
                return
            }
            if (Boolean(v)) {
                if (value > v) {
                    $(this).val('');
                    alert('Недопустимое значение! float_min больше float_max: ' + value + '>' + v + '.')
                    return
                }

            }
        }).on('keyup', function () {
            $(this).val($(this).val().replace(new RegExp("^\\D*(\\d*(?:\\.\\d{0,})?).*$","g"), "$1"));
        })

        $('.filter_input.float_max').on('focus', function () {
            var placeholder = $(this).attr('placeholder')
            var value = $(this).val()
            if (!value) {
                $(this).val(placeholder.split('.')[0] + '.')
            }
        }).on('blur', function () {
            var placeholder = $(this).attr('placeholder')
            var value = $(this).val()
            if (!value) {
                $(this).val('')
                return
            }
            if (value == '0.') {
                $(this).val('')
                return
            }
            var p = $('.filter_input.float_min').attr('placeholder')
            var v = $('.filter_input.float_min').val()
            if (value > placeholder || value < p) {
                $(this).val('')
                alert('Недопустимое значение! float_min: ' + value + ' за пределами диапазона ' + placeholder + ' - ' + p)
                return
            }
            if (Boolean(v)) {
                if (value < v) {
                    $(this).val('');
                    alert('Недопустимое значение! float_max меньше float_min: ' + value + '<' + v + '.')
                    return
                }

            }
        }).on('keyup', function () {
            $(this).val($(this).val().replace(new RegExp("^\\D*(\\d*(?:\\.\\d{0,})?).*$","g"), "$1"));
        })
    }
    else {
        var notification_block = $('<div class="notification-text"></div>')
        notification_block.append($('<p style="color: #7a7171;font-size: 25px;margin: 0px 0px 0px 0px;">Exterior/износ не задан.</p>'))
        notification_block.append($('<p style="color: #7a7171;margin: 15px 0px 0px 0px;">Задай Exterior прежде чем настраивать Float.</p>'))
        $('.container').append(notification_block)
    }
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
                 $('<div id="reset_collection" class="action-button" style="width:100%">Сбросить</div>')]));
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
            var item = collection_items[i]
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
    $('#reset_collection').on('click', function() {
        FiltersValues.choose_collection = null;
        FiltersValues.collection_weapons = null;
        loadCollectionSettingHTML()
    })
};

function chooseCollection (element) {
    element.textContent = '';
    $(element).append($('<img>', {src: './media/loading.gif'}));

    var collection_id = element.value;
    var weapon_of_collection = [];
    var skins_json = window.FiltersSettingsJSON.weapons_skins_json;
    var collections_json = window.FiltersSettingsJSON.collections_json;
    // get skins
    for (var i=0; i < skins_json.length; i++) {
        var skin = skins_json[i];
        if (skin.collection_id == collection_id) weapon_of_collection.push(skin);
    }
    // get collection
    for (var i=0; i < collections_json.length; i++) {
        var collection = collections_json[i];
        if (collection.id == collection_id) {
            FiltersValues.choose_collection = collection;
            break
        };
    };
    FiltersValues.collection_weapons = weapon_of_collection
    loadCollectionSettingHTML()
};

function chooseExterior (element) {
    var exterior = element.textContent;
    FiltersValues.exterior = exterior;
    var float_range = element.getAttribute('value').split('-')
    FiltersValues.float_range = [Number(float_range[0]), Number(float_range[1])]
    var elements = document.getElementsByClassName('exterior');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.textContent == exterior) {
            element.classList.add('on');
        }
        else {
            if (element.className.includes('on')) {
                element.classList.remove('on');
           }
        }
    }
}

function chooseQuality (element) {
    var quality = element.textContent.split('/')[0];
    FiltersValues.quality = quality;
    var elements = document.getElementsByClassName('quality');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.textContent.includes(quality)) {
            element.classList.add('on');
        }
        else {
            if (element.className.includes('on')) {
                element.classList.remove('on');
           }
        }
    }
}

function chooseFloat (element) {
    if (element.id == 'reset_float') {
        FiltersValues.float_min = null;
        FiltersValues.float_max = null;
        $('.filter_input.float_min').val('')
        $('.filter_input.float_max').val('')
    }
    else if (element.id == 'accept_float') {
        float_min = $('.filter_input.float_min').val();
        float_max = $('.filter_input.float_max').val();
        if (!float_min || !float_max) {
            alert('Укажи float_min и float_max.');
            return;
        };
        FiltersValues.float_min = float_min;
        FiltersValues.float_max = float_max;
    }
}

function settingFieldEventHandler(event){
    var element = event.target

    if (element.tagName == 'BUTTON' && element.className == 'item-collection-button') {
        chooseCollection(element);
    }
    else if (element.className.includes('exterior') && element.className.includes('setting-bubble')) {
        chooseExterior(element);
    }
    else if (element.className.includes('quality') && element.className.includes('setting-bubble')) {
        chooseQuality(element);
    }
    else if (element.id == 'reset_float' || element.id == 'accept_float') {
        chooseFloat(element)
    }
}

function filterButtonsEventHandler(event){
    var element = event.target
    var blocks = document.getElementsByClassName('filter-block')
    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if (element.id == block.id) {
            if (element.className.includes('on')) return;
            element.classList.add('on');
            if (element.id == 'exterior_btn') {
                loadExteriorSettingHTML();
                }
            else if (element.id == 'quality_btn') {
                loadQualitySettingHTML(element);
                }
            else if (element.id == 'collection_btn') {
                loadCollectionSettingHTML()
            }
            else if (element.id == 'float_btn') {
                loadFloatSettingHTML()
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