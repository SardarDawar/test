/*
const lightbox = document.createElement('div');
lightbox.id  = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.grid img');
images.forEach(image =>{
  image.addEventListener('click', e =>{
    lightbox.classList.add('active')
    console.log(image);
    const img = document.createElement('img');
    img.src = image.src
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    console.log(lightbox)
  })
})

lightbox.addEventListener('click',e => {
  if(e.target !== e.currrentTarget) return
  lightbox.classList.remove('active')
} )











/*
function photographsFactory(medium){
    const {title, image, likes}  = medium;


     function getUserPhotosDOM(){
         const article = document.createElement('article');
        // const h6B = document.createElement( 'h6' );
         const img = document.createElement('img');
         const mainDiv2  = document.createElement( 'div' );
         const span2  = document.createElement( 'span' );
       //  img.setAttribute('id', `${id}`)
    //  article.innerHTML= `<img src='/assets/images/photographers/${pid}/${image}' id=${pid} class="img">`;
    //  const a = '/assets/images/photographers/${medium.photographerId}/${medium.image}';
      //      if(a === undefined){
         //       a === '';
        //    }
        // article.appendChild(mainDiv);
        const params = (new URL(document.location)).searchParams;
        let pid = parseInt(params.get('id'));
      span2.innerHTML =`${title}       ${likes}`; 
   img.setAttribute("src", `/assets/images/photographers/${pid}/${image}`);
    //  img.className(img);
  //    span2.appenChild(h6B);
      mainDiv2.appendChild(img);
      mainDiv2.appendChild(span2);
     //   const header = document.h6BgetElementsByClassName('photographe-header');
     article.appendChild(mainDiv2);
    
   
     
     /* const info = document.getElementById('info');
     h2.textContent = name;
    info.appendChild(h2);
      header.appendChild(info);
         mainDiv.style.lineHeight = .1;
         mainDiv.style.textAligh ="center";
         div.style.color ="gray";*/ 
         /*
         return(article);
     }
     return {title, image, likes, getUserPhotosDOM }
    }
*/