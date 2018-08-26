<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="UTF-8" />
        <title>Desenvolvimento de Sistemas Web III</title>
        <link rel="stylesheet" type="text/css" href="index.css" />
        <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="index.js"></script>
    </head>
    <body>
        <form method="post" action="Exemplo4" id="formulario">
            <fieldset id="input"><legend>Enquete</legend> <label>Qual
                    sua disciplina favorita do 4º período?</label>
                <ul>
                    <c:forTokens items="${initParam['disciplinas']}" delims="," var="disciplina" varStatus="status">
                        <li><input type="radio" name="disciplina" value="${status.index}" /> ${disciplina}</li>
                        </c:forTokens>
                </ul>
                <input type="submit" /> <input type="button" value="Ver resultado" id="resultado" /></fieldset>
            <fieldset id="output"><legend>Resultado da enquete:</legend>
                <ul>
                    <c:forTokens items="${initParam['disciplinas']}" delims="," var="disciplina" varStatus="status">
                        <li>${disciplina} &ndash; <span class="voto">&nbsp;</span><br />
                            <meter min="0" max="100">&nbsp;</meter> <span class="percent">&nbsp;</span>
                        </li>
                    </c:forTokens>
                </ul>
                <p>Total de votos: <span id="total">0</span>.</p>
                <p><input type="button" value="Votar novamente" id="revotar" /></p>
            </fieldset>
        </form>
        <h1>John</h1>
    </body>
</html>