var navList = data.navList; // 导航按钮 列表
var banner = data.banner; // 轮播图
var bannerTitle = data.bannerTitle; // 轮播上方文字
var Advertisement = data.Advertisement; //广告位
var listData = data.listData; // 文字跳转
var listText = data.listText; // 列表简述文字
var contentList = data.contentList;
var rightAdvertisement = data.rightAdvertisement; // 右侧广告位
var rightBoxTsText = data.rightBoxTsText; //右侧标签展示名字
var labelList = data.labelList; // 右侧便签列表
var tips = data.tips; //  提示文字
var tipsCity = data.tipsCity; //提示文字地址
var pageNum = 1;
var pageSize = 5
var notToTop = false;
$('#page').jqPaginator({
    totalCounts: contentList.length,
    pageSize: pageSize,
    first: '<li class="first"><a href="javascript:;">首页</a></li>',
    prev: '<li class="prev"><a href="javascript:;">上一页</a></li>',
    next: '<li class="next"><a href="javascript:;">下一页</a></li>',
    last: '<li class="last"><a href="javascript:;">尾页</a></li>',
    page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
    onPageChange: function(num, type) {
        pageNum = num
        renderContent()
    }
});


//
var navListWarp = $(".navList"); // 导航按钮列表
navListWarp.html(navList.map(function(item) { //渲染
    return ` <li class="nav">
                <i class="iconfont icon-shouye"></i><span>${item}</span>
            </li>`
}).join(""))
//


var bannerWarp = $(".swiper-wrapper"); // 轮播图
bannerWarp.html(banner.map(function(item) { //渲染
    return `<div class="swiper-slide"> 
           <img src="./img/${item.img}" alt="">
            </div>`
}).join(""));


var bannerTitleWarp = $(".title"); // 轮播上方文字
bannerTitleWarp.html(`<span></span>${bannerTitle}`);



var AdvertisementWarp = $(".bannerBtns"); // 广告位
AdvertisementWarp.html(Advertisement.map(function(item) { //渲染
    return `<li>
               <a href="${item.src}"><img src="./img/${item.img}" alt=""></a> 
            </li>`
}).join(""));


var listTextWarp = $(".journalism h6");; //列表跳转简述文字
listTextWarp.text(listText);



var xwElemendWarp = $(".journalismList"); //文字跳转列表
xwElemendWarp.html(listData.map(function(item, index) { //渲染
    return ` <li>
            <span>${index+1}</span><a href="./static/infoText.html">${item.text}</a>
    </li>`
}).join(""));



function renderContent() {
    var contentWarp = $(".infoList"); //主体内容
    contentWarp.html(contentList.map(function(item, index) { //渲染
        if (index < pageNum * pageSize && index >= (pageNum - 1) * pageSize) {
            return `
                <li class="infoItem">
                            <p class="infoTitle">
                                <span class="infoLogo">${item.logoText}</span>
                                <span class="titleText"> ${item.title}</span>
                            </p>
                            <div class="infoContent">
                                <a href="##"><img src="./img/${item.img}" alt=" " class="infoImg "></a>
                                <p class="infoText ">
                                  ${item.text}<a href="./static/infoText.html">查看更多</a>
                                </p>
                            </div>
                </li>`
        }
    }).join(""));
    if (notToTop) {
        var top = contentWarp.offset().top;
        document.body.scrollTop = document.documentElement.scrollTop = top;
    } else {
        notToTop = true;
    }
}



var rightCenterUl = $(".advertisementList"); // 右侧广告位
rightCenterUl.html(rightAdvertisement.map(function(item, index) { //渲染
    return ` <li>
                <a href="${item.src}">
                    <img src="./img/${item.img}" alt="">
                </a>
            </li>`
}).join(""))



var rightBoxTs = $(".labelTitle"); //标签展示text
rightBoxTs.text(rightBoxTsText)


var labelListWarp = $(".labelList"); // 标签列表
labelListWarp.html(labelList.map(function(item, index) { //渲染
    return `<li><a href="${item.src}">${item.text}</a></li>`
}).join(""))



var tipsText = $(".tipsText");
tipsText.html(` <span>风险提示：</span>${tips}`);


var tipsCityDiv = $(".tipsCity");
tipsCityDiv.text(tipsCity);



$.ajax({
    type: "get",
    url: "./data.json",
    success: function(response) {
        console.log(response)
    }
});


$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000, //可选选项，自动滑动
        pagination: '.swiper-pagination',
        paginationClickable: true,
        preventClicks: false,
        loop: true,
        // observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // observeParents: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
    })
})


//
var box = document.querySelectorAll(".TopKj")[0]

box.onclick = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
//


window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 200) {
        $(".TopKj").show();
    } else {
        $(".TopKj").hide();
    }
}