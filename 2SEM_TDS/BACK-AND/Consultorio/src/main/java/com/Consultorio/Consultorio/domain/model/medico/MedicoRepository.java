package com.Consultorio.Consultorio.domain.model.medico;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicoRepository extends JpaRepository<Medico, Long> {
    // Aqui você pode adicionar métodos personalizados depois
}
