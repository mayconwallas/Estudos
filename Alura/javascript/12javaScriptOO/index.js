class cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valorSaque) {
        if (this._saldo >= valorSaque) {
            this._saldo -= valorSaque;
           return `Saque realizado com sucesso, valor atual da conta R$${this._saldo} e o valor sacado foi R$${valorSaque}.`   
        } else {
           return `Saldo insuficiente, saldo atual R$${this._saldo}.`
        }
    }

    depositar(valorDeposito){
        if (valorDeposito <= 0) 
        {
            return;
        }
        this._saldo += valorDeposito;
        console.log(this._saldo);
    }
}

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
const cliente3 = new cliente();
cliente3.nome = "Alex";
cliente3.cpf = 81233443309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
const contaCorrenteAlex = new ContaCorrente();
contaCorrenteAlex.agencia = 1001;
contaCorrenteRicardo.depositar(300);
contaCorrenteRicardo.depositar(150);
contaCorrenteRicardo.depositar(-150);

console.log(contaCorrenteRicardo.sacar(50));
console.log(contaCorrenteRicardo);


