$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered:false,
		afterLoad: function (link, index) {
            /*给当前屏幕加类*/
            console.log(index);
            $(".section").eq(index - 1).addClass("now");
        },
	});
});