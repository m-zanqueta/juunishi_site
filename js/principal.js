/*Menu Hamburguer*/
function abrir_Menu() 
{
	document.getElementById("aberto").className = document.getElementById("aberto").className.replace("mostrar_hamb","esconder_hamb");
	document.getElementById("fechado").className = document.getElementById("fechado").className.replace("esconder_hamb","mostrar_hamb");
    document.getElementById("menu_lateral").className = document.getElementById("menu_lateral").className.replace("fechar_menu","abrir_menu");
}

function fechar_Menu()
{
	
	document.getElementById("fechado").className = document.getElementById("fechado").className.replace("mostrar_hamb","esconder_hamb");
	document.getElementById("aberto").className = document.getElementById("aberto").className.replace("esconder_hamb","mostrar_hamb");
    document.getElementById("menu_lateral").className = document.getElementById("menu_lateral").className.replace("abrir_menu","fechar_menu");
}


/*Carrossel*/ 
var contador=1;
var img1="img/rodizio.png";
var img2="img/drink.png";
var img3="img/promocao.png";
var tempo=5100;
var exibir=setInterval("Exibindo()", tempo);

function Exibindo()
{    
    if(contador<3)
        contador++;
    else
        contador=1;

    document.images["slide"].src=eval("img"+contador);
}