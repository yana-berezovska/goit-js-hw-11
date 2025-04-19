import{a as c,S as n,i as d}from"./assets/vendor-DEZpR2tN.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(o){return c.get("https://pixabay.com/api/",{params:{key:"49742644-34971ccc2760c2b4b43c41938",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const l=document.querySelector(".gallery");function f(o){const a=o.map(t=>`<div class="image-container"><li class="gallery-item">
      <a class="gallery-link" href="${t.webformatURL}">
      <img 
      class="gallery-image"
      src="${t.largeImageURL}"
      data-source="${t.webformatURL}"
      alt="${t.tags}"/>
      </a>
  </li>
  <div class="text-container">
      <li class="text-item">
        <h2>Likes</h2>
        <p>${t.likes}</p>
      </li>
       <li class="text-item">
        <h2>Views</h2>
        <p>${t.views}</p>
      </li>
       <li class="text-item">
        <h2>Comments</h2>
        <p>${t.comments}</p>
      </li>
       <li class="text-item">
        <h2>Downloads</h2>
        <p>${t.downloads}</p>
      </li>
    </div></div>
  `).join("");l.insertAdjacentHTML("beforeend",a),new n(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){l.innerHTML=""}function h(){document.querySelector(".loader").classList.add("active")}function p(){document.querySelector(".loader").classList.remove("active")}const g=document.querySelector(".form");g.addEventListener("submit",y);function y(o){o.preventDefault(),m();const a=o.target.elements["search-text"].value;h(),u(a).then(s=>{s.data.hits.length===0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}),p(),f(s.data.hits)}).catch(s=>{console.log(s)})}
//# sourceMappingURL=index.js.map
