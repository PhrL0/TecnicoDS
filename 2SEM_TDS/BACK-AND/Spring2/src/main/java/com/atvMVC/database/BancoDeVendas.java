package com.atvMVC.database;

import com.atvMVC.model.Cliente;
import com.atvMVC.model.Produto;
import com.atvMVC.model.Vendas;

import java.util.ArrayList;
import java.util.List;



public class BancoDeVendas {
    private List<Vendas> vendas;

    public BancoDeVendas() {
        this.vendas = new ArrayList<>();
    }

    // Insere um novo produto na lista
    public void insert(Vendas v) {
        vendas.add(v);
    }

    // Busca um produto pelo ID
    public Vendas findOne(int id) {
        for (Vendas v : vendas) {
            if (v.getIdVenda() == id) {
                return v;
            }
        }
        return null; // Retorna null se não encontrar
    }

    // Retorna todos os produtos cadastrados
    public List<Vendas> findAll() {
        return new ArrayList<>(vendas);
    }

    // Atualiza um produto existente na lista
    public boolean update(Vendas v) {
        for (int i = 0; i < vendas.size(); i++) {
            if (vendas.get(i).getIdVenda() == v.getIdVenda()) {
                vendas.set(i, v);
                return true; // Retorno indicando que a atualização foi feita
            }
        }
        return false; // Retorna falso se o produto não foi encontrado
    }

    // Remove um produto pelo ID
    public boolean delete(int id) {
        return vendas.removeIf(p -> p.getIdVenda() == id);
    }
}