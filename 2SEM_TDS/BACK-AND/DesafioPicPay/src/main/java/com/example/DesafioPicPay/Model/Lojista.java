package com.example.DesafioPicPay.Model;

public class Lojista  extends Usuario {
    private String cnpj;

    public Lojista(){};

    public Lojista(String nome,String email,String senha,String cnpj, double saldo){
        super(nome, email, senha, saldo);
        this.cnpj = cnpj;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
}
