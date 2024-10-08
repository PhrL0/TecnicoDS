public class Tv implements ControleRemoto{
    private int polegada = 50;


    @Override
    public void ligar() {
        System.out.println("Ligando...");
    }

    @Override
    public void desligar() {
        System.out.println("Desligando...");
    }

    @Override
    public void volumeMais(int vol) {
        vol = vol + 1;
        System.out.println("Volume mais: " + vol);
    }

    @Override
    public void volumeMenos(int vol) {
        vol = vol - 1;
        System.out.println("Volume mais: " + vol);
    }

    @Override
    public int getPolegada(int pol) {
        return polegada;
    }
}