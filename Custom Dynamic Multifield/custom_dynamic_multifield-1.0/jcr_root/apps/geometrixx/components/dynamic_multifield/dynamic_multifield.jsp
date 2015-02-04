<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<%--
    ADOBE CONFIDENTIAL
    ___________________
    
    Copyright 2012 Adobe Systems Incorporated
    All Rights Reserved.
    
    NOTICE:  All information contained herein is, and remains
        the property of Adobe Systems Incorporated and its suppliers,
if any.  The intellectual and technical concepts contained
    herein are proprietary to Adobe Systems Incorporated and its
    suppliers and are protected by trade secret or copyright law.
    Dissemination of this information or reproduction of this material
    is strictly forbidden unless prior written permission is obtained
    from Adobe Systems Incorporated.
    --%><%@ page import="javax.jcr.Node,
    com.day.cq.i18n.I18n,
com.day.cq.wcm.api.components.Toolbar,
com.day.cq.wcm.api.WCMMode,
java.util.Locale,
java.util.ResourceBundle,
java.net.URL,
java.net.MalformedURLException"%><%

%><%@include file="/libs/foundation/global.jsp"%><%
%><cq:defineObjects/><%
%><c:set var="isEditMode"><%= WCMMode.fromRequest(request) == WCMMode.EDIT %> </c:set>
<c:if test="${isEditMode}">
    <cq:includeClientLib js="components.slideshow" />
</c:if>
abcd
