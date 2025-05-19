package com.example.GerenciadorDeTarefa.view;

import com.example.GerenciadorDeTarefa.controller.UsuarioController;
import com.example.GerenciadorDeTarefa.model.Usuario;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")

public class UsuarioView {

    UsuarioController uc = new UsuarioController();

    @GetMapping
    public List<Usuario> getUsuarios(){
        return uc.listarUsuarios();
    }

    @PostMapping
    public String postUsuario(@RequestBody Usuario u){
        return uc.inserirUsuario(u);
    }

    @PutMapping("/put/{id}")
    public boolean putUsuario(@PathVariable int id, @RequestBody Usuario u){
        return uc.atualizarUsuario(id,u);
    }

    @DeleteMapping("/{id}")
    public boolean deleteUsuario(@PathVariable int id){
        return uc.deletarUsuario(id);
    }
}
