package servlets;

import java.io.IOException;
import java.util.HashMap;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/enquete")
public class Endpoint {

    static HashMap<Integer, Integer> votos = new HashMap<>();

    @OnOpen
    public void onOpen(Session session) {
        if (votos.isEmpty()) {
            initializeIt();
        }
    }

    @OnMessage
    public void onMessage(Session session, String disciplina) {
        votos.put(Integer.parseInt(disciplina), votos.get(Integer.parseInt(disciplina)) + 1);
        String responseJSON = generateJson();
        System.out.println(responseJSON);
        try {
            session.getBasicRemote().sendText(responseJSON);
        } catch (IOException e) {
            e.getMessage();
        }
    }

    private void initializeIt() {
        for (int i = 0; i < 8; i++) {
            votos.put(i, 0);
        }
    }

    private String generateJson() {
        String responseJSON = "{";
        int sum = 0;
        for (int i = 0; i < 8; i++) {
            sum += votos.get(i);
            responseJSON += "\"v" + i + "\": " + votos.get(i) + "";
            if (i < 7) {
                responseJSON += ", ";
            }
            if (i == 7) {
                responseJSON += ", \"v" + (i + 1) + "\": " + sum;
            }
        }
        responseJSON += "}";
        return responseJSON;
    }
}
