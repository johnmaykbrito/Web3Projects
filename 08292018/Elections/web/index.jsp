<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="resources/js/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="resources/js/index.js"></script>
        <link href="resources/index.css" rel="stylesheet"/>
        <title>Elections</title>
    </head>
    <body>
        <h2>Elections</h2>
        <div class="display">
            <fieldset id="output"><legend>Election current results:</legend>
                <ul>
                    <c:forTokens items="${initParam['partidos']}" delims="," var="partido" varStatus="status">
                        <li>${partido} &ndash; <span class="voto">&nbsp;</span><br />
                            <meter min="0" max="100">&nbsp;</meter> <span class="percent">&nbsp;</span>
                        </li>
                    </c:forTokens>
                </ul>
                <p>Total of votes: <span id="total">0</span>.</p>
            </fieldset>
            <fieldset>
                <legend>Simulate Election</legend>
                <p id="resposta">Votes automatically each 5 secs.</p>
                <p>
                    <input type="button" id="vote" value="start simulation" />
                    <input type="button" id="stop" value="end simulation" />
                </p>
                <p id="mensagem"></p>
            </fieldset>
        </div>
    </body>
</html>
