const arrows = document.querySelectorAll(".arrow");
const movielist=document.querySelectorAll(".movie-list");
arrows.forEach((arrow,i)=>{ let b=0; let k=movielist[i].querySelectorAll(".movie-image").length

    arrow.addEventListener("click",()=>{
      b++;
        if(k-(b+Math.floor(window.innerWidth/195))>=0){
         
        
        movielist[i].style.transform=`translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value-205}px)`;
       }
      
      
      else{
        

        movielist[i].style.transform="translateX(0)";b=0;
      }
      console.log(((window.innerWidth-50)/195)-Math.floor(window.innerWidth/195))
      
    })

    console.log(movielist[i].computedStyleMap().get("transform"));
    
})
const toggleball= document.querySelector("#toggle-box");
const items = document.querySelectorAll(".movie-list-container,.movie-list-title,.navbar-container,.toggle,.sidebar,.side-item,.toggle-box");
toggleball.addEventListener("click",()=>{items.forEach(item=>{
    item.classList.toggle("active");
})
   
})
