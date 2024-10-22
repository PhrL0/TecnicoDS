public class Quarto {
    private int numeroCamas;

    Comodo comodo;


    public Quarto(int numeroCamas, Comodo comodo){
        this.numeroCamas = numeroCamas;
        this.comodo = comodo;
    }
    public int getNumeroCamas() {
        return numeroCamas;
    }

    public void setNumeroCamas(int numeroCamas) {
        this.numeroCamas = numeroCamas;
    }
}
