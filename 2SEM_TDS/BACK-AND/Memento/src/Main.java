import java.util.Scanner;
import java.util.Stack;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Editor editor = new Editor();
        History history = new History();

        while (true) {
            System.out.println("\nTexto Atual: " + editor.getContent());
            System.out.println("\nMenu:");
            System.out.println("1. Digitar texto");
            System.out.println("2. Salvar estado");
            System.out.println("3. Desfazer");
            System.out.println("4. Exibir texto atual");
            System.out.println("5. Sair");
            System.out.print("Escolha uma opção: ");

            int opcao = scanner.nextInt();
            scanner.nextLine(); // Consumir quebra de linha

            switch (opcao) {
                case 1:
                    System.out.print("Digite o novo texto: ");
                    String novoTexto = scanner.nextLine();
                    editor.setContent(novoTexto);
                    break;
                case 2:
                    history.saveState(editor);
                    break;
                case 3:
                    history.undo(editor);
                    break;
                case 4:
                    System.out.println("Texto Atual: " + editor.getContent());
                    break;
                case 5:
                    System.out.println("Saindo...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida, tente novamente.");
            }
        }
    }
}