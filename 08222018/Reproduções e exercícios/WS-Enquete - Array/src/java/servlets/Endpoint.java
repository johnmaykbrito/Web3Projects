package servlets;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import org.json.JSONArray;
import org.json.JSONException;

@ServerEndpoint("/enquete")
public class Endpoint {

    static int[] votes = new int[8];

    @OnOpen
    public void onOpen(Session session) {

    }

    @OnMessage
    public void onMessage(Session session, String disciplina) {
        votes[Integer.parseInt(disciplina)]++;
        String json = "";

        try {
            JSONArray array = new JSONArray(votes);
            json = array.toString();
        } catch (JSONException ex) {
            Logger.getLogger(Endpoint.class.getName()).log(Level.SEVERE, null, ex);
        }

        try {
            session.getBasicRemote().sendText(json);
        } catch (IOException e) {
            e.getMessage();
        }
    }

}
