<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Playing</title>
        <script type="text/javascript" src="index.js"></script>
    </head>
    <body>
        <h1>Playing with AJAX</h1>
        <form method="post" action="Servlet" id="form" name="myform">
            <p>Nome: <input  type="text" name="nome"></p>
            <button type="submit" >Enviar</button>
        </form>
        <p id="result">Meu nome é</p>
    </body>
</html>
