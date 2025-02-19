package com.atvMVC.controller;


import com.atvMVC.database.BancoDeVendas;
import com.atvMVC.model.Cliente;
import com.atvMVC.model.Produto;
import com.atvMVC.model.Vendas;

import java.util.List;

public class vendasController {
    BancoDeVendas bd = new BancoDeVendas();

    public String postDados(Vendas v){
        bd.insert(v);
        return "A venda foi cadastrada com sucesso!";
    }

    public List<Vendas> getDados(){
        bd.findAll();
        return  bd.findAll();
    }

    public String deleteDados(int id){
        bd.delete(id);
        return "A venda com o ID: " + id + "foi removido com sucesso!";
    }

    public String patchDados(Vendas vendas){
        if(bd.update(vendas)){
            return "Venda atualizada";
        } else {
            return "Venda não encontrado";
        }


    }
}
