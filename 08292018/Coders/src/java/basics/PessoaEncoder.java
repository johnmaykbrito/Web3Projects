package basics;

import javax.json.Json;
import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

public class PessoaEncoder implements Encoder.Text<Pessoa> {

    @Override
    public String encode(Pessoa pessoa) throws EncodeException {
        return Json.createObjectBuilder()
                .add("name", pessoa.getName())
                .add("age", pessoa.getAge())
                .build().toString();
    }

    @Override
    public void init(EndpointConfig config) {
    }

    @Override
    public void destroy() {
    }
    
}
