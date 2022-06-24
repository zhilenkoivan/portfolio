const tabs = document.querySelectorAll(".projects__tabs-item");
const tabsContent = document.querySelectorAll(".tab");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () =>{
        let activeTab = tabs[i].getAttribute("data-tab");
        console.log(activeTab);
        for (let j = 0; j < tabsContent.length; j++) {
            let contentAttr = tabsContent[j].getAttribute("data-tab-content");
            if(activeTab === contentAttr){
                tabs[j].classList.add("projects__tabs-item--active");
                tabsContent[j].classList.add("tab--active");
            } else {
                tabsContent[j].classList.remove("tab--active");
                tabs[j].classList.remove("projects__tabs-item--active"); 
            }
        }
    })
}