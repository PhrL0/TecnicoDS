package com.Consultorio.Consultorio.domain.model.paciente;
<<<<<<< HEAD
=======
import com.Consultorio.Consultorio.domain.model.consulta.Consulta;
import com.fasterxml.jackson.annotation.JsonIgnore;
>>>>>>> af55dfbad16ed2f96411982e6997cb0a238a75bc
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "pacientes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY) // ignora na requisição
    private Long id;

    private String nome;
    private String cpf;
    private LocalDate dataNascimento;

    @OneToMany(mappedBy = "paciente", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Consulta> consultas = new ArrayList<>();

}
