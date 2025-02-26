import java.util.Stack;
public class History {
    private final Stack<Memento> history = new Stack<>();

    public void saveState(Editor editor) {
        history.push(editor.save());
        System.out.println("Estado salvo!");
    }

    public void undo(Editor editor) {
        if (!history.isEmpty()) {
            editor.restore(history.pop());
            System.out.println("Desfeito! Estado anterior restaurado.");
        } else {
            System.out.println("Nada para desfazer!");
        }
    }
}
