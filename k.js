// 声明一个const数组，列出每张图像的文件名
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];

// 获取DOM元素
const displayedImg = document.getElementById('displayed-img'); // 获取thumb-bar<div>元素
const thumbBar = document.querySelector('.thumb-bar');  // 获取displayed-img<img>元素
const toggleButton = document.getElementById('toggle-button');  // 获取toggle-button<button>元素

// 为每个文件名创建一个<img>元素，并将其插入到thumb-bar<div>中
imageFiles.forEach(fileName => {
    const newImg = document.createElement('img'); // 创建一个新的<img>元素
    newImg.src = fileName;            // 设置<img>元素的src属性为文件名
    newImg.className = 'thumb';       // 设置<img>元素的class属性为thumb
    thumbBar.appendChild(newImg);     // 将<img>元素添加到thumb-bar<div>中
});

// 为thumb-bar<div>里的每个<img>元素添加click事件监听器
document.querySelectorAll('.thumb').forEach(img => {  // 获取thumb-bar<div>里的所有<img>元素
    img.addEventListener('click', function() {      // 为每个<img>元素添加click事件监听器
        displayedImg.src = this.src;  // 将displayed-img<img>元素的src属性设置为被点击的<img>元素的src属性
    });
});

// 给<button>元素添加click事件监听器
let isDarkMode = false; // 声明一个布尔变量，用于跟踪当前是否处于暗模式
toggleButton.addEventListener('click', function() {  
    if (!isDarkMode) {  // 如果当前不是暗模式
        const randomBrightness = Math.floor(Math.random() * 100) + 1; // 生成一个随机的亮度值
        displayedImg.style.filter = `brightness(${randomBrightness}%)`;  // 将displayed-img<img>元素的filter属性设置为亮度值
            this.textContent = '变亮';      // 将<button>元素的文本内容设置为“变亮”
        isDarkMode = true;          // 将isDarkMode设置为true，表示当前处于暗模式
    } else {               // 如果当前是暗模式
        displayedImg.style.filter = '';  // 将displayed-img<img>元素的filter属性设置为空字符串，以移除亮度效果
        this.textContent = '变暗';      // 将<button>元素的文本内容设置为“变暗”
        isDarkMode = false;         // 将isDarkMode设置为false，表示当前不处于暗模式
    }
});