<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1> BIENVENIDO!</h1>
<p>
<img src="/balance/soporte/club.gif" align="left">
<jsp:useBean id="ALG" type="Alumno"
scope="request" />
Cui:
<jsp:getProperty name="ALG" property="cui" />,
</p><p>
Clave:
<jsp:getProperty name="ALG" property="clave" />
</p>
</body>
</html>