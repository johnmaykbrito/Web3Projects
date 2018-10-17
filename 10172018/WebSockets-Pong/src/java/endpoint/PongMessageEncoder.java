package endpoint;

import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;
import org.json.JSONObject;

public class PongMessageEncoder implements Encoder.Text<PongMessage> {

    @Override
    public void init(final EndpointConfig config) {
    }

    @Override
    public void destroy() {
    }

    @Override
    public String encode(final PongMessage message) throws EncodeException {
        JSONObject obj = new JSONObject(message);
        return obj.toString();
    }
}
