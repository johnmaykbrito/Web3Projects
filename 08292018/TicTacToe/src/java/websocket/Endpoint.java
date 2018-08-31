/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package websocket;

import java.io.IOException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnMessage;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author aluno
 */
@ServerEndpoint("/jogodavelha")
public class Endpoint {
    
    public static int contador = 0;
    public static ArrayList<Session> sessions = new ArrayList<>();
    
//    @OnOpen
    public void onOpen(Session session ){
        try {
            session.getBasicRemote().sendText(Integer.toString(contador++));
        } catch (IOException ex) {
            Logger.getLogger(Endpoint.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    @OnMessage
    public void onMessage(String cell, Session session){
        String json = "{\"cell\":\"" + cell + "\", \"counter\":\"" +  Integer.toString(contador++) + "\"}";
        if (!sessions.contains(session)) {
            sessions.add(session);
        }
        try {
            session.getBasicRemote().sendText(json);
            System.out.println(sessions.size());
            
        } catch (IOException ex) {
            Logger.getLogger(Endpoint.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
}
