package com.Consultorio.Consultorio.domain.model.consulta;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {

//    List<Consulta> findByDataHora(LocalDateTime dataHora); // Usado para verificar conflitos de horário
//
//    List<Consulta> findByMedicoId(Long medicoId); // Buscar consultas de um médico
}
