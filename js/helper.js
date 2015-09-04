$(document).ready(function()	{
	var windowSize = $(window).height();
	$(".content").css("height", windowSize);
	$("#coverPhoto").css("height", windowSize);
	//console.log(windowSize);
});

$(window).resize(function()	{
	windowSize = $(window).height();
	$(".content").css("height", windowSize);
	$("#coverPhoto").css("height", windowSize);

});