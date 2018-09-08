package basics;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/election")
public class Endpoint {
    
    @OnOpen
    public void onOpen(Session session) {
        
    }
    
    @OnMessage
    public void onMessage(Session session, String param) {
        
    }
    
    @OnClose
    public void onClose(Session session) {
        
    }
}
