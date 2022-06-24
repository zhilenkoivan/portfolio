const drops = document.querySelectorAll(".drop__item");

drops.forEach(showContent);

function showContent(drop) {
    drop.addEventListener("click", () => {
        const content = drop.querySelector('.drop__item-text');
        const wrapper = drop.querySelector('.drop__item--wrapper');
        console.log(content);
        if(wrapper.classList.contains('active') === true){
            wrapper.classList.remove('active');
            content.classList.remove('droped');
        } else {
            wrapper.classList.add('active');
            content.classList.add('droped');
        }
    });
}