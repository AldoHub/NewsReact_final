document.addEventListener("DOMContentLoaded", e => {

    let menu = document.getElementById("menu");
    let links = document.getElementsByClassName("links")[0];
    let bool = false;
   
    menu.addEventListener("click", e => {
        
        if(!bool){
            bool = true;
            links.classList.add("full")
        }else{
            bool = false;
            links.classList.remove("full");
        }
    
    })

})

 





  