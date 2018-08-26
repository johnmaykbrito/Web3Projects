<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="UTF-8" />
        <title>Desenvolvimento de Sistemas Web III</title>
        <script type="text/javascript" src="resultado.js"></script>
        <link rel="stylesheet" type="text/css" href="resultado.css" />
    </head>
    <body>
        <fieldset id="output">
            <legend>Resultado da enquete:</legend>
            <ul>
                <c:forTokens items="${initParam['disciplinas']}" delims="," var="disciplina" varStatus="status">
                    <li>${disciplina} &ndash; <span class="voto">&nbsp;</span><br />
                        <meter min="0" max="100">&nbsp;</meter> <span class="percent">&nbsp;</span>
                    </li>
                </c:forTokens>
            </ul>
            <p>Total de votos: <span id="total">0</span>.</p>
        </fieldset>
    </body>
</html>