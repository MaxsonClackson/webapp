function loadSettingField(element) {
    var container = document.getElementsByClassName('container')[0];
    if (container.children.length != 0) {
        while (container.firstElementChild){
            container.firstElementChild.remove();
        }
    }
    exterior_list_html_id = {'exterior_all': 'All', 'exterior_FN': 'Factory New', 'exterior_MW': 'Minimal Wear',
     'exterior_FT': 'Field Tested', 'exterior_WW': 'Well Worn', 'exterior_BS': 'Battle Scarred'};
    for (var key in exterior_list_html_id) {
        var value = exterior_list_html_id[key]
        div = document.createElement('div')
        div.classList.add('setting-bubble')
        div.id = key
        div.textContent = value
        container.appendChild(div)
    }
}


function filterButtonsEventHandler(event){
    var element = event.target

    blocks = document.getElementsByClassName('filter-block')
    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        if (element.id == block.id) {
            element.classList.add('on');
            if (element.id == 'exterior_btn') loadSettingField(element);
        }
        else {
            if (block.className.includes('on')) {
                block.classList.remove('on');
            }
        }

    }
}

document.getElementsByClassName('filter-column-block')[0].addEventListener('click', filterButtonsEventHandler)

//event.target.className.includes('on')