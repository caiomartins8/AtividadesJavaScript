const frete = 20 ;
let pedido = 180 ;

if(pedido < 100){

    total = pedido + frete ;

    console.log("Seu frete é de : R$" , frete)
    console.log("Seu produto é : R$" , pedido)
    console.log("O Total é de : R$" , total)
}
else{
        console.log("Parabéns ! Você ganhou frete grátis !")
        console.log("O total será somente o preço do produto : $" , pedido)
}