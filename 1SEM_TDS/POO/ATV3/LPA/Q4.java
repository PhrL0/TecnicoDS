package LPA;

import java.util.Scanner;

public class Q4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int num1,num2;

        System.out.print("Digite o primeiro número:");
        num1 = scan.nextInt();

        System.out.print("Digite o segundo número:");
        num2 = scan.nextInt();

        System.out.println(calcMMC(num1,num2));

    }
    private static  int calcMMC(int num1,int num2){
        int max = Math.max(num1,num2);

        int mmc = max;

        while(mmc % num1 != 0 || mmc % num2 == 0){
            mmc = mmc + max;
        }
        return mmc;
    }
}
