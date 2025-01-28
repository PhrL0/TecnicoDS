public class Sala {
    private boolean temTV;
    Comodo comodo;
    public Sala(boolean temTV, Comodo comodo){
        this.temTV = temTV;
        this.comodo = comodo;
    }

    public boolean isTemTV() {
        return temTV;
    }

}
