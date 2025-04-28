function JogoQuiz(){
const perguntar =[
    {
        pergunta:"Pergunta 1:\n (a) Opcao-(a)\n Opcao-(b)\n Opcao-(c)",
        resposta:"a",
    },
    {
        pergunta:"Pergunta 2:\n (a) Opcao-(a)\n Opcao-(b)\n Opcao-(c)",
        resposta:"b"
    }
    ,{
        pergunta:"Pergunta 3:\n (a) Opcao-(a)\n Opcao-(b)\n Opcao-(c)",
        resposta:"c"
    }
]
let acertos = 0;
const totalPeguntas = perguntas.leght;

alert("Seja bem vindo ao Jogo de Perguntas");

for(let i=0; i<totalPerguntas; i++){
    let respostaUsuario;
    let valida =false;

    while(!valida){
        respostaUsuario = prompt(perguntas[i].pergunta).toLowerCase();
        if(respostaUsuario === "a" || respostaUsuario === "b" || respostaUsuario === "c"){
            valida = true;
        }else{
            alert("Digie uma opção valida")
        }
    }
    if(respostaUsuario === pergunta[i].resposta);{
        alert("Você acertou a pergunta!");
        acertos++;
    }else{
        alert(`Voce errou. A resposta correta é: ${perguntas[i].resposta.toUpperCase()}`)
    }
}
document.getElementById("msg").innerHTML =`você acertou ${acertos} de ${totalPeguntaserguntas}`;
}
JogoQuiz();

/*APrendemos
declaração
variaveis
tipos de dados(true, false)
array
objeto
metodos(toLowecase, toUppercase, alert, console, lenght)
propriedades (pergunta, resposta)
condicional(if/else)
repetição com for e while
comparação ===, ||
string literais ``
dom (document object model)
função
*/