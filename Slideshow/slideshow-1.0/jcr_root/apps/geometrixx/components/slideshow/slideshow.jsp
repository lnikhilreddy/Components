<%--

  herc-slideshow component.

  herc-slideshow

--%><%
%><%@include file="/libs/foundation/global.jsp"%><%
%><%@page import="com.day.cq.wcm.api.WCMMode" %><%
%><%@page session="false" %><%
%><%
	// TODO add you code here
%>
<c:set var="isEditMode"><%= WCMMode.fromRequest(request) == WCMMode.EDIT %></c:set>
<c:if test="${isEditMode}">
    <script type="text/javascript" src="${component.path}/clientlibs/HertzRichText.js"></script>
</c:if>

slideshow component