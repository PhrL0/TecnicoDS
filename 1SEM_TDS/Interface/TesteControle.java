public class TesteControle {
    public static void main(String[] args) {
        Tv tv1 = new Tv();
        ControleRemoto controle1 = new Tv();

        controle1.ligar();
        controle1.volumeMais(6);
        controle1.volumeMenos(6);
        controle1.desligar();
        System.out.println(controle1.getPolegada(60));
    }
}
