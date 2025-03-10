package com.example.DesafioPicPay.Model;

public class Usuario {
    private String nome;
    private String email;
    private String senha;
    double saldo;

    public Usuario(){};

    public Usuario(String nome, String email, String senha, double saldo){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.saldo = saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public String getEmail() {
        return email;
    }

    public String getNome() {
        return nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
}
