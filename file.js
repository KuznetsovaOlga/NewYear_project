// модальное окно

const items = document.querySelectorAll(".list__item");

items.forEach(function(item) {
    const anchorElement = item.querySelector(".text-popup");
    const popupElement = item.querySelector(".open__popup");
    anchorElement.addEventListener("click", function(evt) {
        evt.preventDefault();
        popupElement.classList.toggle("modal-show");
    });
    const closePopupElement = popupElement.querySelector(".modal-close");
    closePopupElement.addEventListener("click", function() {
        popupElement.classList.remove("modal-show");
    });

});




