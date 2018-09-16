<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Pong</title>
        <link rel="stylesheet" type="text/css" href="index.css"/>
    </head>
    <body>
        <div id="buttons" style="width: 600px;" >
            <button id="play" value="play">Play</button>
            <p>
                <strong>Player 1</strong> - Lado <span style="color: blue">esquerdo</span> (<i>host</i> do jogo)
                <br/><strong>Controles: </strong>letras <strong><i>W</i></strong> & <strong><i>S</i></strong>
            </p>
            <p>
                <strong>Player 2</strong> - Lado <span style="color: crimson">direito</span> (<i>convidado</i> do jogo)
                <br/><strong>Controles: </strong>setas <strong><i>Up</i></strong> & <strong><i>Down </i></strong>
                (<strong>&#8593;</strong> & <strong>&#8595;</strong>)
            </p>
            <br/>
            <h3>Professor,</h3>
            <p style="text-align: justify">
                Acredito que o projeto cumpre os requisitos da questão. Porém segue uma explicação, resumida, por extenso.<br/>
                Os fundamentos do jogo já é bem conhecido pelo sr., por isso darei foco maior em como desenvolvi a questão.<br/><br/>
                O jogo usa 2 Websockets; um para contar as sessões e outro para tranferir os dados do canvas.<br/><br/>
                Como definido na questão, o jogador que atingir 5 ponto primeiro vence. Os jogadores são identificados por seu lado e por suas cores;
                O Player 1 do lado esquerdo é azul e player do lado direito é vermelho.<br/><br/>
                A transferência de dados é por Figura e não por Snapshot, por que a figura tem muito menos informações a serem tranferidas do que um Snapshot de, por exemplo, 700x600 pixels.<br/><br/>
                Três figuras são enviadas e formato JSON ao servidor. O JSON de todas as 3 figuras têm o seguinte formato:<br/><br/>
                <code>{"item": "","x": "", "y": ""}</code><br/><br/>
                O item pode variar entre: ball, player e ia.<br/><br/>
                Para ver a rajada de dados enviadas ao servidor, basta verificar o console do servidor enquanto o jogo está sendo executado.<br/><br/>
                <img src="rajada.png"><br<br/><br/><br/>
                O host do jogo é a sessão dominante, de onde a posição da bola e a barra de Player 1, Azul será passada a sessão dominada, do jogador convidado Player 2, Vermelho.<br/>
                Apenas quando o Player 2, Vermelho move sua barra é que faz papel de sessão dominante, mas apenas no que refere a posição da barra. Isto é, a posição da bola é totalmente
                dependente da sessão dominante Player 1, Azul.<br/><br/>
                O projeto também usa Encoder e Decoder, mas isso o sr. já sabe como funciona.<br/><br/>
                No mais, preciso dormir!<br/>
                Até quarta!<br/><br/>
                At.te, John.
            </p>
            <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </div>
    </body>
</html>
