package com.atvMVC.model;

public class Cliente {
    private int idCliente;
    private String nome;
    private String cpf;

    public Cliente(int idCliente,String nome,String cpf){
        this.idCliente = idCliente;
        this.nome = nome;
        this.cpf = cpf;
    };

    public int getIdCliente() {
        return idCliente;
    }

    public String getCpf() {
        return cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}

