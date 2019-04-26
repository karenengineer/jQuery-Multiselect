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
        let currentItem = {
            id : $(this).attr('data-id'),
            img_url : $(this).find('.js-list-item-img').attr('src'),
            name : $(this).find('.js-list-item-text').text()
        };
        let selectedExistedItem = $(`.js-selected-list-item[data-id="${currentItem.id}"]`);

        $(this).hasClass('active') ? deleteFromSelectedList(selectedExistedItem, currentItem.id, selectedItemsArray) : addToSelectedList(currentItem, selectedItemsArray);
        $(this).toggleClass('active');
    });
});

function getItemsList(items) {
    for(let i = 0; i < items.length; i++) {
        let currentItem = items[i];
        $('.js-items-list').append(`<div class="list-grp js-list-item" data-id="${currentItem.id}">
                                        <div class="pure-checkbox">
                                            <div class="pure-checkbox-content position-relative">
                                                <img class="js-list-item-img" src="${currentItem.img_url}">
                                                <label class="js-list-item-text">${currentItem.name}</label>
                                                <div class="item-check">
                                                    <i class="fa fa-check"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`)
    }
}

function addToSelectedList(item, itemsArr) {
    $('.js-selected-list').append(`<div class="c-token d-flex justify-content-between js-selected-list-item" data-id="${item.id}">
                                              <span class="c-label align-self-center">
                                                  <img class="js-selected-list-item-img" src="${item.img_url}">
                                                  <label class="js-selected-list-item-text">${item.name}</label>
                                              </span>
                                              <span class="c-remove align-self-center">
                                                  <i class="fas fa-times"></i>
                                              </span>
                                            </div>`);
    itemsArr.push(item);
}

function deleteFromSelectedList(item, itemID, itemsArr) {
    item.remove();
    itemsArr.splice(itemsArr.findIndex(item => item.id === itemID), 1);
}
