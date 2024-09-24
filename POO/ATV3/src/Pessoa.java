
public class Pessoa {
    protected String nome;
    protected int idade;
    protected int cpf;
    protected int celular;

    public Pessoa(){}

    public Pessoa(String nome, int idade, int cpf, int celular){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.celular = celular;
    }



    public int getCelular() {
        return celular;
    }

    public int getCpf() {
        return cpf;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCelular(int celular) {
        this.celular = celular;
    }

    public void setCpf(int cpf) {
        this.cpf = cpf;
    }
}
