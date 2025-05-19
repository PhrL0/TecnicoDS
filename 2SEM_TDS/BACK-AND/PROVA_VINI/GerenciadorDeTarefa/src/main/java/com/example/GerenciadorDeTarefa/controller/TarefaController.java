package com.example.GerenciadorDeTarefa.controller;

import com.example.GerenciadorDeTarefa.database.TarefaBanco;
import com.example.GerenciadorDeTarefa.model.Tarefa;

import java.util.List;

public class TarefaController {
    private TarefaBanco banco = TarefaBanco.getInstance();

    public String insertTarefa(Tarefa tarefa){
        return banco.insertTarefa(tarefa);
    }

    public boolean atualizarStatus(int idTarefa, String novoStatus){
        return banco.updateStatus(idTarefa, novoStatus);
    }

    public List<Tarefa> listarTarefasUsuario(int idUsuario){
        return banco.findByUsuario(idUsuario);
    }
}
