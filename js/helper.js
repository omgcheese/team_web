$(document).ready(function()	{
	WindowSize();
});

$(window).resize(function()	{
	WindowSize();
});

function WindowSize() {
	var windowSizeHeight = $(window).height(),
		windowSizeWidth = $(window).width();
	$(".content").css("height", windowSizeHeight);
	$("#coverPhoto").css("height", windowSizeHeight);

}

