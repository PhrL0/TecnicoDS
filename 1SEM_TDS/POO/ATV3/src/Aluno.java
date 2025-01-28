import java.util.ArrayList;

public class Aluno extends Pessoa {
    private String curso;
    private ArrayList<Double>  notas = new ArrayList<>();
    private double media;

    public Aluno(){}

    public Aluno(String nome, int idade, int cpf, int celular, String curso){
        super(nome, idade, cpf, celular);
        this.curso = curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public void setMedia(double media) {
        this.media = media;
    }

    public String getCurso() {
        return curso;
    }

    public double getMedia() {
        return media;
    }

    public void PegaNotas(Double nota){
        notas.add(nota);
    }

    public ArrayList<Double> getNotas() {
        return notas;
    }
    public void calcMedia(){
        int pegaTamArray = notas.size();
        double soma = 0;
        for (Double i : notas){
            soma += i;
        }
        setMedia(soma / pegaTamArray);
    }
}
