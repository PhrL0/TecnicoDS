package com.example.DesafioPicPay.Database;

import com.example.DesafioPicPay.Model.Comum;
import com.example.DesafioPicPay.Model.Lojista;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class BancoDeCadastros {
    private List<Comum> UserComum;
    private List<Lojista> UserLojista;

    public BancoDeCadastros() {
        this.UserComum = new ArrayList<>();
        this.UserLojista = new ArrayList<>();
    }

    // Insere um novo produto na lista e verifica se existe um cpf já existente
    public String insertComum(Comum comum) {
        for (Comum c : UserComum) {
            if (!Objects.equals(c.getCpf(), comum.getCpf()) && !Objects.equals(c.getEmail(),comum.getEmail())){
                UserComum.add(c);
            }
        } return "CPF já existente!";

    }

    public String insertLojista(Lojista lojista) {
        for (Lojista l : UserLojista) {
            if (!Objects.equals(l.getCnpj(), lojista.getCnpj()) && !Objects.equals(l.getEmail(), lojista.getEmail())) {
                UserLojista.add(l);
            }
        }
        return "CNPJ já existente!"; // Retorna null se não encontrar

    }

    // Busca um usuario pelo cpf/cnpj
    public Comum findOneComum(String cpf) {
        for (Comum c : UserComum) {
            if (Objects.equals(c.getCpf(), cpf)) {
                return c;
            }
        }
        return null; // Retorna null se não encontrar
    }

    public Lojista findOneLojista(String cnpj) {
        for (Lojista l : UserLojista) {
            if (Objects.equals(l.getCnpj(), cnpj)) {
                return l;
            }
        }
        return null; // Retorna null se não encontrar
    }
}
