const openModal = document.querySelector(".contact-open");
const formModal = document.querySelector(".modal__form");
const closeModal = document.querySelectorAll(".close");
const modal = document.querySelector(".modal__wrapper");

openModal.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.style.opacity = "1";
    setTimeout(() => {
        formModal.style.transform = "translateY(0)"
    }, 1);
})

for (const item of closeModal) {
    item.addEventListener("click", () => {
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
    formModal.style.transform = "translateY(-100%)"
    modal.style.opacity = "0";
    })
}