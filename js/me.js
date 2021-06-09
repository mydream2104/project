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

ajax({
    url: "../php/img.php",
    data: "c=128",
    success: function(dt) {
        var arr = eval('(' + dt + ')')
        var bool = true

        $(".lunbo1").attr("src", arr[0].img)
        $(".lunbo2").attr("src", arr[1].img)
        var dsq1 = setInterval(function() {
            $(".lunbo1").toggle()
            $(".lunbo2").toggle()
            if (bool) {
                $(".lunbo-c a").attr("href", arr[1].url1)
                bool = false
            } else {
                $(".lunbo-c a").attr("href", arr[0].url1)
                bool = true
            }



        }, 2000)
    }

})
ajax({
    url: "../php/all.php",
    data: "e=1",
    success: function(dt) {
        var arr = eval('(' + dt + ')')

        $("[alt='1']").attr({ "src": arr[94].img })
        $("[alt='1']").css("cursor", "pointer")
        $("[alt='1']").click(function() {
            location.href = arr[94].url1
        })
    }
})

$("header a").hover(function() {
    $(this).css("color", "#ff0036")
}, function() {
    $(this).css("color", "#999")
})

$(document).scroll(function() {

    if ($(this).scrollTop() > 300) {
        $(".leimu").css({
            "top": "40px"
        })
    } else {
        $(".leimu").css({
            "top": "275px"
        })
    }
});
//列表页ajax
$.ajax({
        url: "../php/alldatas.php",
        dataType: "json",
        success(dt) {
            //转jquery对象
            var dt = $(dt)
            console.log(dt);
            //设置遍历初始值

            let h2 = 0;

            $(".ban-img img").each(function(i, n) {
                $(n).prop("src", dt[h2].img)
                $(".ban-title")[i].innerHTML = dt[h2].title
                $(".ban-jiage")[i].innerHTML = dt[h2].price
                $(".list1-ban a")[i].setAttribute("href", `./detail.html?id=${i+1}`)

                h2++
            })

            $("[alt='2']").click(function() {
                location.href = "https://goodsmile.tmall.com/category-520762198.htm?scene=taobao_shop"
            })


            // end
        }
    })
    // 轮播图
var mySwiper = new Swiper('.swiper-container', {


        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed: 1000,
        autoplay: {
            delay: 1500,
            //daima1
            disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
            //daima2
            clickable: true,
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
    // 图片蒙版
$(".meng").hover(function() {
        $(this).css("background-color", "rgba(0, 0, 0, 0)")
        $(".meng").not(this).css("background-color", "rgba(0, 0, 0, 0.6)")
    },
    function() {
        $(".meng").css("background-color", "rgba(0, 0, 0, 0)")
    })
$("[alt='3']").click(function() {
    console.log(1);
    location.href = "https://goodsmile.tmall.com/category-1478185374.htm?scene=taobao_shop"
})
var nn = $.cookie('name');
if (nn) {
    $('.h-p2-a1').text('')
    $('.h-p2-a2').text('')
    $('.h-p2-a3').text('登出')
    $('.h-p2-a3').click(function() {
        $.removeCookie('name', { path: '/2104/project/html' });
    })
}
$('#nameU').html(nn);
//其他内容图片ajax
$.ajax({
    url: "../php/all.php",
    dataType: "json",
    success(dt) {
        //转jquery对象
        var dt = $(dt)
        console.log(dt);
        //设置遍历初始值
        let h1 = 96;
        let h3 = 8;
        let h4 = 13;
        let h5 = 2;
        $(".list5-div a").each(function(i, n) {
            $(n).prop("href", dt[h1].url1)
        })
        $(".leimu a").each(function(i, n) {
                $(n).prop("href", dt[h1].url1)
                h1++
            })
            //轮播图
        dt.each(function(i, n) {
            if (n.id >= 140 && n.id <= 147) {
                $(".swiper-container img")[i - 103].setAttribute("src", n.img)
                $(".swiper-container a")[i - 103].setAttribute("href", n.url1)
            }
        })
        $(".list2-div img").each(function(i, n) {
            if (i == 0) {
                $(this).prop("src", dt[0].img)
                $(".list2-div a")[i].setAttribute("href", dt[0].url1)
            } else {
                $(this).prop("src", dt[h3].img)
                $(".list2-div a")[i].setAttribute("href", dt[h3].url1)

                h3++
            }

        })

        $(".list3-ban img").each(function(i, n) {
            $(n).prop("src", dt[h4].img)
            $(".list3-ban a")[i].setAttribute("href", dt[h4].url1)
            h4++
        })
        $(".list4-ban img").each(function(i, n) {
                $(n).prop("src", dt[h5].img)
                $(".list4-ban a")[i].setAttribute("href", dt[h5].url1)
                h5++

            })
            // end
    }
})