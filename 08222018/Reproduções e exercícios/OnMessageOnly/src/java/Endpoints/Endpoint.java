/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Endpoints;

import java.io.IOException;
import javax.websocket.OnMessage;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author User
 */
@ServerEndpoint("/message")
public class Endpoint {
    
    @OnMessage
    public void onMessage(Session session, String message) {
        System.out.println("-->" + message);
        try {
            session.getBasicRemote().sendText(message);
        } catch (IOException ex) {
            System.out.println(ex.getMessage());
        }
    }
    
}
