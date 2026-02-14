let e=document.getElementById("gallery"),t=document.getElementById("load-more"),l=document.getElementById("loading"),a=1;async function n(){l.style.display="block",t.style.display="none";try{let l=`https://pixabay.com/api/?key=54640967-f174f6139fb35610610a281ef&editors_choice=true&image_type=photo&page=${a}&per_page=20`,n=await fetch(l),i=await n.json();i.hits.forEach(t=>{let l=document.createElement("li");l.className="gallery-item",l.innerHTML=`
      <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img">
    `,e.appendChild(l)}),i.hits.length<20?t.style.display="none":t.style.display="inline-block"}catch(e){console.error(e)}finally{l.style.display="none"}}t.addEventListener("click",()=>{a++,n()}),n();
//# sourceMappingURL=pagination.d8245678.js.map
