import{a as u,S as d,i as c}from"./assets/vendor-DEZpR2tN.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function f(o){return u.get("https://pixabay.com/api/",{params:{key:"49742644-34971ccc2760c2b4b43c41938",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const n=document.querySelector(".gallery");function m(o){const a=o.map(e=>`<div class="image-container"><li class="gallery-item">
      <a class="gallery-link" href="${e.webformatURL}">
      <img 
      class="gallery-image"
      src="${e.largeImageURL}"
      data-source="${e.webformatURL}"
      alt="${e.tags}"/>
      </a>
  </li>
  <div class="text-container">
      <li class="text-item">
        <h2>Likes</h2>
        <p>${e.likes}</p>
      </li>
       <li class="text-item">
        <h2>Views</h2>
        <p>${e.views}</p>
      </li>
       <li class="text-item">
        <h2>Comments</h2>
        <p>${e.comments}</p>
      </li>
       <li class="text-item">
        <h2>Downloads</h2>
        <p>${e.downloads}</p>
      </li>
    </div></div>
  `).join("");n.insertAdjacentHTML("beforeend",a),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function h(){n.innerHTML=""}function g(){document.querySelector(".loader").classList.add("active")}function p(){document.querySelector(".loader").classList.remove("active")}const l=document.querySelector(".form");l.addEventListener("submit",y);function y(o){if(o.preventDefault(),h(),!l.elements["search-text"].value.trim()){l.reset(),c.error({message:"Please fill in the search field!",position:"topRight",backgroundColor:"#ef4040"});return}const s=o.target.elements["search-text"].value;g(),f(s).then(e=>{e.data.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),p(),m(e.data.hits)}).catch(e=>{console.log(e)})}
//# sourceMappingURL=index.js.map
