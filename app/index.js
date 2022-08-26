var arrow = document.getElementById('instruction-link');
arrow === null || arrow === void 0 ? void 0 : arrow.addEventListener('mouseenter', function (e) {
    document.querySelectorAll('.arrow').forEach(function (elem) {
        elem.classList.add('active');
    });
});
arrow === null || arrow === void 0 ? void 0 : arrow.addEventListener('mouseleave', function (e) {
    document.querySelectorAll('.arrow').forEach(function (elem) {
        elem.classList.remove('active');
    });
});
