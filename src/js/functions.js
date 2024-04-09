document.addEventListener('DOMContentLoaded', () => {
    const tabTargets = document.querySelectorAll(".tabs__target")
    const tabItems =document.querySelectorAll(".tabs__item")
    tabTargets.forEach((tabTarget) => {
        tabTarget.addEventListener('click', () => {
            let dataTab = tabTarget.dataset.targetTab
            tabItems.forEach((tabItem) => {
                if (tabItem.classList.contains("active")) {
                    tabItem.classList.remove("active")
                }
                if (tabItem.dataset.itemTab === dataTab) {
                    tabItem.classList.add("active")
                }
            })
        })
    })
})