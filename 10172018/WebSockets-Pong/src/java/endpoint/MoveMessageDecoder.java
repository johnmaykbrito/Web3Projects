package endpoint;

import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;
import org.json.JSONException;
import org.json.JSONObject;

public class MoveMessageDecoder implements Decoder.Text<MoveMessage> {

    @Override
    public void init(final EndpointConfig config) {
    }

    @Override
    public void destroy() {
    }

    @Override
    public MoveMessage decode(final String textMessage) throws DecodeException {
        MoveMessage message = new MoveMessage();
        try {
            JSONObject obj = new JSONObject(textMessage);
            message.setPlayer(obj.getInt("player"));
            message.setMove(obj.getString("move"));
        } catch (JSONException e) {
            System.out.println(e);
        }
        return message;
    }

    @Override
    public boolean willDecode(final String s) {
        return true;
    }
}
