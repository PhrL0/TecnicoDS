package com.example.Mysql.repository;

import com.example.Mysql.entity.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfessorRepository extends JpaRepository<Professor, Integer> {
    List<Professor> findByNome(String nome);
}
