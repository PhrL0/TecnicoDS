package com.Consultorio.Consultorio.application.service;

import com.Consultorio.Consultorio.domain.model.paciente.Paciente;
import com.Consultorio.Consultorio.domain.model.paciente.PacienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteService {

    private final PacienteRepository repository;

    public PacienteService(PacienteRepository repository) {
        this.repository = repository;
    }

    public List<Paciente> listarTodos() {
        return repository.findAll();
    }

    public Paciente buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));
    }

    public Paciente criar(Paciente paciente) {
        return repository.save(paciente);
    }

    public Paciente atualizar(Long id, Paciente dadosAtualizados) {
        Paciente paciente = buscarPorId(id);

        paciente.setNome(dadosAtualizados.getNome());
        paciente.setCpf(dadosAtualizados.getCpf());
        paciente.setDataNascimento(dadosAtualizados.getDataNascimento());

        return repository.save(paciente);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
