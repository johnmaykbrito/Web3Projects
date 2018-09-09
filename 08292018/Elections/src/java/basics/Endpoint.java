package basics;

import java.io.IOException;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/election")
public class Endpoint {

    int[] array = new int[8];

    @OnOpen
    public void onOpen(Session session) throws IOException {
        System.out.println("Open");
        // montar json
        // retornar json
    }

    @OnMessage
    public void onMessage(Session session, String param) throws IOException {
        session.getBasicRemote().sendText("Return");
        for (int i = 0; i < array.length; i++) {
            int x = 1 + (int) (Math.random() * 100);
            switch (i) {
                case 0:
                    array[i] += (int) Math.round(Math.pow(1.1, x));
                    break;
                case 1:
                    array[i] += (int) Math.round(Math.log10(x) / Math.log10(1.0005));
                    break;
                case 2:
                    array[i] += 70 * x;
                    break;
                case 3:
                    array[i] += (int) Math.round(6500 * Math.sin(x / 57.3));
                    break;
                case 4:
                    array[i] += 35 * x + 150;
                    break;
                case 5:
                    array[i] += (int) Math.round((5 * x) * (Math.log(x)));
                    break;
                case 6:
                    array[i] += 8 * x;
                    break;
                case 7:
                    array[i] += 28 * x;
                    break;
                default:
                    break;
            }
        }
        String str = "";
        for (double d : array) {
            str += d + ", ";
        }
        System.out.println(str);
    }

    @OnClose
    public void onClose(Session session) {
        System.out.println("Close");
    }
}
