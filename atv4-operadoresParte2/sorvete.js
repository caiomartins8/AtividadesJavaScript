function verificar(){




const sorvetePreco = 18 ;
let quantidadeSorvetes = Number(document.getElementById("inputQuantidade").value);
let desconto = Number(document.getElementById("inputDesconto").value);
let resultado = ""
let resultadoDois = ""
let resultadoTres = ""


let valorSemDesconto = sorvetePreco * quantidadeSorvetes ;
resultado = `O valor sem desconto é de : R$ ${valorSemDesconto} <br>`


let valorDesconto = (sorvetePreco * quantidadeSorvetes) * desconto;
resultadoDois = `Você receberá : R$ ${valorDesconto} de desconto <br>`
;


let valorTotal = (sorvetePreco * desconto ) * quantidadeSorvetes ;
resultadoTres = `O total a se pagar é de : R$ ${valorTotal} <br>`
;

document.getElementById("resultado").innerHTML = resultado + resultadoDois + resultadoTres ;


}

