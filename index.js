import{a as l,S as c,i as d}from"./assets/vendor-DEZpR2tN.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function u(t){return l.get("https://pixabay.com/api/",{params:{key:"49742644-34971ccc2760c2b4b43c41938",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const n=document.querySelector(".gallery");function f(t){const a=t.map(r=>`<div class="image-container"><li class="gallery-item">
      <a class="gallery-link" href="${r.webformatURL}">
      <img 
      class="gallery-image"
      src="${r.largeImageURL}"
      data-source="${r.webformatURL}"
      alt="${r.tags}"/>
      </a>
  </li>
  <div class="text-container">
      <li>
        <h2>Likes</h2>
        <p>${r.likes}</p>
      </li>
       <li>
        <h2>Views</h2>
        <p>${r.views}</p>
      </li>
       <li>
        <h2>Comments</h2>
        <p>${r.comments}</p>
      </li>
       <li>
        <h2>Downloads</h2>
        <p>${r.downloads}</p>
      </li>
    </div></div>
  `).join("");n.insertAdjacentHTML("beforeend",a),new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(){n.innerHTML=""}function h(){const t=document.createElement("span");t.classList.add("loader"),n.prepend(t)}function m(){document.querySelector(".loader").remove()}const g=document.querySelector(".form");g.addEventListener("submit",y);function y(t){t.preventDefault(),p();const a=t.target.elements["search-text"].value;console.log(a),h(),u(a).then(s=>{s.data.hits.length===0&&d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(),f(s.data.hits)}).catch(s=>{console.log(s)})}
//# sourceMappingURL=index.js.map
