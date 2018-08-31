<%-- 
    Document   : index
    Created on : 29/08/2018, 19:00:48
    Author     : aluno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="index.css"/>
        <script type="text/javascript" src="index.js"></script>
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Tic Tac Toe</h1>

        <div id="">
            <table>
                <caption>Campo de jogo</caption>
                <thead>
                    <tr><th></th><th></th><th></th></tr>
                </thead>
                <tbody id="tb">
                    <tr><td id="a"></td><td id="b"></td><td id="c"></td></tr>
                    <tr><td id="d"></td><td id="e"></td><td id="f"></td></tr>
                    <tr><td id="g"></td><td id="h"></td><td id="i"></td></tr>
                </tbody>
                <button id="botao" type="button">Enviar</button>
            </table>
        </div>
    </body>
</html>
