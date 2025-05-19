package com.example.GerenciadorDeTarefa.model;

public class Usuario {
    private int id;
    private String nome;
    private String email;

    public Usuario(int id,String nome,String email){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    public  Usuario(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
