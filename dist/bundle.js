(()=>{"use strict";const t=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},e=t=>JSON.parse(localStorage.getItem(t)),n=document.querySelector(".list"),s=(t,e)=>t.done-e.done!=0?t.done-e.done:t.done?new Date(e.finishDate)-new Date(t.finishDate):new Date(e.createDate)-new Date(t.createDate),a=({text:t,done:e,id:n})=>{const s=document.createElement("li");s.classList.add("list-item","list__item");const a=(({done:t,id:e})=>{const n=document.createElement("input");return n.setAttribute("type","checkbox"),n.setAttribute("data-id",e),n.checked=t,n.classList.add("list-item__checkbox"),n})({done:e,id:n});e&&s.classList.add("list-item_done"),s.dataset.id=Math.random();const i=document.createElement("span");i.classList.add("list-item__text"),i.textContent=t;const o=document.createElement("button");return o.classList.add("list-item__delete-btn"),s.append(a,i,o),s},i=()=>{const t=e("tasksList")||[];console.log(t),n.innerHTML="";const i=t.sort(s).map(a);n.append(...i)},o="https://6613d8a753b0d5d80f6885e7.mockapi.io/api/v7/todo",c=()=>fetch(o).then((t=>t.json())).then((t=>(t=>t.map((({_id:t,...e})=>({...e,id:t}))))(t))),d=()=>{const e=document.querySelector(".task-input"),n=e.value;if(!n)return;e.value="";var s;(s={text:n,done:!1,createDate:(new Date).toISOString()},fetch(o,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(s)})).then((()=>c())).then((e=>{t("tasksList",e),i()}))},r=e=>{const n=e.target.closest(".list__item").dataset.id;console.log(n),(t=>fetch(`${o}/${t}`,{method:"DELETE"}))(n).then((()=>c())).then((e=>t("tasksList",e))),i()},l=n=>{if(!n.target.classList.contains("list-item__checkbox"))return;const s=n.target.dataset.id;console.log(s);const a=e("tasksList"),{text:d,createDate:r}=a.find((t=>t.id===s)),l=n.target.checked,h={text:d,createDate:r,done:l,finishDate:l?(new Date).toISOString():null};((t,e)=>fetch(`${o}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}))(s,h).then((()=>c())).then((e=>{t("tasksList",e),i()}))};document.addEventListener("DOMContentLoaded",(()=>{c().then((e=>{t("tasksList",e),i()})),(()=>{document.querySelector(".create-task-btn").addEventListener("click",d);const t=document.querySelector(".list");t.addEventListener("click",l),t.addEventListener("click",r)})()})),window.addEventListener("storage",(t=>{"tasksList"===t.key&&i()}))})();