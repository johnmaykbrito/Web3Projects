package basics;

import java.io.StringReader;
import javax.json.Json;
import javax.json.JsonObject;
import javax.websocket.DecodeException;
import javax.websocket.Decoder;
import javax.websocket.EndpointConfig;

public class PessoaDecoder implements Decoder.Text<Pessoa> {

    @Override
    public Pessoa decode(String textMessage) throws DecodeException {
        Pessoa pessoa = new Pessoa();
        JsonObject obj = Json.createReader(new StringReader(textMessage)).readObject();
        pessoa.setName(obj.getString("name"));
        pessoa.setAge(obj.getString("age"));
        return pessoa;
    }

    @Override
    public void init(EndpointConfig config) {
    }

    @Override
    public void destroy() {
    }

    @Override
    public boolean willDecode(String s) {
        return true;
    }

}
