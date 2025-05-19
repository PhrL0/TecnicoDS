package com.example.GerenciadorDeTarefa.controller;

import com.example.GerenciadorDeTarefa.database.UsuarioBanco;
import com.example.GerenciadorDeTarefa.model.Usuario;

import java.util.List;

public class UsuarioController {
    UsuarioBanco banco = UsuarioBanco.getInstance();

    public List<Usuario> listarUsuarios(){
        return banco.findAllUsuarios();
    }

    public String inserirUsuario(Usuario u ){
        return banco.insertUsuario(u);
    }

    public boolean deletarUsuario(int id){
        return banco.deleteUsuario(id);
    }

    public boolean atualizarUsuario(int id,Usuario u){
        return banco.updateUsuario(id,u);
    }
}
