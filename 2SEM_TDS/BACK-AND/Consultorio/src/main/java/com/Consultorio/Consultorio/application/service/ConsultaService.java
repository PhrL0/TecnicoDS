package com.Consultorio.Consultorio.application.service;
import com.Consultorio.Consultorio.domain.model.consulta.Consulta;
import com.Consultorio.Consultorio.domain.model.consulta.ConsultaRepository;
import com.Consultorio.Consultorio.domain.model.medico.Medico;
import com.Consultorio.Consultorio.domain.model.medico.MedicoRepository;
import com.Consultorio.Consultorio.domain.model.paciente.Paciente;
import com.Consultorio.Consultorio.domain.model.paciente.PacienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsultaService {

    private final ConsultaRepository consultaRepository;
    private final MedicoRepository medicoRepository;
    private final PacienteRepository pacienteRepository;

    public ConsultaService(
            ConsultaRepository consultaRepository,
            MedicoRepository medicoRepository,
            PacienteRepository pacienteRepository
    ) {
        this.consultaRepository = consultaRepository;
        this.medicoRepository = medicoRepository;
        this.pacienteRepository = pacienteRepository;
    }

    public List<Consulta> listarTodas() {
        return consultaRepository.findAll();
    }

    public Consulta buscarPorId(Long id) {
        return consultaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Consulta não encontrada"));
    }

    public Consulta criar(Consulta consulta) {
        Medico medico = medicoRepository.findById(consulta.getMedico().getId())
                .orElseThrow(() -> new RuntimeException("Médico não encontrado"));
        System.out.println(medico);
        Paciente paciente = pacienteRepository.findById(consulta.getPaciente().getId())
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));
        System.out.println(paciente);
        consulta.setMedico(medico);
        consulta.setPaciente(paciente);

        return consultaRepository.save(consulta);
    }

    public Consulta atualizar(Long id, Consulta atualizada) {
        Consulta consulta = buscarPorId(id);

        consulta.setDataHora(atualizada.getDataHora());
        consulta.setTipo(atualizada.getTipo());

        // Atualizando os relacionamentos, se necessário
        if (atualizada.getMedico() != null) {
            consulta.setMedico(medicoRepository.findById(atualizada.getMedico().getId())
                    .orElseThrow(() -> new RuntimeException("Médico não encontrado")));
        }

        if (atualizada.getPaciente() != null) {
            consulta.setPaciente(pacienteRepository.findById(atualizada.getPaciente().getId())
                    .orElseThrow(() -> new RuntimeException("Paciente não encontrado")));
        }

        return consultaRepository.save(consulta);
    }

    public void deletar(Long id) {
        consultaRepository.deleteById(id);
    }
}
