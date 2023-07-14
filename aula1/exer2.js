let prompt = require('prompt-sync')();



let salario = parseInt (prompt(" Digite o salario: "))


if (salario <= 500){ 
    let acre = (salario * 0.3 + salario )
    
    console.log("R$ "+ acre)
}else if(salario >500){
    console.log("Funcionario nao tem direito ao aumento")
}