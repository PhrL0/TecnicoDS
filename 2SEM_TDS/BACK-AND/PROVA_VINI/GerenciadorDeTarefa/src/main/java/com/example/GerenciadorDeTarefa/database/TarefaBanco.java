package com.example.GerenciadorDeTarefa.database;

import com.example.GerenciadorDeTarefa.model.Tarefa;

import java.util.ArrayList;
import java.util.List;

public class TarefaBanco {
    private static TarefaBanco instance;
    private List<Tarefa> tarefas = new ArrayList<>();

    private TarefaBanco() {}

    public static TarefaBanco getInstance() {
        if (instance == null) {
            instance = new TarefaBanco();
        }
        return instance;
    }

    public String insertTarefa(Tarefa tarefa) {
        for (Tarefa t : tarefas) {
            if (t.getId() == tarefa.getId()) {
                return "ID da tarefa já existe.";
            }
        }
        tarefas.add(tarefa);
        return "Tarefa cadastrada com sucesso.";
    }

    public boolean updateStatus(int idTarefa, String novoStatus) {
        for (Tarefa t : tarefas) {
            if (t.getId() == idTarefa) {
                t.setStatus(novoStatus);
                return true;
            }
        }
        return false;
    }

    public List<Tarefa> findByUsuario(int idUsuario) {
        List<Tarefa> resultado = new ArrayList<>();
        for (Tarefa t : tarefas) {
            // Agora só comparamos o id inteiro direto
            if (t.getUsuario() == idUsuario) {
                resultado.add(t);
            }
        }
        return resultado;
    }
}
