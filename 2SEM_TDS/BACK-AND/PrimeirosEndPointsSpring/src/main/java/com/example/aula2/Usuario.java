package com.example.aula2;

public class Usuario {

    private String nome;
    private int idade;
    private int cpf;

    public Usuario(String nome,int cpf,int idade){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
    }
    public Usuario(){}

    public int getCpf() {
        return cpf;
    }

    public int getIdade() {
        return idade;
    }

    public String getNome() {
        return nome;
    }

    public void setCpf(int cpf) {
        this.cpf = cpf;
    }

    public int setIdade(int idade) {
        this.idade = idade;
        return idade;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
