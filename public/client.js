

document.addEventListener("click", e =>{
if (e.target.classList.contains("btn-edition")){
//alert ("bouton editer cliqué")
let spanContenu = e.target.parentElement.parentElement.querySelector('.chose-text');
let ancienContenu = spanContenu.innerHTML;
let nouveauContenu = prompt("indiquez le nouveau contenu SVP", ancienContenu);
if (nouveauContenu) {
let idChose = e.target.getAttribute("data-id");
axios.post("/editer", {contenu: nouveauContenu, id: idChose}).then(() => {
    spanContenu.innerHTML = nouveauContenu;
    //e.target.parentElement.parentElement.getElementByClassName('chose-text')[0].innerHTML = nouveauContenu;
    //requête terminée
}).catch(() =>{
    console.log("un problème est survenu durant la MAJ");

})
}
}
});
    if (e.target.classList.contains("btn-supression")){
            let idChose = e.target.getAttribute("data-id");
            axios.post("/suprimer", {id: idChose}).then(() => {
            }).catch(() =>{
                console.log("un problème est survenu durant la MAJ");
            
    
});
    };
