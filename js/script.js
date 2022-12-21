//ELEMENTI dal DOM
const pagina = document.getElementById('main-row');

// DATI
const info = {
    name : ['Wayne Barnett', 'Angela Caroll', 'Walter Gordon', 'Angela Lopez', 'Scott Estrada', 'Barbara Ramos'],
    role : ['Founder & CEO', 'Chief Editor', 'Office Manager', 'Social Media Manager', 'Developer', 'Graphic Designer'],
    image : ['wayne-barnett-founder-ceo.jpg','angela-caroll-chief-editor.jpg', 'walter-gordon-office-manager.jpg', 'angela-lopez-social-media-manager.jpg', 'scott-estrada-developer.jpg', 'barbara-ramos-graphic-designer.jpg']
}
//FUNZIONI
function createCard(){
    
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    return card
}
function createName(){
    const name = document.createElement('h3');
    return name;
}
function createRole(){
    const role = document.createElement('p');
    return role;
}
function createImage(){
    const image = document.createElement('img');
    return image;
}

//Stampo in console
for (let key in info){
    console.log(info[key][0],)
    console.log(info[key][1])
    console.log(info[key][2])
    console.log(info[key][3])
    console.log(info[key][4])
    console.log(info[key][5])
}

//Creo elementi
for (i = 0; i < 6; i++){
    const card = createCard(i)
    const title = createName(i)
    const role = createRole(i)
    const image = createImage(i)

    title.innerText=info.name[i]
    role.innerText=info.role[i]
    image.innerText=info.image[i]
    pagina.appendChild(card);
    card.appendChild(title);
    card.appendChild(role);
    card.appendChild(image);
}



//STAMPO IN PAGINA
/*
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto 
*/