package com.Consultorio.Consultorio.application.service;
import com.Consultorio.Consultorio.domain.model.medico.Medico;
import com.Consultorio.Consultorio.domain.model.medico.MedicoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicoService {

    private final MedicoRepository repository;

    public MedicoService(MedicoRepository repository) {
        this.repository = repository;
    }

    public List<Medico> listarTodos() {
        return repository.findAll();
    }

    public Medico buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Médico não encontrado"));
    }

    public Medico criar(Medico medico) {
        return repository.save(medico);
    }

    public Medico atualizar(Long id, Medico dadosAtualizados) {
        Medico medico = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Médico não encontrado"));

        medico.setNome(dadosAtualizados.getNome());
        medico.setEspecialidade(dadosAtualizados.getEspecialidade());

        return repository.save(medico);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
