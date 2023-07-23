function filterButtonsEventHandler(event){
    var element = event.target

    blocks = document.getElementsByClassName('filter-block')
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

document.getElementsByClassName('filter-column-block')[0].addEventListener('click', filterButtonsEventHandler)

//event.target.className.includes('on')