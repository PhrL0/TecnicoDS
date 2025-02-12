package com.example.senai.controller;


import com.example.senai.database.BancoDeProdutos;
import com.example.senai.model.Produto;

import java.util.List;

public class userController {
    BancoDeProdutos bd = new BancoDeProdutos();

    public String Postdados(Produto produto){
        bd.insert(produto);
        return "Item Adicionado com sucesso";
    }
    public List<Produto> Getdados(){
        return bd.findAll();
    }
}
