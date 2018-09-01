package basics;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.EncodeException;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/coders", encoders = PessoaEncoder.class, decoders = PessoaDecoder.class)
public class Endpoint {

    @OnMessage
    public void onMessage(Session session, Pessoa pessoa) {
        
        // Antes de usar e modificar Pessoa o Decoder de Pessoa foi executada
        // De JSON para objeto
        pessoa.setName("Joana"); // era "John"
        pessoa.setAge("26"); // era "25"
        
        try {
            // Para enviar de volta com os dados modificados o Encoder de Pessoa foi executada
            // De objeto para JSON
            session.getBasicRemote().sendObject(pessoa);
        } catch (IOException | EncodeException ex) {
            Logger.getLogger(Endpoint.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

}
