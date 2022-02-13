//import "/css/photographer.css";

const info = document.getElementById('info');
/*
  const photographers = `[
		{
			"name": "Mimi Keel",
			"id": 243,
			"city": "London",
			"country": "UK",
			"tagline": "See the beauty of daily moments",
			"price": 400,
			"portrait": "MimiKeel.jpg"
		},
		{
			"name": "Ellie-Rose Wilkens",
			"id": 930,
			"city": "Paris",
			"country": "France",
			"tagline": "Capture complexe compositions",
			"price": 250,
			"portrait": "EllieRoseWilkens.jpg"
		},
		{
			"name": "Tracy Galindo",
			"id": 82,
			"city": "Montreal",
			"country": "Canada",
			"tagline": "Freelance photographer",
			"price": 500,
			"portrait": "TracyGalindo.jpg"
		},
		{
			"name": "Nabeel Bradford",
			"id": 527,
			"city": "Mexico City",
			"country": "Mexico",
			"tagline": "Always produce better photography",
			"price": 350,
			"portrait": "NabeelBradford.jpg"
		},
		{
			"name": "Rhode Dubois",
			"id": 925,
			"city": "Barcelona",
			"country": "Spain",
			"tagline": "Memory factory",
			"price": 275,
			"portrait": "RhodeDubois.jpg"
		},
		{
			"name": "Marcel Nikolic",
			"id": 195,
			"city": "Berlin",
			"country": "Germany",
			"tagline": "Eternal pusrsuit of the one great photo",
			"price": 300,
			"portrait": "MarcelNikolic.jpg"
		}
	]`
console.log(JSON.parse(photographers));
const photographer = (JSON.parse(photographers));
console.log(photographer);*/
//for(let i = 0; i <photographers.length; i++){
//const id = photographer[i].id;
//}
//console.log(id);
//if(pid = id){
 //  info.innerHTML = `<div>${photographer[i].name}</div>`;
//}
//console.log(info);
//console.log(`${photographers.name}`)

function fetchData() {
    fetch(`/data/photographers.json`)
    .then(response =>{
        if(!response.ok){
            throw Error('ERROR')
        }
      return response.json();
    })
    .then(data=>{
     console.log(data);
     const photographers = data.photographers;
      photographers.map((photographer) =>{

        const params = (new URL(document.location)).searchParams;
        let pid = parseInt(params.get('id'));

         if(photographer.id === pid){
            document.querySelector('.photograph-header').innerHTML =   `<div class="photograph-header">
            <div id="info">
                  <h2 class="name"><pre>${photographer.name}</pre></h2>
                  <h4 class="place">${photographer.city}, ${photographer.country}</h4>
                  <h4 class="line"><pre>${photographer.tagline}</pre></h4>
                  </div> 
                  <button class="contact_button" onclick="displayModal()">Contact Me</button>
                  <div class="photo_section"><img src="assets/photographers/${photographer.portrait}" class="img"></div>
                </div>`;
         }
     })
     //.join('');
    
    })

    .catch(error =>{
        console.log(error);
    })
  }

 fetchData();
/*
 function fetchPic() {
    fetch(`/data/photographers.json`)
    .then(response =>{
        if(!response.ok){
            throw Error('ERROR')
        }
      return response.json();
    })
    .then(data=>{
     console.log(data);
     const media = data.media;
      media.map((medium) =>{
        
      // if(medium.photographerId === pid || medium.photographerId === !undefined){
         //   for (let i = 0; i < medium.image.length; i++) {
            document.querySelector('.photograph_section').innerHTML =   `
           <img src='/assets/images/photographers/${pid}/${medium.image}'>
            <div>${medium.title}${medium.likes}</div>
            `
          
      //  }
     // }
    })
     //.join('');
    
    })

    .catch(error =>{
        console.log(error);
    })
  }

 fetchPic();








/*
fetch("/data/photographers.json")
.then((response)=>response.json())
.then((data)=>{
    const {photographers, media} = data;
    console.log(photographers)
    const params = new URLSearchParams(document.location.search.substring(1));
     const pid = params.get('id');
     console.log(pid)
     const singlePhotographers = photographers.find((photographer)=>
     photographer.id = pid)
})
console.log(photographers.id)*/
//singlePhotographers();
//console.log(singlePhotographers);



async function getPhotographers() {
    // TODO : Replace with data from the JSON file
   return await(await fetch("/data/photographers.json")).json();
}

       
    async function displayData(photographers) {
        const photographerHeader = document.querySelector(".photograph-header");
       
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userPhotoDOM = photographerModel.getUserPhotoDOM();
            console.log(photographerModel)
            photographerHeader.appendChild(userPhotoDOM);
        });
    };
    
    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
     

 
    init();













/*
async function init(){
    const response = await fetch('/data/photographers.json');
    const data = await  response.json();
    
    const { photographers } = data;
    const { name, portrait, city, tagline, country, price, id } = {photographers};
    console.log(`${name}`);
    console.log(photographers)
    document.querySelector('.photograph-header').innerHTML = `name`
}
init()
function init(id){
fetch('/data/photographers.json')
.then(response =>response.json())
.then(json=>{
    for(let i = 0; i < json.photographers.length; i++){
    console.log(json.photographers[i].name)
    document.querySelector('.photograph-header').innerHTML = `${json.photographers[i].name}`
}})
}
init()
*/