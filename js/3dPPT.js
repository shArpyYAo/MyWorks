window.onload = function()
{
	var oPicList = document.getElementById("picList");
	var oCss = document.getElementById("css");
	var aBtns = document.getElementById("btns").getElementsByTagName("li");
	var aLi = null;
	var sLi = "";
	var sCss = "";
	var iZindex = 0;
	var iNow = 0;
	var iLiw = 50;
	var iLength = oPicList.clientWidth / iLiw;
	
	for(let i = 0;i < iLength;i++)
	{
		i > iLength / 2 ? iZindex--:iZindex++;
		sLi += '<li><a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a><span></span><span></span></li>'
		sCss += "#picList li:nth-of-type(" + (i + 1) + ") a{background-position:-" + i * iLiw + "px 0}";
		sCss += "#picList li:nth-of-type(" + (i + 1) + "){z-index:" + iZindex + "}";
	}
	oPicList.innerHTML = sLi;
	oCss.innerHTML += sCss;
	aLi = oPicList.children;
	for(let i = 0;i < aBtns.length;i++)
	{
		(function(a)
		{
			aBtns[a].onclick = function()
			{
				for(let k = 0;k < aLi.length;k++)
				{
					aLi[k].style.transition = "0.5s " + k * 20 + "ms";
					aLi[k].style.webkitTransform = "rotateX(" + a * 90 + "deg)";
				}
				this.className = "active";
				aBtns[iNow].className = "";
				iNow = a; 
			};
		})(i)
	}
};
