package basics;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/game/game")
public class Endpoint1 {

    @OnOpen
    public void onOpen(Session session, @PathParam("room") String room) {
    }

    @OnMessage
    public void onMessage(Session session, String text) {
        System.out.println("text: " + text);
        try {
            for (Session s : session.getOpenSessions()) {
                if (s.isOpen()) {
                    s.getBasicRemote().sendText(text);
                }
            }
        } catch (IOException ex) {
            Logger.getLogger(Endpoint1.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

}
