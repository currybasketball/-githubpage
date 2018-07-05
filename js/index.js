$(document).ready(function() {

    function ImgMove() {
        $("#xkb-code").mouseover(function(e) {
            console.log("移进了");
            var startX = e.offsetX;
            var startY = e.offsetY;
            $(this).mousemove(function(e) {
                var moverX = e.offsetX - startX;
                var moverY = e.offsetY - startY;
                // console.log("X轴移动了："+(moverX) +"Y轴移动了："+(moverY));  
               
                $("#img3").css({ "left": moverX / 10 });
                $("#img3").css({ "top": moverY / 18 });
                $("#img4").css({ "right": moverX / 10 });
                $("#img4").css({ "top": moverY / 18 });
            })
        })
    }
    ImgMove();



    $('#fullpage').fullpage({
        verticalCentered: false,
        afterLoad: function(link, index) {
            /*给当前屏幕加类*/
            console.log(index);
            $(".section").eq(index - 1).addClass("now");
            if (index == 1) {
                $("header").addClass("now");
            }
        },
        onLeave: function(index, nextIndex, direction) {
            console.log('leave', index)
            if (index == 1) {
                $("header").removeClass("now");
            }
            if (index == 2 && direction == 'up') {
                $("header").addClass("now");
            }
        }
    });
});