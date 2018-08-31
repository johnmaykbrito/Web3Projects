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
        <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="index.js"></script>
        <link rel="stylesheet" type="text/css" href="index.css"/>
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Idosa's Game</h1>
        <table>
            <tbody id="tb">
                <tr><td id="a"></td><td id="b"></td><td id="c"></td></tr>
                <tr><td id="d"></td><td id="e"></td><td id="f"></td></tr>
                <tr><td id="g"></td><td id="h"></td><td id="i"></td></tr>
            </tbody>
        </table>
        <br/>
        <button id="botao" type="button" onclick="insertExcerpt()">Play Again</button>
    </body>
</html>
