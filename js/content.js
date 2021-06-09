var ind = parseInt(getUrlQueryString('id'));
$(".h-ul li:eq(0)").mouseover(function() {
    $(".h-ul li:eq(0)").css("background-color", "white")
    $(".h-ul-d1").show()
}).mouseout(function() {
    $(".h-ul li:eq(0)").css("background-color", "#f2f2f2")
    $(".h-ul-d1").hide()
})
$(".h-ul li:eq(2)").mouseover(function() {
    $(".h-ul li:eq(2)").css("background-color", "white")
    $(".h-ul-d2").show()
}).mouseout(function() {
    $(".h-ul li:eq(2)").css("background-color", "#f2f2f2")
    $(".h-ul-d2").hide()
})
$(".h-ul li:eq(5)").mouseover(function() {
    $(".h-ul li:eq(5)").css("background-color", "white")
    $(".h-ul-d3").show()
}).mouseout(function() {
    $(".h-ul li:eq(5)").css("background-color", "#f2f2f2")
    $(".h-ul-d3").hide()
})
$(".h-ul li:eq(6)").mouseover(function() {
    $(".h-ul li:eq(6)").css("background-color", "white")
    $(".h-ul-d4").show()
}).mouseout(function() {
    $(".h-ul li:eq(6)").css("background-color", "#f2f2f2")
    $(".h-ul-d4").hide()
})
ajax({
    url: "../php/aur.php",
    data: "a=94&b=127",
    success: function(dt) {
        var arr = eval('(' + dt + ')')
        $.each(arr, function(i, n) {
            if (i < 15) {
                $($(".d4-1 a")[i]).html(arr[i].title);
                $($(".d4-1 a")[i]).attr("href", arr[i].url1)
            } else if (i >= 15 && i <= 29) {
                $($(".d4-2 a")[i - 15]).html(arr[i].title);
                $($(".d4-2 a")[i - 15]).attr("href", arr[i].url1)
            } else {
                $($(".d4-3 a")[i - 30]).html(arr[i].title);
                $($(".d4-3 a")[i - 30]).attr("href", arr[i].url1)
            }
        })
    },
})
$(".headercon-p2").hover(
        function() {
            $(".headercon-drop").toggle()
        },
        function() {
            $(".headercon-drop").toggle()
        }
    )
    // 放大镜
    //获取操作对象
var leftBox = document.querySelector(".leftBox")
var mark = document.querySelector(".mark")
var rightBox = document.querySelector(".rightBox")

//给左边大盒子对象绑定事件
leftBox.onmouseover = function() {
    //显示隐藏的盒子
    mark.style.display = 'block'
    rightBox.style.display = 'block'
}

leftBox.onmouseout = function() {
    //隐藏指定盒子
    mark.style.display = 'none'
    rightBox.style.display = 'none'
}
leftBox.onmousemove = function(e) {
        //兼容事件对象
        var e = e || window.event
            //获取移动距离
        var left1 = e.pageX - leftBox.offsetLeft - parseInt(mark.offsetWidth / 2)
        var top1 = e.pageY - leftBox.offsetTop - parseInt(mark.offsetHeight / 2)
            //设置边界条件
        var maxX = leftBox.offsetWidth - mark.offsetWidth
        var maxY = leftBox.offsetHeight - mark.offsetHeight
            //右边图片移动的距离
        var imgLeft, imgTop
            //水平方向的判断
        if (left1 <= 0) {
            mark.style.left = "0px"
            imgLeft = 0
        } else if (left1 >= maxX) {
            mark.style.left = maxX + 'px'
            imgLeft = maxX
        } else {
            mark.style.left = left1 + 'px'
            imgLeft = left1
        }

        //垂直方向
        if (top1 <= 0) {
            mark.style.top = "0px"
            imgTop = 0
        } else if (top1 >= maxY) {
            mark.style.top = maxY + 'px'
            imgTop = maxY
        } else {
            mark.style.top = top1 + 'px'
            imgTop = top1
        }

        //获取右边盒子中的图片
        var img = rightBox.querySelector("img")
            //给右边图片设置偏移量
        img.style.left = -2 * imgLeft + 'px'
        img.style.top = -2 * imgTop + 'px'
    }
    // 小图
    // $(".xiaotu img")

