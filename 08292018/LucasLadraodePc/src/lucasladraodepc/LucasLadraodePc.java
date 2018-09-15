/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lucasladraodepc;
import java.util.Scanner;
/**
 *
 * @author john
 */
public class LucasLadraodePc {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int D = ler.nextInt();
        int C = ler.nextInt();
        int horas = D* 3;
        int minutos = horas * 60;
        int diasMine = minutos / 20;
        int ticks = diasMine * 12000;
        
        int T = ticks/C;
        System.out.println(T);
        // TODO code application logic here
    }
    
}
