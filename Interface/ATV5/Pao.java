package ATV5;

public class Pao extends ProdutoPadaria{
    private String massa;
    private boolean assar;

    public Pao(String nome,double preco,String massa,boolean assar){
        super(nome,preco);
        this.massa = massa;
        this.assar = assar;
    }

    public boolean isAssar() {
        return assar;
    }

    public String getMassa() {
        return massa;
    }

    public void setAssar(boolean assar) {
        this.assar = assar;
    }

    public void setMassa(String massa) {
        this.massa = massa;
    }
}
