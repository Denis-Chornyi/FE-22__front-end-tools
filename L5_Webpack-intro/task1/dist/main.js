(()=>{"use strict";(async function(o){console.log("implementation for fetchUser");try{const o=await fetch("https://api.github.com/users/github");return await o.json()}catch(o){throw new Error("Failed to get user data")}})().then((o=>(o=>{console.log("implementation for printProfile");const{name:t,company:n}=o;console.log(`${t} from ${n}`)})({name:o.name,company:o.location})))})();