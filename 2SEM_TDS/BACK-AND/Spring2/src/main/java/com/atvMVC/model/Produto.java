package com.atvMVC.model;

public class Produto {
    private int idProduto;
    private String nome;

    private double preco;
    private int quantidade;


    public Produto(){};

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public int getIdProduto() {
        return idProduto;
    }

    public double getPreco() {
        return preco;
    }

    public void setIdProduto(int idProduto) {
        this.idProduto = idProduto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
}
