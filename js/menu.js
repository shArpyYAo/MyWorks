window.onload = function()
{
	var main = document.getElementById("main");
	var menuButton = document.getElementById("menuButton");
	var menu = document.getElementById("menu");
	var li = menu.getElementsByTagName("li");
	var overLay = document.getElementById("overLay");
	
	menuButton.addEventListener("mouseover", function(event)
	{
		$(".Click").css("animation", "shakeClick 0.3s infinite");
		$(".It").css("animation", "shakeIt 0.3s infinite");
	},false);
	menuButton.addEventListener("mouseout", function(event)
	{
		$(".Click").css("animation", "none");
		$(".It").css("animation", "none");
	},false);
	menuButton.addEventListener("click", function(event)
	{
		$("#main").css("-webkit-transform", "scale3d(0.62,0.78,0.5) rotateY(-2deg) translate3d(186px,0px,1px)");
		$("#main").css("-moz-transform", "scale3d(0.62,0.78,0.5) rotateY(-2deg) translate3d(186px,0px,1px)");
		$("#main").css("-ms-transform", "scale3d(0.62,0.78,0.5) rotateY(-2deg) translate3d(186px,0px,1px)");
		$("#main").css("transform", "scale3d(0.62,0.78,0.5) rotateY(-2deg) translate3d(186px,0px,1px)");
		$("#menu").css("left", "-0px");
		$(".Click").css("animation", "none");
		$(".It").css("animation", "none");
		overLay.style.display = "block";
		for(let i = 0;i < li.length;i++)
		{
			if(i % 2 == 0)
				li[i].style.animation = "AppearFromRight 0.6s " + "0." + (i + 1) + "s forwards";
			else
				li[i].style.animation = "AppearFromLeft 0.6s " + "0." + (i + 1) + "s forwards";
		}
	},false);
	overLay.addEventListener("click", function(event)
	{
		$("#main").css("-webkit-transform", "none");
		$("#main").css("-moz-transform", "none");
		$("#main").css("-ms-transform", "none");
		$("#main").css("transform", "none");
		$("#menu").css("left", "-300px");
		overLay.style.display = "none";
		for(let i = 0;i < li.length;i++)
		{
			li[i].style.animation = "none";
		}
	},false);
}