package com.example.Mysql.controller;

import com.example.Mysql.entity.Professor;
import com.example.Mysql.repository.ProfessorRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ProfessorController {
    @Autowired
    private ProfessorRepository pfRepository;

    @PostMapping("/professor/add")
    public ResponseEntity<Boolean> adicionarProfessor(@RequestBody Professor p){
       pfRepository.save(p);
       return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @GetMapping("/professor/get")
    public ResponseEntity<List<Professor>> getProfessor(){
        List<Professor> listaPf = pfRepository.findAll();
        return new ResponseEntity<>(listaPf, HttpStatus.OK);
    }

    @PutMapping("professor/update")
    public ResponseEntity<Professor> attProfessor(@RequestBody Professor p){

        Optional<Professor> professorExistente = pfRepository.findById(p.getId());

        if(professorExistente.isPresent()){
            Professor professorAtualiado = pfRepository.save(p);
            return new ResponseEntity<>(professorAtualiado, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("professor/delete")
    public ResponseEntity<Void> deleteProfessor(@RequestParam Integer id){
        if(pfRepository.existsById(id)){
            pfRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("professor/getByNome")
    public ResponseEntity<List<Professor>> getbyNome(@RequestParam String nome){
        List<Professor> getProfessorNome = pfRepository.findByNome(nome);

        if (getProfessorNome.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return new ResponseEntity<>(getProfessorNome, HttpStatus.OK);
    }
}
