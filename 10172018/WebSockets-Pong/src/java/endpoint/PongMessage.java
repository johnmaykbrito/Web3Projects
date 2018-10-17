package endpoint;

public class PongMessage {

    private int type = 2;
    private Player player1 = null;
    private Player player2 = null;
    private Ball ball = null;

    public PongMessage(Player p1, Player p2, Ball b) {
        this.player1 = p1;
        this.player2 = p2;
        this.ball = b;
    }

    public Player getPlayer1() {
        return player1;
    }

    public void setPlayer1(Player player1) {
        this.player1 = player1;
    }

    public Player getPlayer2() {
        return player2;
    }

    public void setPlayer2(Player player2) {
        this.player2 = player2;
    }

    public Ball getBall() {
        return ball;
    }

    public void setBall(Ball ball) {
        this.ball = ball;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