$.ajax({
    url: "../php/xiangqing.php",
    data: { id: `${ind}` },
    success: function(dt) {
        var arr = eval("(" + dt + ")");
        console.log(arr);
        $(".xiaotu img").each(function(i, n) {
            n.setAttribute("src", arr[`img${i+1}`])
        })
        $('.leftBox img').prop('src', arr[`img1`])
        $('.booth-r h1').html(arr['title'])
        $('.booth-rp1 b').html(arr['price'])
        $('.booth-com b')[0].innerHTML = arr['comment']
        $('.booth-com b')[1].innerHTML = arr['jifen']
        $('.booth-size span').html(arr['size'])
        $('.booth-col span').html(arr['color'])
        $('.ku').html(arr['kucun'])
        $('.ul2-toy-series').html(arr['toyserial'])
        $('.ul2-size').html(arr['chicun'])
        $('.ul2-acg').html(arr['acg'])
        $('.skinbox img').prop('src', arr['bigimg'])
        $('.booth-but').click(function(e) {
            var e = e || window.event;
            var tar = e.target || e.srcElement;
            if (tar.innerText == '立即购买') {
                location.href = './shopcart.html'
            }
            if (tar.innerText == '加入购物车') {
                var cartlist = localStorage.getItem('cartlist') || []
                if (cartlist.length <= 0) {
                    //无职情况
                    $('.goods_n').html(1)
                    arr.goods_count = 1
                    cartlist.push(arr);
                    console.log(cartlist);
                    localStorage.setItem("cartlist", JSON.stringify(cartlist))
                } else {
                    //有商品情况下
                    cartlist = eval('(' + cartlist + ')')
                    let bool = true
                    cartlist.forEach(function(item) {
                            if (arr.id == item.id) {
                                bool = false
                                    //让当前的商品数量加1
                                item.goods_count++
                                    //重新给localStorage设置键值对
                                    localStorage.setItem("cartlist", JSON.stringify(cartlist))
                                $('.goods_n').html(item.goods_count)
                            }
                        })
                        //商品不重复
                    if (bool) {
                        arr.goods_count = 1
                        $('.goods_n').html(1)
                        cartlist.push(arr);
                        localStorage.setItem("cartlist", JSON.stringify(cartlist))
                    }
                }
            }
        })
    },
})
$('.ul1 li').click(function() {
    if (/uld1/.test($(this).prop('class'))) {

        $('.xiangq-r-d').show();
        $('.xiangq-r-d1').hide()
    } else {
        $('.xiangq-r-d1').show();
        $('.xiangq-r-d').hide()
    }
})
$(".xiaotu").mouseover(function(e) {

    var e = e || window.event;
    var tar = e.target || e.srcElement;
    if (tar.nodeName == "IMG") {
        var src = tar.src;
        $('.leftBox img').prop("src", src)
        console.log($('.leftBox img'));
    }

})

if (!$.cookie("name")) {
    alert("请登录");
    location.href = './login.html'

}
var nn = $.cookie('name');;
$('#nameU').html(nn);
//分割
console.log(ind);

function getUrlQueryString(names, urls) {
    urls = urls || window.location.href;
    urls && urls.indexOf("?") > -1 ? urls = urls
        .substring(urls.indexOf("?") + 1) : "";
    var reg = new RegExp("(^|&)" + names + "=([^&]*)(&|$)", "i");
    var r = urls ? urls.match(reg) : window.location.search.substr(1)
        .match(reg);
    if (r != null && r[2] != "")
        return unescape(r[2]);
    return null;
};
var title11;
$('.xql-d2 button').click(function() {
    title11 = $('.xql-d2 input').val()
    console.log(title11);
    $.ajax({
        url: '../php/xiangqing11.php',
        data: {
            title1: title11,

        },
        success: function(dt) {
            var dt = eval('(' + dt + ')')
            console.log(dt);
            location.href = './detail.html?id=' + dt.id

        },
    })
})
$.ajax({
    url: "../php/alldatas.php",
    dataType: "json",
    success: function(dt) {
        let dt1 = $(dt)
        console.log(dt1);
        $('.swiper-slide img').each(function(i, n) {
            $(n).prop('src', dt1[i].img)
            $('.swiper-slide a')[i].setAttribute('href', `./detail.html?id=${i+1}`)
        })
    }
})
var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        direction: 'vertical', // 垂直切换选项
        // loop: true, // 循环模式选项
        // speed: 1000,
        // autoplay: {
        //     delay: 1500,
        //     //daima1
        //     disableOnInteraction: false,
        // },
        // 如果需要分页器
        // pagination: {
        //     //daima2
        //     clickable: true,
        //     el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


    })
    // pagination
    //获取操作对象
var tbody = document.querySelector(".page-c")
var pagination1 = document.querySelector('.page-p')
    //通过ajax获取数据
$.ajax({
    url: '../php/page.php',
    success: function(dt) {
        //转为对象
        var arr = eval('(' + dt + ')')
        console.log(arr);
        //创建分页器对象
        var o1 = {
                pageInfo: {
                    pagenum: 1,
                    pagesize: 10,
                    totalsize: arr.length,
                    totalpage: Math.ceil(arr.length / 10)
                },
                textInfo: {
                    first: "首页",
                    prev: "上一页",
                    next: "下一页",
                    last: "尾页"
                }
            }
            //创建分页器实例化对象
        new Pagination(pagination1, o1, (m) => {
            //截取数组中对应的数据
            var arr2 = arr.slice((m - 1) * 10, m * 10)
                //创建字符串拼接所有内容
            var str = ''
                //遍历数组
            arr2.forEach((item, index) => {
                    str += `
                    <div class="page-div">
                        <div class="page-d1">
                            <p class="page-d1-p1">${item.comment}</p>
                            <p class="page-d1-p2">${item.size}</p>
                            <p class="page-d1-time">${item.time}</p>
                        </div>
                        <div class="page-d2">
                            <p>${item.color}</p>
                        </div>
                        <div class="page-d3">
                            <p>${item.username}</p>
                        </div>
                    </div>
                    `
                })
                //把拼接好的数据渲染到tbody中
            tbody.innerHTML = str
        })
    }
})