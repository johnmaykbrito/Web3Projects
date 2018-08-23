package servlets;

import java.io.IOException;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/hello")
public class HelloEndpoint {
    
    @OnOpen
    public void onOpen(Session session) {
        System.out.println(session.getId() + " CONNECTED.");
        try {
            session.getBasicRemote().sendText("<i>"+session.getId() + " is Connected.</i>");
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
    
    @OnMessage
    public void onMessage(Session session, String str) {
        System.out.println(session.getId() + " ON MESSAGE");
        try {
            session.getBasicRemote().sendText("<i>"+session.getId() + " on Message.</i><br />-" + str);
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
    
    @OnClose
    public void onClose(Session session) {
        System.out.println(session.getId() + " HAS CLOSED THE SESSION.");
    }
    
}
