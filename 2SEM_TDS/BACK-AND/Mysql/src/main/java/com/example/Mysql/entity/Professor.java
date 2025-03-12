package com.example.Mysql.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity

public class Professor {
    @Id
    private Integer id;
    private String nome;
    private Integer idade;
    private Double salario;

    public Professor(){}

    public Professor(Integer id,String nome, Integer idade, Double salario){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getId() {
        return id;
    }

    public Integer getIdade() {
        return idade;
    }

    public String getNome() {
        return nome;
    }

    public Double getSalario() {
        return salario;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

}
