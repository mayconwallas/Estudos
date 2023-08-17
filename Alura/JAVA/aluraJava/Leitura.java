import java.util.Scanner;

public class Leitura {
    public static void main(String[] args) {
        Scanner informacao = new Scanner(System.in);
        Scanner informacao2 = new Scanner(System.in);

        System.out.println("Digite seu nome:");
        String nome = informacao.nextLine();
        System.out.println("Olá! " + nome + " qual seu livro favorito? ");
        String livro = informacao.nextLine();
        System.out.println( nome + " que legal que seu livro favorito seja o " + livro + " que ano que ele foi escrito mesmo? ");
        int anoLivro = informacao.nextInt();
        System.out.println("e quem é o autor?");
        String autor = informacao2.nextLine();
        System.out.println( nome + " sabendo que " + livro + " foi ecrito no ano " + anoLivro + "e que o autor é " + autor + " de uma nota para o livro.");
        double notaLivro = informacao2.nextDouble();
        if (notaLivro >= 6 ) {
            System.out.println(notaLivro + " que nota!");   
        } else {
            System.out.println(notaLivro + " nem todo livro é bom.");
        }
    }
}
