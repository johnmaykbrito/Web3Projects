package endpoint;

import java.io.IOException;
import javax.websocket.EncodeException;
import javax.websocket.Session;

public class PongGame extends Thread {

    // Posição das palhetas
    int p1y = 40;
    int p2y = 40;
    // Largura da palheta
    int pt = 10;
    // Altura da palheta
    int ph = 100;
    // Velocidade da palheta
    int pv = 4;
    // Coordenadas da bola
    int bx = 50;
    int by = 50;
    // Tamanho da bola
    int bd = 6;
    // Velocidade da bola
    int xv = 4;
    double yv = 4.0;
    // Pontuação dos jogadores
    int score1 = 0;
    int score2 = 0;
    // Área do jogo
    int width = 640;
    int height = 480;
    // Jogadores
    Session s1;
    Session s2;

    public PongGame(Session s1, Session s2) {
        this.reset();
        this.s1 = s1;
        this.s2 = s2;
    }

    @Override
    public void run() {
        this.reset();
        PongMessage msg;
        try {
            do {
                Thread.sleep(50);
                msg = this.atualizar();
                s1.getBasicRemote().sendObject(msg);
                s2.getBasicRemote().sendObject(msg);
            } while (msg.getPlayer1().getPontuacao() < 5 && msg.getPlayer2().getPontuacao() < 5);
        } catch (IOException | EncodeException | InterruptedException ie) {
            System.out.println(ie.getMessage());
        }
    }

    public PongMessage atualizar() {
        this.update();
        Player p1 = new Player(p1y, pt, ph, score1);
        Player p2 = new Player(p2y, pt, ph, score2);
        Ball ball = new Ball(bx, by, bd);
        return new PongMessage(p1, p2, ball);
    }

    public void setarMovimento(MoveMessage message) {
        String move = message.getMove();
        int player = message.getPlayer();
        this.move(player, move);
    }

    private void reset() {
        bx = width / 2;
        by = height / 2;
        xv = -xv;
        yv = 3;
    }

    private void update() {
        bx += xv;
        by += yv;
        /* Se tocar no topo da tela */
        if (by < 0 && yv < 0) {
            yv = -yv;
        }
        /* Se tocar na parte de baixo da tela */
        if (by > height && yv > 0) {
            yv = -yv;
        }
        /* Se tocar no lado esquerdo da tela */
        if (bx < 0) {
            /* Se bater na palheta 1 */
            if (by > p1y && by < p1y + ph) {
                xv = -xv;
                double dy = by - (p1y + ph / 2);
                yv = dy * 0.3;
            } else {
                score2++;
                reset();
            }
        }
        /* Se tocar no lado direito da tela */
        if (bx > width) {
            /* Se bater na palheta 2 */
            if (by > p2y && by < p2y + ph) {
                xv = -xv;
                double dy = by - (p2y + ph / 2);
                yv = dy * 0.3;
            } else {
                score1++;
                reset();
            }
        }
    }

    private void move(int player, String direcao) {
        if (direcao.equals("ArrowUp")) {
            if (player == 1) {
                p1y -= pv;
            } else if (player == 2) {
                p2y -= pv;
            }
        } else if (direcao.equals("ArrowDown")) {
            if (player == 1) {
                p1y += pv;
            } else if (player == 2) {
                p2y += pv;
            }
        }
    }
}
