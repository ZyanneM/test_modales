var btnVerifier = document.getElementById("btnVerifier");
    usersContainer = document.getElementById("users");
    btnConfirmer = document.getElementById("btnSub3");
    user1 = document.getElementById("user1");
    // h1 = document.getElementById("h1");

btnVerifier.addEventListener("click", function(){

    let xhr = new XMLHttpRequest();
    // X pour XML H pour HTTP et R pour Request Crée un objet avec plein de paramètres dedans cf console log de cette variable
    
    xhr.onreadystatechange = function() {
    
        //console.log(xhr);
        if(xhr.readyState == 4 && xhr.status == 200){
            // console.log(xhr.response);
    
            let usersList = JSON.parse(xhr.response);
            //Nommer cette variable en fonction de l'information récupérée, ici une liste d'utilisateurs

            let user = usersList[0];
            // Stocker dans une variable le premier élément du tableau, généré par Json Parse (passe du Json à un array)
    
            usersContainer.innerHTML += `
                <div class="user1" id="user1">
                    <h2> Votre Nom : <br>${user.name}</h2>
                    <p> Votre mail : <br>${user.email} </p>
                    <p> Votre numéro : <br>${user.phone} </p>
                </div>`;

            // Injecte dans l'HTML les parties de l'objet récupéré en fonction de ce dont on a besoin

        }
    
    }
    

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    
    
    });

    btnConfirmer.addEventListener("click", function(){
        usersContainer.innerHTML = "";
    });

    //Vide le contenu de ma DIV user