function photographerFactory(data) {
    const { name, portrait, city, tagline, country, price, id } = data;
  
    const picture = `assets/photographers/${portrait}`;
    
    
  
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h4 = document.createElement( "h4" );
        const h6 = document.createElement( 'h6' );
        const h6B = document.createElement( 'h6' );
        const span = document.createElement( 'span' );
        const div = document.createElement( 'div' );
        const mainDiv = document.createElement( 'div' );
        const a = document.createElement( 'a' );
       a.href =`photographer.html`;
       /*
      const header = document.getElementsByClassName('photograph-header');
  const h2B = document.createElement( 'h2' );
  const div2 = document.createElement( 'div' );
   document.getElementById('info') = `${city}, ${country}`;
  console.log('info', info)
  //const pic = document.getElementById('pic');
  div2.appendChild(h2B);
  h2B.textContent = name;
  info.appendChild(h2B);
  header.appendChild(info);
    header.innerText = "hello";
    */
        h2.textContent = name;
        h6.innerHTML = `$${price}  /day`;
        h4.innerHTML = `${city}, ${country}`;
        h6B.textContent = tagline;
        img.setAttribute("id", `${id}`);
        //a.setAttribute("href", `photographer.html`);
        
    
        div.appendChild(h2);
        div.appendChild(h4);
        div.appendChild(h6);
        div.appendChild(h6B);
        mainDiv.appendChild(div);
        mainDiv.className = "text";
      
        article.innerHTML = `<a href="photographer.html?id=${id}"><img src=${picture} id=${id}/></a>
        `;
       
       
        img.setAttribute('id', `${id}`)
        console.log('id', `${id}`);
        article.appendChild(mainDiv);
        h2.style.lineHeight = .1;
        h4.style.lineHeight = .1;
        h6.style.lineHeight = .1;
    ;
        mainDiv.style.textAlign = "center";
        h4.style.color = "#D3573C";
        div.style.color = "gray";
        //article.appendChild(img);
  
        
    
       
        return (article);
    }
    return { name, picture, getUserCardDOM, city, tagline, country, price,  id}
  }
  
  