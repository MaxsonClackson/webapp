function loadSettingField(element, dict_setting) {
    var container = document.getElementsByClassName('container')[0];
    if (container.children.length != 0) {
        while (container.firstElementChild){
            container.firstElementChild.remove();
        }
    }
    var h3 = document.createElement('h3');
    h3.classList.add('setting-title');
    h3.textContent = element.textContent;
    container.appendChild(h3);
    for (var key in dict_setting) {
        var value = dict_setting[key];
        var div = document.createElement('div');
        div.classList.add('setting-bubble');
        div.id = key;
        div.textContent = value;
        container.appendChild(div);
    }
}

function settingFieldEventHandler(event){
    var element = event.target

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

function filterButtonsEventHandler(event){
    var element = event.target

    blocks = document.getElementsByClassName('filter-block')
    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if (element.id == block.id) {
            element.classList.add('on');
            if (element.id == 'exterior_btn') {
                exterior_dict_html_id = {'exterior_all': 'All', 'exterior_FN': 'Factory New',
                'exterior_MW': 'Minimal Wear', 'exterior_FT': 'Field Tested', 'exterior_WW': 'Well Worn',
                'exterior_BS': 'Battle Scarred'};
                loadSettingField(element, exterior_dict_html_id);
                }
            else if (element.id == 'quality_btn') {
                quality_dict_html_id = {'quality_cover': 'Covert/Тайное',
                                        'quality_classified': 'Classified/Засекреченное',
                                        'quality_restricted': 'Restricted/Запрещенное',
                                        'quality_milspec': 'Mil-Spec/Армейское',
                                        'quality_industrial': 'Industrial/Промышленное',
                                        'quality_consumer': 'Consumer/Ширпотреб',
                                        };
                loadSettingField(element, quality_dict_html_id);
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