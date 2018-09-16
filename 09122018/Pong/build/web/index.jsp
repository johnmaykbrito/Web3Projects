<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Pong</title>
        <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="index.js"></script>
        <script type="text/javascript" src="index_2.js"></script>
        <link rel="stylesheet" type="text/css" href="index.css"/>
    </head>
    <body>
        <div id="buttons" style="width: 500px;" >
            <button id="play" value="play">Play</button>
            <p>
                <strong>Player 1</strong> - Lado <span style="color: blue">esquerdo</span> (<i>host<i> do jogo)
                        <br/><strong>Controles: </strong>letras <strong><i>W</i></strong> & <strong><i>S</i></strong>
            </p>
            <p>
                <strong>Player 2</strong> - Lado <span style="color: crimson">direito</span> (<i>convidado</i> do jogo)
                <br/><strong>Controles: </strong>setas <strong><i>Up</i></strong> & <strong><i>Down </i></strong>
                (<strong>&#8593;</strong> & <strong>&#8595;</strong>)
            </p>
        </div>
    </body>
</html>
