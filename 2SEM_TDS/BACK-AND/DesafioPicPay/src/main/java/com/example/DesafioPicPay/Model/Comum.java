package com.example.DesafioPicPay.Model;

public class Comum  extends Usuario {
    private String cpf;

    public Comum(){};

    public Comum(String nome, String email, String senha, String cpf, double saldo){
        super(nome, email, senha, saldo);
        this.cpf = cpf;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
