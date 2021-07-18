// essa variável criada está apontando para o id "chk" presente no HTML para poder manipulá-lo
const chk = document.getElementById('chk');


// essa é a forma moderna de se escrever uma função JavaScript
// foi criado um novo evento com a variável criada anteriormente
// o "click" substitui o a função "onClick()"
chk.addEventListener("click", () => {
    // ler as notes com as informações sobre ".classList.toggle()"
    // dark é a classe CSS para qual eu quero alternar (body.dark)
	document.body.classList.toggle("dark");
});