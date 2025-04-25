const btns = document.querySelectorAll("button");
const ac = document.getElementById("Ac")
const all = document.getElementById("all")
const In = document.getElementById("In")

btns.forEach(button => {
    button.addEventListener("click", () => {
        btns.forEach(b => b.style.background = "hsl(226, 11%, 37%)");

        button.style.background = "hsl(3, 71%, 56%)"
    })
})



fetch("data.json")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("box");
        
        data.forEach(ext => {
            const card = document.createElement("div");
            card.className = "cadr";
            
            card.innerHTML = `
        <div class="imgTx">
          <img src="${ext.logo}" alt="${ext.name}">
          <div class="tx">
            <h1>${ext.name}</h1>
            <p>${ext.description}</p>
          </div>
        </div>

        <div class="btx">
          <button class="remove">remove</button>
          <label class="switch">
            <input type="checkbox" ${ext.isActive ? "checked" : ""}>
            <span class="slider"></span>
          </label>
        </div>
      `;

      container.appendChild(card);
        });
    })
    .catch(err => {
        console.error("خطا در دریافت دیتا:", err);
    })

Ac.addEventListener("click", () => {
    const cards = document.querySelectorAll(".cadr");

    cards.forEach(card => {
        const checkbox = card.querySelector("input[type='checkbox']");

        if(checkbox.checked){
            card.style.display = "grid"
        }else{
            card.style.display = "none"
        }
    })
})

In.addEventListener("click", () => {
    const cards = document.querySelectorAll(".cadr");

    cards.forEach(card => {
        const checkbox = card.querySelector("input[type='checkbox']");

        if(checkbox.checked){
            card.style.display = "none"
        }else{
            card.style.display = "grid"
        }
    })
})

all.addEventListener("click", ()=> {
    const cards = document.querySelectorAll(".cadr");

    cards.forEach(card => {
        card.style.display = "grid";
    })
})