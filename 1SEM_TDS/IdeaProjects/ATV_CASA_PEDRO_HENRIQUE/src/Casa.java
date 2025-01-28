public class Casa {
    private String cor;
    private float preco;
    private float metragem;
    private Quarto quarto;
    private Sala sala;

    public Casa(String cor, float preco, float metragem){
        this.cor = cor;
        this.preco = preco;
        this.metragem = metragem;
        this.quarto = new Quarto(1,new Comodo("Quarto de hospede"));
        this.sala = new Sala(true,new Comodo("Sala de reunião"));
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public float getMetragem() {
        return metragem;
    }

    public float getPreco() {
        return preco;
    }

    public void setMetragem(float metragem) {
        this.metragem = metragem;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }


    public void mostrarDetalhes(){
        System.out.println("Cor: " + getCor() + "\nMetragem: " + getMetragem() + "\nPreco: " + getPreco() + "\nSala: " + sala.comodo.getNome() + "\nTem TV: " + sala.isTemTV() + "\nQuarto: " + quarto.comodo.getNome() + "\nNúmeros de camas: " + quarto.getNumeroCamas());
    }
}
