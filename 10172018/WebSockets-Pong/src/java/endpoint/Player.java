package endpoint;

public class Player {
    private int posicao;
    private int largura;
    private int altura;
    private int pontuacao;

    public Player(int posicao, int largura, int altura, int pontuacao) {
        this.posicao = posicao;
        this.largura = largura;
        this.altura = altura;
        this.pontuacao = pontuacao;
    }    
    
    public int getPosicao() {
        return posicao;
    }

    public void setPosicao(int posicao) {
        this.posicao = posicao;
    }

    public int getLargura() {
        return largura;
    }

    public void setLargura(int largura) {
        this.largura = largura;
    }

    public int getAltura() {
        return altura;
    }

    public void setAltura(int altura) {
        this.altura = altura;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(int pontuacao) {
        this.pontuacao = pontuacao;
    }        
}
