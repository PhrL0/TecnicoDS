package com.atvMVC.view;

import com.atvMVC.controller.vendasController;
import com.atvMVC.model.Vendas;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class vendasView {
    vendasController controller = new vendasController();

    @GetMapping("/get")
    public List<Vendas> getBD(){
        return controller.getDados();
    }

    @PostMapping("/post")
    public String postBD(@RequestBody Vendas v){
        return  controller.postDados(v);
    }

    @DeleteMapping("/delete")
    public String deleteBD(@RequestParam int id){
        return controller.deleteDados(id);
    }

    @PutMapping("/put")
    public String putBD(@RequestBody Vendas v){
        return controller.patchDados(v);
    }
}
