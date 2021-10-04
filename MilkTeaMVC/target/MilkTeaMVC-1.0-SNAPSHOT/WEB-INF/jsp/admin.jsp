<%-- 
    Document   : admin
    Created on : Oct 3, 2021, 8:37:27 PM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
	
	<div class="main-content">
		<header>
			<h2>
				<label for="">
					<span class="las la-bars"></span>
				</label>
				
				Dashboard
			</h2>
			
			<div class="search-wrapper">
				<span class="las la-search"></span>
				<input type="search" placeholder="Search here"/>
			</div>
			
			<div class="user-wrapepr">
				<img src="images/ava-SuperAD.jpg" width="40px" height="40px" alt="">
				<div>
					<h4>Khanh</h4>
					<small>Super admin</small>
				</div>
			</div>
		</header>
		
		<main>
			
			<div class="cards">
				<div class="card-single">
					<div>
						<h1>54</h1>
						<span>Customers</span>
					</div>
					<div>
						<span class="las la-users"></span>
					</div>
				</div>
				<div class="card-single">
					<div>
						<h1>100</h1>
						<span>Orders</span>
					</div>
					<div>
						<span class="las la-shopping-bag"></span>
					</div>
				</div>
				<div class="card-single">
					<div>
						<h1>$24k</h1>
						<span>Income</span>
					</div>
					<div>
						<span class="lab la-google-wallet"></span>
					</div>
				</div>
			</div>
		</main>
	</div>