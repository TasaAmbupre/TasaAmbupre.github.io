// 广告
const ad = document.getElementById('bouncing-ad');
const adWidth = ad.offsetWidth;
const adHeight = ad.offsetHeight;

// 初始化状态
let posX = Math.random() * (window.innerWidth - adWidth);
let posY = Math.random() * (window.innerHeight - adHeight);

// 随机速度
const speed = 2;
// 随机角度
const angle = Math.random() * 2 * Math.PI;
let speedX = Math.cos(angle) * speed;
let speedY = Math.sin(angle) * speed;

function updatePosition() {
    // 更新位置
    posX += speedX;
    posY += speedY;

    // 边界碰撞检测
    const maxX = window.innerWidth - adWidth;
    const maxY = window.innerHeight - adHeight;

    // 水平边界检测
    if (posX <= 0) {
        posX = 0;
        speedX = Math.abs(speedX); // 向右反弹
    } else if (posX >= maxX) {
        posX = maxX;
        speedX = -Math.abs(speedX); // 向左反弹
    }

    // 垂直边界检测
    if (posY <= 0) {
        posY = 0;
        speedY = Math.abs(speedY); // 向下反弹
    } else if (posY >= maxY) {
        posY = maxY;
        speedY = -Math.abs(speedY); // 向上反弹
    }

    // 应用新位置
    ad.style.left = posX + 'px';
    ad.style.top = posY + 'px';

    requestAnimationFrame(updatePosition);
}
// 启动动画
updatePosition();

var closead = document.querySelector("div#close-btn");
closead.addEventListener(onclick, function close() {
    ad.style.display = "none";

})
console.log(closead);






// 导航栏
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
