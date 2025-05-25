// 轮播图
var img = document.querySelector("div.imgs");
var imgspointer = document.querySelector("div.imgs ul");
var i = 1;
function ChangeImg() {
    if (i == 4) {
        i = 1;
    } else { };

    img.style.backgroundImage = "url(../images/subject0" + i + ".jpg)";
    // console.log("i=" + i % 3);
    // console.log((i + 1) % 3);
    // console.log((i + 2) % 3);
    imgspointer.children[i % 3].id = "";
    imgspointer.children[(i + 1) % 3].id = "";
    imgspointer.children[(i + 2) % 3].id = "focus";
    i++;
}
var dots = document.querySelectorAll("div.imgs ul li");
dots.forEach(function (li) {
    li.addEventListener("click", function () {
        var children = this.parentElement.children;
        var index = Array.from(children).indexOf(this);
        i = index + 1;
        ChangeImg();
        clearInterval(t);
        t = setInterval(ChangeImg, 2500);
    });
});
console.log(imgspointer.children);
ChangeImg();
var t = window.setInterval(ChangeImg, 2500);



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

var p = document.querySelectorAll(".card p");
for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("mouseover", function () {
        this.style.opacity = 1;
    })
    p[i].addEventListener("mouseout", function () {
        this.style.opacity = 0;
    })
};