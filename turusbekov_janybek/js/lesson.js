// TAP SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
const tabSlider = document.querySelector('.tab_slider')
let tabIndex = 0

const hideTabContent =()=> {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index=0) => {

    tabContentBlocks[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

const func = ()=>{
    setInterval(()=>{
        tabIndex++
        if(tabIndex > tabContentBlocks.length-1){
            tabIndex = 0
        }
        hideTabContent()
        showTabContent(tabIndex)
    }, 3000)
}
func()