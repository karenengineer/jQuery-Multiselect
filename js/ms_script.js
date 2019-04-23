$('document').ready(function () {
    $('.js-dropdown-toggle-btn').on('click', function () {
        $(this).closest('.js-multiselect-group').toggleClass('active');
    })
});
