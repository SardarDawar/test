

  function getImageContent(mediaData){
    return `<div class="img-set column"><img src='/assets/images/photographers/${ID}/${mediaData.image}' onclick="openModal();currentSlide(${mediaData.id});clicked()" class="hover-shadow cursor image3" id="myImg"></img>
    <div class="title-set"><span class="title2">${mediaData.title}</span>        <button class="likes" id = ${mediaData.id} onclick= increaseLike(${mediaData.id}) >${mediaData.likes}<i class="fa-solid fa-heart"></i></button></div>  
    </div>
    `    
  }

  function getVideoContent(mediaData){
  return  `<div class="video-set"><video src='/assets/images/photographers/${ID}/${mediaData.video}'></video>
  <div class="title-set"><span class="likes">${mediaData.likes}<i class="fa-solid fa-heart"></i></span></div>  
  </div>
  
  <div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">
  
   
  
    
    
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  
  
  
    <div class="caption-container">
      <p id="caption"></p>
    </div>
  
    <div class="column">
    <video src='/assets/images/photographers/${ID}/${mediaData.video}' class="image3" />
    </div>
   </div>
   </div>
  `    
  }

  class mediaCardPartsFactory{
    constructor(type, mediaData){
      if(type === "image"){
   
        this.content = getImageContent(mediaData)
      }
      if(type === "video"){
        
        this.content = getVideoContent(mediaData)
      }
    }
  }

const params = new URL(document.location).searchParams;
let ID = parseInt(params.get("id"));

function getPhotographerMediaList(ID) {
  fetch(`/data/photographers.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const media = data.media;

      let newmediaList = [];

      for (var i = 0; i < media.length; i++) {
        if (media[i].photographerId == ID) {
          newmediaList.push(media[i]);
       
        }
      }
   
      return newmediaList;
    })
    .then((media) => {
       let media_values = '';
      const media_content = [];
      let media_detail ="";
      const media_detail_list = []
      for (let i = 0; i < media.length; i++) {
        //  console.log(media[i]);
         // const img = `<div class="img-set column"><a href='/assets/images/photographers/${ID}/${media[i].image}'><img src='/assets/images/photographers/${ID}/${media[i].image}' onclick="openModal();" class="hover-shadow cursor image3" id="myImg"></img></a>
         if(media[i].image){
          factoryInstance = new mediaCardPartsFactory("image", media[i])
          media_values = factoryInstance.content
          x = Math.floor((Math.random() * 8) + 1)
          media_detail = `<div id="unique-${media[i].id}"  class="myslides column">
          <img src='/assets/images/photographers/${ID}/${media[i].image}' class="image3" />
          </div>
          <a class="prev" onclick="plusSlides(-1,${ID},${media[i].id})">&#10094;</a>
          <a class="next" onclick="showSlides(${media[x].id})">&#10095;</a>`
         }
        if(media[i].video){
          factoryInstance = new mediaCardPartsFactory("video", media[i])
          media_values = factoryInstance.content
         }
          
         media_content.push(media_values)
         media_detail_list.push(media_detail)

      }
      document.querySelector(".grid").innerHTML = media_content.join('\n');
      document.querySelector(".modal-content").innerHTML = media_detail_list.join('\n');
    
  
    });
}
getPhotographerMediaList(ID);




function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.querySelector(".title-set").style.display = "none";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.querySelector(".title-set").style.display = "block";
}


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
/*
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
*/


function plusSlides(n,ID, photoID) {
  console.log(n,ID,photoID);

  fetch(`/data/photographers.json`)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      const media = data.media;
      let newmediaList = [];
      
      for (var i = 0; i < media.length; i++) {
        if (media[i].photographerId == ID) {
          newmediaList.push(media[i]);
        }
      }
    
      return newmediaList;
    })
    .then((media) => {
      for (let i = 0; i < media.length; i++) {
          
          if (photoID == media[i].id){
         
            
            console.log(media[i].id)
            // console.log(media.length)
            // if((i+1) >= media.length){
            //   console.log(media[0].id)
            // }
            // else{
            //   console.log("babeu",i+1)
            //   console.log(media[i+n].id)
            //   showSlides(media[i+n].id)

            // }
     
            break;
          }
          
}       
    }
    )
  //  showSlides(slideIndex += n);
  }

function currentSlide(n) {
 
  showSlides(slideIndex = n);

}
function clicked() {
  console.log('clicked');
}


function showSlides(n) {

  var i;
  var individual_id;
  var slides = document.getElementsByClassName("myslides");

 // var captionText = document.getElementById("caption");
  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
console.log(n)
  var unique_id = "unique-"+n
  var individual_id = document.getElementById(unique_id);
  individual_id.style.display = "block";

 // slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
 // captionText.innerHTML = dots[slideIndex-1].alt;
}

// const lightbox = document.createElement('div');
// lightbox.id  = 'lightbox';
// const grid = document.querySelector('.grid')
// //grid.appendChild(lightbox);
// //grid.appendChild(images2);
// document.body.appendChild(lightbox);

// const images2 = document.querySelectorAll('.grid img');
// images2.forEach(image =>{
//   image.addEventListener('click', e =>{
//     console.log('clicked');
//     lightbox.classList.add('active')
//     console.log(image);
//     const img = document.createElement('img');
//     img.src = image.src
//     while(lightbox.firstChild){
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//     console.log(lightbox)
//   })
// })

// lightbox.addEventListener('click',e => {
//   if(e.target !== e.currrentTarget) return
//   lightbox.classList.remove('active')
// } )

function increaseLike(id){
  button = document.getElementById(id)
  button.innerText = parseInt(button.innerText)+1 
  button.innerHTML = button.innerHTML+ `<i class="fa-solid fa-heart"></i>`
}








