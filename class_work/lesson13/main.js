;(function () {
    var btn = document.getElementsByClassName('js-eventClick')[0],
        col = document.querySelectorAll('.column:not(.latest)');

    btn.addEventListener('click', function(){

        col.forEach(function (elem) {
            elem.classList.toggle('hide');
        });
    });
}());