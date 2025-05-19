package com.example.GerenciadorDeTarefa.database;

import com.example.GerenciadorDeTarefa.model.Usuario;

import java.util.ArrayList;
import java.util.List;

public class UsuarioBanco {
    private static UsuarioBanco instance;
    private List<Usuario> usuarios = new ArrayList<>();

    private UsuarioBanco() {}

    public static UsuarioBanco getInstance() {
        if (instance == null) {
            instance = new UsuarioBanco();
        }
        return instance;
    }

    public String insertUsuario(Usuario u) {
        for (Usuario existente : usuarios) {
            if (existente.getId() == u.getId()) {
                return "ID já existente.";
            }
            if (existente.getEmail().equalsIgnoreCase(u.getEmail())) {
                return "Email já cadastrado.";
            }
        }
        usuarios.add(u);
        return "Cadastrado com sucesso";
    }

    public Usuario findOneUsuario(int id) {
        for (Usuario u : usuarios) {
            if (u.getId() == id) {
                return u;
            }
        }
        return null;
    }

    public List<Usuario> findAllUsuarios() {
        return new ArrayList<>(usuarios);
    }

    public boolean updateUsuario(int id, Usuario novoUsuario) {
        for (int i = 0; i < usuarios.size(); i++) {
            if (usuarios.get(i).getId() == id) {
                novoUsuario.setId(id);
                usuarios.set(i, novoUsuario);
                return true;
            }
        }
        return false;
    }

    public boolean deleteUsuario(int id) {
        return usuarios.removeIf(u -> u.getId() == id);
    }
}
