package com.atvMVC.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Vendas {
    private int idVenda;
    private LocalDate dataVenda;

    private List<Produto> produtos;

    private Cliente cliente;

    public Vendas(int idVenda,Cliente cliente){
        this.produtos = new ArrayList<>();
        this.idVenda = idVenda;
        this.cliente = cliente;
        this.dataVenda = LocalDate.now();
    }

    public int getIdVenda() {
        return idVenda;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public LocalDate getDataVenda() {
        return dataVenda;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void setIdVenda(int idVenda) {
        this.idVenda = idVenda;
    }

    public void setDataVenda(LocalDate dataVenda) {
        this.dataVenda = dataVenda;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}
