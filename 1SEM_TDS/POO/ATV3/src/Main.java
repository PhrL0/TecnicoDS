public class Main {
    public static void main(String[] args) {

        Aluno a1 = new Aluno();

        a1.PegaNotas(5.0);
        a1.PegaNotas(5.0);
        a1.PegaNotas(5.0);

        a1.calcMedia();
        System.out.println(a1.getMedia());


    }
}