package endpoint;

import java.io.IOException;
import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/pong", encoders = PongMessageEncoder.class, decoders = MoveMessageDecoder.class)
public class PongServer {

    private static Session s1;
    private static Session s2;
    private static PongGame game;

    @OnOpen
    public void onOpen(Session session) throws IOException, EncodeException {
        if (s1 == null) {
            s1 = session;
            System.out.println("Sessão 1: Entrou");
            session.getBasicRemote().sendText("{\"type\": 0, \"player\": 1}");
        } else if (s2 == null) {
            s2 = session;
            System.out.println("Sessão 2: Entrou");
            session.getBasicRemote().sendText("{\"type\": 0, \"player\": 2}");
            // Jogo vai começar
            s1.getBasicRemote().sendText("{\"type\": 1}");
            s2.getBasicRemote().sendText("{\"type\": 1}");
            // Cria jogo e manda as coordenadas da bola e das palhetas de cada jogador 
            game = new PongGame(s1, s2);
            game.start();
        } else {
            session.close();
        }
    }

    @OnMessage
    public void onMessage(Session session, MoveMessage message) throws IOException, EncodeException {
        game.setarMovimento(message);
    }

    @OnClose
    public void onClose(Session session) throws IOException, EncodeException {
//        if (s1 == session || s2 == session) {
//            s1.getBasicRemote().sendText("{\"type\": 3}");
//            s2.getBasicRemote().sendText("{\"type\": 3}");
            s1 = null;
            s2 = null;
            game.interrupt();
            game = null;
            System.out.println("Saindo da sessão 1");
            System.out.println("Saindo da sessão 2");
//        }
    }
}
