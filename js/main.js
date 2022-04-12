const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*


// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

function stampaSocial(){
    const mainContainer = document.getElementById('container');
    posts.forEach((element)=>{
        const post = document.createElement('div');
        post.setAttribute('class','post');

        const postHeader = document.createElement('div');
        postHeader.setAttribute('class','post__header');
        
        const postMeta = document.createElement('div');
        postMeta.setAttribute('class','post-meta');
        
        const postMetaIcon = document.createElement('div');
        postMetaIcon.setAttribute('class','post-meta__icon');
        
        const postMetaData = document.createElement('div');
        postMetaData.setAttribute('class','post-meta__data');
        
        const postText = document.createElement('div');
        postText.setAttribute('class','post__text');
        
        const postImage = document.createElement('div');
        postImage.setAttribute('class','post__image');
        
        const postFooter = document.createElement('div');
        postFooter.setAttribute('class','post__footer');
        
        const likesContainer = document.createElement('div');
        likesContainer.setAttribute('class','likes js-likes');
        
        const likesCta = document.createElement('div');
        likesCta.setAttribute('class','likes__cta');
        
        const likesCounter = document.createElement('div');
        likesCounter.setAttribute('class','likes__counter');

        
        postMetaIcon.innerHTML =`
        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name[0]}"> 
        `;
        postMetaData.innerHTML =`
            <div class="post-meta__author">${element.author.name}</div>
            <div class="post-meta__time">${element.created}</div>
            `;
        postText.innerHTML =`${element.content}`;
        postImage.innerHTML =`
        <img src="${element.media}" alt="">
        `;
        likesCta.innerHTML = `
            <a class="like-button js-like-button" href="#${element.id}" data-postid="${element.id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        `;
        likesCounter.innerHTML=`
        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone`;

        likesContainer.append(likesCta);
        likesContainer.append(likesCounter);
        postFooter.append(likesContainer);
        postMeta.append(postMetaIcon);
        postMeta.append(postMetaData);
        postHeader.append(postMeta);
        post.append(postHeader)
        post.append(postText)
        post.append(postImage)
        post.append(postFooter)
        mainContainer.append(post)
    });
    const miPiace = document.querySelectorAll('.like-button');
    console.log(miPiace)
    const idArray=[]
    for(let i = 0;i < miPiace.length;i++){
        miPiace[i].addEventListener('click',()=>{

            if (miPiace[i].classList.contains('like-button--liked')){
                miPiace[i].classList.remove('like-button--liked')
                posts[i].likes += -1
                const likesCounter=document.getElementById(`like-counter-${posts[i].id}`)
                likesCounter.innerHTML= `${posts[i].likes}`;
            } else {
                miPiace[i].classList.add('like-button--liked')
                posts[i].likes += +1
                const likesCounter=document.getElementById(`like-counter-${posts[i].id}`)
                console.log(likesCounter)
                likesCounter.innerHTML= `${posts[i].likes}`;
                if(!idArray.includes(posts[i].id)){
                    idArray.push(posts[i].id)
                }
                console.log(idArray);
            }

            
            
            
        })
        
    }
    
  
    
    
   
}
stampaSocial();



// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.



