package sockets;

import java.util.Arrays;
import java.util.stream.IntStream;

public class Tabuleiro {

    private int turn = 0;
    private int[][] tabuleiro = {
        {0, 2, 0, 2, 0, 2, 0, 2},
        {2, 0, 2, 0, 2, 0, 2, 0},
        {0, 2, 0, 2, 0, 2, 0, 2},
        {0, 0, 0, 0, 0, 0, 0, 0},
        {0, 0, 0, 0, 0, 0, 0, 0},
        {1, 0, 1, 0, 1, 0, 1, 0},
        {0, 1, 0, 1, 0, 1, 0, 1},
        {1, 0, 1, 0, 1, 0, 1, 0},};
    public static int BRANCA = 1;
    public static int PRETA = 2;

    public int getTurn() {
        return turn;
    }

    private boolean pecaEhBranca(int x, int y) {
        return tabuleiro[x][y] == BRANCA;
    }

    public int qtdDePecas(int peca) {
        IntStream stream = Arrays.stream(tabuleiro).flatMapToInt(x -> Arrays.stream(x));
        return stream.reduce(0, (a, b) -> a + (b == peca ? 1 : 0));
    }

    public boolean podeJogarNovamente() {
        if (turn == 0) {

        } else {

        }
        return true;
    }

    public boolean mover(int player, int or, int oc, int dr, int dc) {
        /* É a sua vez de jogar? */
        if ((player == PRETA && (pecaEhBranca(or, oc) || turn == 0)) || (player == BRANCA && (!pecaEhBranca(or, oc) || turn == 1))) {
            return false;
        }
        /* Origem e destino devem ser diferentes */
        if (or == dr && oc == dc) {
            return false;
        }
        /* Origem e destino estão no tabuleiro */
        if ((or < 0 || or >= 8) || (oc < 0 || oc >= 8) || (dr < 0 || dr >= 8) || (dc < 0 || dc >= 8)) {
            return false;
        }
        /* Origem possui uma peça? */
        if (tabuleiro[or][oc] == 0) {
            return false;
        }
        /* Destino deve estar vazio */
        if (tabuleiro[dr][dc] != 0) {
            return false;
        }
        boolean ok = false;
        /* Jogada normal */
        if ((pecaEhBranca(or, oc) && or == dr + 1 && (oc == dc - 1 || oc == dc + 1)) || (!pecaEhBranca(or, oc) && or == dr - 1 && (oc == dc - 1 || oc == dc + 1))) {
            tabuleiro[dr][dc] = tabuleiro[or][oc];
            tabuleiro[or][oc] = 0;
            ok = true;
        }
        /* Capturar pedra adversaria */
        if ((or == dr + 2 && (oc == dc - 2 || oc == dc + 2)) || (or == dr - 2 && (oc == dc - 2 || oc == dc + 2))) {
            int ar = (or + dr) / 2;
            int ac = (oc + dc) / 2;
            boolean corPeca = pecaEhBranca(or, oc);
            boolean corOutra = pecaEhBranca(ar, ac);
            if ((corPeca && !corOutra) || (!corPeca && corOutra)) {
                tabuleiro[dr][dc] = tabuleiro[or][oc];
                tabuleiro[ar][ac] = 0;
                tabuleiro[or][oc] = 0;
                ok = true;
            }
        }
        if (ok) {
            turn = (turn + 1) % 2;
        }
        return ok;
    }

    public void printTabuleiro() {
        for (int[] linha : tabuleiro) {
            System.out.println(Arrays.toString(linha));
        }
    }

    @Override
    public String toString() {
        return Arrays.deepToString(tabuleiro);
    }

    public static void main(String[] args) {
        Tabuleiro tab = new Tabuleiro();

        tab.mover(BRANCA, 5, 0, 4, 1);
        tab.mover(PRETA, 2, 3, 3, 2);
        tab.mover(PRETA, 2, 7, 3, 6);
//        tab.jogadaValida(BRANCA, 4, 1, 2, 3);
//        tab.jogadaValida(PRETA, 1, 2, 3, 4);
//        tab.jogadaValida(BRANCA, 5, 2, 4, 1);
//        tab.jogadaValida(PRETA, 5, 4, 4, 3);

        tab.printTabuleiro();
    }
}
