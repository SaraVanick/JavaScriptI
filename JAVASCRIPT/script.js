//input
anoNascimento = 2002
nome = "Sara"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade +  " anos"

//output 
alert(mensagem)
