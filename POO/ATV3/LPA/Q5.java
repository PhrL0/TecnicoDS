package LPA;

import java.util.Scanner;

public class Q5 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num, cont = 0;

        while(cont == 0){
            System.out.println("0. Encerrar \n1. Adição \n2.Subtração \n3.Multiplicação \n4.Divisão");
            num = scan.nextInt();

            switch(num){
                case 0:
                    System.out.println("Saindo...");
                    cont = 1;
                    break;
                case 1:
                    System.out.println("Entrou adição");
                    break;
                case 2:
                    System.out.println("Entrou subtração");
                    break;
                case 3:
                    System.out.println("Entrou multiplicação");
                    break;
                case 4:
                    System.out.println("Entrou divisão");
                    break;
            }
        }

    }
}
