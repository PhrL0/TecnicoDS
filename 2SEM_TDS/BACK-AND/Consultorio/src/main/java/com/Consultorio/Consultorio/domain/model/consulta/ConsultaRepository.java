package com.Consultorio.Consultorio.domain.model.consulta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {

    List<Consulta> findByDataHora(LocalDateTime dataHora); // Usado para verificar conflitos de horário

    List<Consulta> findByMedicoId(Long medicoId); // Buscar consultas de um médico
}
