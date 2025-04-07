package com.Consultorio.Consultorio.domain.model.paciente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {
    // Ex: Optional<Paciente> findByCpf(String cpf);
}
