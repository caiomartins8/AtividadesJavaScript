const sorvetePreco = 18 ;
let quantidadeSorvetes = 2 ;
let desconto = 0.50 ;


let valorSemDesconto = sorvetePreco * quantidadeSorvetes ;
console.log("O valor sem desconto é de : R$"+valorSemDesconto)


let valorDesconto = (sorvetePreco*quantidadeSorvetes) * desconto;
console.log("você receberá : R$"+ valorDesconto ,"de desconto");


let valorTotal = (sorvetePreco * desconto ) * quantidadeSorvetes ;
console.log("O total a se pagar é de : R$" + valorTotal);

