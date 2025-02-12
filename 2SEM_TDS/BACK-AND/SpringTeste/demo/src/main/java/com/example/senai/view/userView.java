package com.example.senai.view;
import com.example.senai.controller.userController;
import com.example.senai.model.Produto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class userView {
    userController controller = new userController();

    @PostMapping("/post")
    public String postBD(@RequestBody Produto p){
         return controller.Postdados(p);

    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/get")
    public List<Produto> getBD(){
        return controller.Getdados();
    }
}
