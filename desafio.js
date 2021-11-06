let acesa = 'imagens/acesa.jpg';
let quebrada = 'imagens/quebrada.jpg';
let clique = 0;

function clicou(){
    console.log(clique);
    if(clique == 0){
        document.getElementById("img").src = acesa;
        clique++;
    }
    else{
        if(clique == 1){
        document.getElementById("img").src = quebrada;
        clique++;
        }
        else{
            alert("A lampada está quebrada!");
        }
    }
}