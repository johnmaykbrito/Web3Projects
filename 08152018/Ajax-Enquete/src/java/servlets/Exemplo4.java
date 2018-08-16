package servlets;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONException;

@MultipartConfig
public class Exemplo4 extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private static int[] votos = new int[8];

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String disciplina = req.getParameter("disciplina");
        if (disciplina != null) {
            int index = Integer.parseInt(disciplina);
            votos[index]++;
            resp.setContentType("text/plain");
            resp.getWriter().write(this.listaVotos());
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/plain");
        resp.getWriter().write(this.listaVotos());
    }

    private String listaVotos() {
        try {
            JSONArray retorno = new JSONArray(votos);
            return retorno.toString();
        } catch (JSONException ex) {
            Logger.getLogger(Exemplo4.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
}
