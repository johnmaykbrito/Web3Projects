package websocket;

import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/jogodavelha/{room}")
public class Endpoint {

    public static int contador = 0;

    @OnOpen
    public void onOpen(Session session, @PathParam("room") String room) {
        session.getUserProperties().put("room", room);
    }

    @OnMessage
    public void onMessage(String cell, Session session) {
        String json = "{\"cell\":\"" + cell + "\", \"counter\":\"" + Integer.toString(contador++) + "\"}";
        String room = (String) session.getUserProperties().get("room");

        try {
            for (Session s : session.getOpenSessions()) {
                if (s.isOpen() && room.equals((s.getUserProperties().get("room")))) {
                    s.getBasicRemote().sendText(json);
                }
            }
        } catch (IOException ex) {
            Logger.getLogger(Endpoint.class.getName()).log(Level.SEVERE, null, ex);
        }

    }
}
