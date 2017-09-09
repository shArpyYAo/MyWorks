<%@page import="org.apache.struts2.components.Else"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="entity.VO" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>java在线考试</title>
<link rel="stylesheet" href="css/welcome.css" media="screen">
</head>
<%
	// 表单提交地址
	/*String url = request.getContextPath() + "/summary.jsp";*/
%>
<body>
	<%
		// 获取当前用户信息
		//VO user = (VO) session.getAttribute("user");
		// 无用户登录，转发404
		/*if(user == null) {
			RequestDispatcher rd = request.getRequestDispatcher("/noFound.jsp");
			rd.forward(request, response);
			return;
		}*/
	%>
	<div class="mainpaper">
		<div class="navigation-button">
			<i class="fa fa-bars" id="menuButton">三</i>
		</div>
		<div class="navigation-menu">
		   	<ul>
	     		<li><a href="${pageContext.request.contextPath}/T/findTeacher.action">用户信息</a></li>
	     		<%
	     			// 如果是学生用户
	     			//if(user.getPermission() == null || user.getPermission() < 50)
	     				//out.print("<li><a href=\"" + request.getContextPath() + "/S/findExaminSituation.action\">考试成绩</a></li>");
	     		%>
				
				<li><a href="${pageContext.request.contextPath}/loginAndRegister.jsp?exit=-1">切换用户</a></li>
				<%
					// 如果是教师用户
					/*if(user.getPermission() != null && user.getPermission() >= 50 && user.getPermission() < 100) {
						out.print("<li><a href=\"" + request.getContextPath() + "/T/addChoiceQuestion.action?type=Java\">批量录入</a></li>");
						out.print("<li><a href=\"" + request.getContextPath() + "/upLoad.jsp\">题目录入</a></li>");
					}*/
				%>
	 		</ul>
		</div>
		<h1 class="fire">太阳骑士团出品</h1>
		<p>智能专项练习</p>
		<hr>
		<!-- java -->
		<form id="optionForm" action="<%= url %>" method="post">
			<input id="examType" type="hidden" value="" name="type">
			<div class="examTypeSelect">
				<span id="Java" class="rollText">java</span>
				<span id="roll-text" class="javaTest">进入考试</span>
			</div>
			<!-- c -->
			<div class="examTypeSelect">
				<span id="C" class="rollText">c</span>
				<span id="roll-text" class="cTest">进入考试</span>
			</div>
			<!-- javascript -->
			<div class="examTypeSelect">
				<span id="JavaScript" class="rollText">javascript</span>
				<span id="roll-text" class="javaScriptTest">进入考试</span>
			</div>
			<!-- css3 -->
			<div class="examTypeSelect">
				<span id="CSS" class="rollText">css</span>
				<span id="roll-text" class="cssTest">进入考试</span>
			</div>
			<!-- php -->
			<div class="examTypeSelect">
				<span id="PHP" class="rollText">php</span>
				<span id="roll-text" class="phpTest">进入考试</span>
			</div>
			<!-- node -->
			<div class="examTypeSelect">
				<span id="Node" class="rollText">node.js</span>
				<span id="roll-text" class="nodeTest">进入考试</span>
			</div>
		</form>
		<!-- 遮罩层div-->
		<div id="mask"></div>
	</div>
	<script>
	/* 考试类型选择 */
	document.querySelector(".javaTest").addEventListener("click",function(){
		document.getElementById("examType").value = "Java";
		document.getElementById("optionForm").submit();
		
	});
	document.querySelector(".cTest").addEventListener("click",function(){
		document.getElementById("examType").value = "C";	
		document.getElementById("optionForm").submit();
	});
	document.querySelector(".javaScriptTest").addEventListener("click",function(){
		document.getElementById("examType").value = "JavaScript";
		document.getElementById("optionForm").submit();
	});
	document.querySelector(".cssTest").addEventListener("click",function(){
		document.getElementById("examType").value = "CSS";
		document.getElementById("optionForm").submit();
	});
	document.querySelector(".phpTest").addEventListener("click",function(){
		document.getElementById("examType").value = "PHP";
		document.getElementById("optionForm").submit();
	});
	document.querySelector(".nodeTest").addEventListener("click",function(){
		document.getElementById("examType").value = "Node";
		document.getElementById("optionForm").submit();
	});
	/*  
		菜单显示效果
	*/
		var navButton = document.querySelector(".navigation-button");
		//alert("navButton "+navButton);
		var navMenu = document.querySelector(".navigation-menu");
		//alert("navMenu "+navMenu);
		var win = window;
		/* 遮罩效果 */
		var myMask = document.getElementById('mask');
		function openMenu(event) 
		{
			myMask.style.display = "block";/* 开启遮罩 */
			if (navButton.classList.contains('active')){
				myMask.style.display = "none";/* 关闭遮罩 */
			}
			navButton.classList.toggle('active');//移除active类并返回false
			navMenu.classList.toggle('active');
			event.preventDefault();//取消事件的默认动作
			event.stopImmediatePropagation(); //方法阻止剩下的事件处理程序被执行。该方法阻止事件在 DOM 树中向上冒泡。
		} 
		  
		function closeMenu(event) 
		{
			if (navButton.classList.contains('active')) 
			{   
				myMask.style.display = "none";/* 关闭遮罩 */
				navButton.classList.remove('active');
				navMenu.classList.remove('active');
			}
		}
		navButton.addEventListener('click', openMenu, false);
		win.addEventListener('click',closeMenu, false);
		/*  */
		
		/*  
		背景切换效果
	*/
	/* 
	function positionMessage(){
		if(!document.getElementById) 
			return false;
		if(!document.getElementById("imgages"))
			return false;
		var elem = document.getElementById("imgages");
		elem.style.position = "absolute";
		elem.style.width = "100%";
		elem.style.height = "100%"; 
		movement = setTimeout("changeImgages(0)",1000);
	}

	function addLoadEvent(func){
		var oldonload = window.onload;
		if(typeof window.onload != 'function'){
			window.onload = func;
		}
		else{
			window.onload = function(){
				oldonload();
				func();
			}
		}
	}
	addLoadEvent(positionMessage);

	function changeImgages(index){
		if(!document.getElementById) 
			return false;
		if(!document.getElementById("imgages"))
			return false;
		var elem = document.getElementById("imgages");
		var strSrc1 = "http://localhost:8080/javaTestOnlineINDisplay/img/classroom.jpg";
		var strSrc2 = "http://localhost:8080/javaTestOnlineINDisplay/img/crystalGirl.jpg";
		var strSrc3 = "http://localhost:8080/javaTestOnlineINDisplay/img/poker.jpg";
		var strSrc4 = "http://localhost:8080/javaTestOnlineINDisplay/img/sakura.jpg";
		var strSrc5 = "http://localhost:8080/javaTestOnlineINDisplay/img/anotherWorld.jpg";
		if(index == 6)
			index = 0;
		if(index == 0)
			elem.src = strSrc1;
		if(index == 1)
			elem.src = strSrc2;
		if(index == 2)
			elem.src = strSrc3;
		if(index == 3)
			elem.src = strSrc4;
		if(index == 4)
			elem.src = strSrc5;
		elem.style.position = "absolute";
		elem.style.width = "100%";
		elem.style.height = "100%";
		index ++;
		movement = setTimeout("changeImgages("+index+")",1000);
	} */
	</script>
</body>
</html>