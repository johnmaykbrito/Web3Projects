var c, cc, ws, player;
function onMessage(evt) {
    var msg = JSON.parse(evt.data);
    switch (msg.type) {
        case 0:
            player = msg.player;
            break;
        case 1:
            window.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    var move = {player: player, move: e.key};
                    ws.send(JSON.stringify(move));
                }
            });
            break;
        case 2:
            update(msg);
            if ((player === 1 && msg.player1.pontuacao === 5) || (player === 2 && msg.player2.pontuacao === 5)) {
                alert('Você perdeu!');
                ws.close();
            } else if ((player === 1 && msg.player2.pontuacao === 5) || (player === 2 && msg.player1.pontuacao === 5)) {
                alert('Você ganhou!');
                ws.close();
            }
            break;
//        case 3:
//            console.log('Fim de jogo!');
//            window.addEventListener('keydown', null);
//            break;
    }
}

window.onload = function () {
    c = document.getElementById('gc');
    cc = c.getContext('2d');
    var wsUri = "ws://" + document.location.host + document.location.pathname + "pong";
    ws = new WebSocket(wsUri);
    ws.onmessage = onMessage;
};
function update(obj) {
    /* Criando a tela */
    cc.fillStyle = 'black';
    cc.fillRect(0, 0, c.width, c.height);
    /* Criando a bola */
    cc.fillStyle = 'white';
    cc.fillRect(obj.ball.x - obj.ball.d / 2, obj.ball.y - obj.ball.d / 2, obj.ball.d, obj.ball.d);
    /* Criando palheta 1 */
    cc.fillRect(0, obj.player1.posicao, obj.player1.largura, obj.player1.altura);
    /* Criando palheta 2 */
    cc.fillRect(c.width - obj.player2.largura, obj.player2.posicao, obj.player2.largura, obj.player2.altura);
    /* Criando pontuação 1 */
    cc.fillText(obj.player1.pontuacao, 100, 100);
    /* Criando pontuação 2 */
    cc.fillText(obj.player2.pontuacao, c.width - 100, 100);
}