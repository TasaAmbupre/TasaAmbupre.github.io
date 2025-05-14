window.addEventListener("load", function () {
    const element = document.querySelector("div#reloading");
    if (!element) { return };

    // 触发过渡动画
    element.style.opacity = 0;

    // 动画结束后隐藏元素
    element.addEventListener("transitionend", () => {
        element.style.display = "none";
    });
});