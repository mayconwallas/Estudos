public class ControleFluxo {
    public static void main(String[] args) {
        int anoDeLancamonto = 2022;
        boolean incluidoNoPlano = false;
        double notaDoFilme = 8.1;
        String tipoPlano = "normal";
        if (anoDeLancamonto >= 2022) {
            System.out.println("Lançamento que os clientes estao curtindo");
        } else {
            System.out.println("Retro sempre em alta");
        }

        if (incluidoNoPlano == true || tipoPlano.equals("plus")) {
            System.out.println("pode assistir de boa que vc paga nois.");
        } else {
            System.out.println("Não paga nois, ai da ruim.");
        }
    }
}
    