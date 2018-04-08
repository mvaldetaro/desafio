(function() {
    var sections = document.querySelectorAll('section');
    var content = document.querySelector('.content');
    var container = document.querySelector('.container');

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i].addEventListener('click', function(){
            var index = i;
            toogle(this, sections);
            showContent(this, content);
            reorderElements(container, content);
        });
    }

    function toogle(item, array) {
        if (item.className != 'show') {
           item.classList.add('show');
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                if (element.className === '') {
                    element.classList.add('hide');
                }
            }
        } else {
            item.classList.remove('show');
            for (let i = 0; i < array.length; i++) {
                const element = array[i];
                if (element.className === 'hide') {
                    element.classList.remove('hide');
                }
            }
        }
    }

    function showContent(item, content) {
        changeValue(item, content);
        if (content.className === 'content hide') {
            content.classList.remove('hide');    
        } else {
            content.classList.add('hide');
        }
    }

    function changeValue(item, content) {
        var value = item.dataset.value;
        content.querySelector('#value').innerHTML = value;
    }

    

}());
