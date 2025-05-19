package com.example.GerenciadorDeTarefa.view;

import com.example.GerenciadorDeTarefa.controller.TarefaController;
import com.example.GerenciadorDeTarefa.model.Tarefa;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaView {

    private TarefaController tarefaController = new TarefaController();

    @PostMapping
    public String criarTarefa(@RequestBody Tarefa tarefa) {
        return tarefaController.insertTarefa(tarefa);
    }

    @PutMapping("/{id}/status")
    public boolean atualizarStatus(@PathVariable int id, @RequestBody String novoStatus) {
        return tarefaController.atualizarStatus(id, novoStatus);
    }

    @GetMapping("/usuario/{idUsuario}")
    public List<Tarefa> listarTarefasPorUsuario(@PathVariable int idUsuario) {
        return tarefaController.listarTarefasUsuario(idUsuario);
    }
}
