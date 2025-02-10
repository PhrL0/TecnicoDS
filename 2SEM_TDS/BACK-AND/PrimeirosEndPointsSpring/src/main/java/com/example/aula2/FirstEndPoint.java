package main.java.com.example.aula2;

import com.example.aula2.Usuario;
import org.springframework.web.bind.annotation.*;

@RestController
public class FirstEndPoint {

    // Criando um usuário com valores iniciais
    Usuario user = new Usuario("Pedro", 454545455, 20);

    // Método GET que retorna o nome do usuário
    @GetMapping("/hello")
    public String getInformations() {
        return user.getNome();
    }

    // Método PUT que altera a idade do usuário e retorna um sucesso
    @PutMapping("/helloPut")
    public String PutInformations() {
        user.setIdade(21);  // Atualizando a idade do usuário
        return "Idade atualizada para: " + user.getIdade();
    }

    // Método DELETE que "deleta" o usuário (ou apenas limpa a informação neste exemplo)
    @DeleteMapping("/helloDel")
    public String DelInformations() {
        user = null;  // "Deletando" o usuário (ou, em um caso real, removendo do banco)
        return "Usuário deletado!";
    }

    // Método POST que retorna as informações do usuário
    @PostMapping("/helloPost")
    public String PostInformations() {
        return "Nome: " + user.getNome() + "\nIdade: " + user.getIdade();
    }
}
