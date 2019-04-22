$('document').ready(function () {
    $('.js-dropdown-toggle-btn').on('click', function () {
        let multiSelectDropdown = $(this).closest('.js-multiselect-group');
        multiSelectDropdown.hasClass('active') ? multiSelectDropdown.removeClass('active') : multiSelectDropdown.addClass('active');
    })
});