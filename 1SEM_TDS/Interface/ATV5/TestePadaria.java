package ATV5;

public class TestePadaria {
    public static void main(String[] args) {
        ProdutoPadaria p1 = new Pao("Pão de leite",10.50,"Foleada",true);

        p1.exibir(p1.getNome(), p1.getPreco());
        p1.setNome("Pão de alho");
        System.out.println(p1.getNome());
    }
}
