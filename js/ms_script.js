$('document').ready(function () {
    let itemsArray = [
        {
            id : 1,
            img_url : 'img/ndsu.png',
            name : 'text'
        },
        {
            id : 2,
            img_url : 'img/logo1.jpg',
            name : 'New Balance'
        },
        {
            id : 3,
            img_url : 'img/logo2.jpg',
            name : 'Adidas'
        },
        {
            id : 4,
            img_url : 'img/logo3.jpg',
            name : 'Nike'
        },

    ];
    let selectedItemsArray = [];
    getItemsList(itemsArray);

    $('.js-dropdown-toggle-btn').on('click', function () {
        let multiSelectDropdown = $(this).closest('.js-multiselect-group');
        multiSelectDropdown.hasClass('active') ? multiSelectDropdown.removeClass('active') : multiSelectDropdown.addClass('active');
    });

    $('.js-list-item').on('click', function() {
        let currentItemID = $(this).attr('data-id');
        let currentItemImgUrl = $(this).find('.js-list-item-img').attr('src');
        let currentItemName = $(this).find('.js-list-item-text').text();
        let selectedExistedItem = $('.js-selected-list-item[data-id="' + currentItemID + '"]');

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            selectedExistedItem.remove();
            let removedItemIndex = selectedItemsArray.findIndex(item => item.id === currentItemID);
            selectedItemsArray.splice(removedItemIndex, 1);
        }
        else {
            $(this).addClass('active');
            $('.js-selected-list').append(`<div class="c-token d-flex justify-content-between js-selected-list-item" data-id="${currentItemID}">
                                              <span class="c-label align-self-center">
                                                  <img class="js-selected-list-item-img" src="${currentItemImgUrl}">
                                                  <label class="js-selected-list-item-text">${currentItemName}</label>
                                              </span>
                                              <span class="c-remove align-self-center">
                                                  <i class="fas fa-times"></i>
                                              </span>
                                            </div>`);
            selectedItemsArray.push({
                id : currentItemID,
                img_url : currentItemImgUrl,
                name : currentItemName
            });
        }

    });
});

function getItemsList(items) {
    for(let i = 0; i < items.length; i++) {
        $('.js-items-list').append(`<div class="list-grp js-list-item" data-id="${items[i].id}">
                                        <div class="pure-checkbox">
                                            <div class="pure-checkbox-content position-relative">
                                                <img class="js-list-item-img" src="${items[i].img_url}">
                                                <label class="js-list-item-text">${items[i].name}</label>
                                                <div class="item-check">
                                                    <i class="fa fa-check"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`)
    }
}
