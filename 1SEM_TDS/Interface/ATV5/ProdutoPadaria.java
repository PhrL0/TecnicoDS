package ATV5;

public class ProdutoPadaria implements Produto{
    private String nome;
    private double preco;


    public ProdutoPadaria(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }


    @Override
    public String getNome() {
        return nome;
    }

    @Override
    public double getPreco() {
        return preco;
    }

    @Override
    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public void setPreco(Double preco) {
        this.preco = preco;
    }
    public void exibir(String nome, double preco){
        System.out.println("Nome do produto: " + nome + "\nPreço do produto: " + preco);
    }
}
