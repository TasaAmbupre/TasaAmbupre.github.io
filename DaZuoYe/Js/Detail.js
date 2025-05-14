// 通用样式设置函数
function setStyles(element, styles) {
    Object.assign(element.style, styles);
}
// 默认位置
let url = window.location.pathname;
const match = url.match(/Html\/(\d+)/);
console.log(match[1])
let coordinate = Number(match[1]);



const target = document.querySelectorAll('#nav a');
const targetLink = target[coordinate - 1];
const parent = targetLink.parentElement;
const slide2 = document.querySelector('#nav .slide2');
// 应用初始样式
setStyles(slide2, {
    opacity: '1',
    left: parent.offsetLeft + 'px',
    width: parent.offsetWidth + 'px'
});
slide2.classList.add('squeeze');
targetLink.classList.add('active');
//鼠标悬停事件
const links = document.querySelectorAll('#nav a');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('mouseover', function (e) {
        this.style.color = "#f5f5f5";
        const parent = this.parentElement;
        const slide2 = document.querySelector('#nav .slide2');
        setStyles(slide2, {
            opacity: '1',
            left: parent.offsetLeft + 'px',
            width: parent.offsetWidth + 'px'
        });
        slide2.classList.add('squeeze');
    });
}
// 鼠标移出事件
const link2s = document.querySelectorAll('#nav a');
for (let i = 0; i < link2s.length; i++) {
    link2s[i].addEventListener('mouseout', function (e) {
        this.style.color = "#f5f5f5";
        // 如果是当前激活链接则不处理
        if (this.classList.contains('active')) { return };
        this.style.color = "rgb(70, 100, 100)";
        const slide2 = document.querySelector('#nav .slide2');
        const activeLink = document.querySelector('#nav a.active');
        const activeParent = activeLink.parentElement;
        // 回到默认位置
        setStyles(slide2, {
            left: activeParent.offsetLeft + 'px',
            width: activeParent.offsetWidth + 'px',
            opacity: '1'
        });
    });
};
