const cards = document.querySelectorAll(".card > input")

function toggle_selected() {
    const cards_checked = document.querySelectorAll(".card > input:checked")
    for (const card of cards) {
        card.parentElement.classList.remove("selected")
    }
    for (const card of cards_checked) {
        card.parentElement.classList.add("selected")
    }
}

function update_total() {
    let total = 0.0;
    const prices = document.querySelectorAll(".card > input:checked ~ .price")
    for (const price of prices) {
        total += parseInt(price.innerText)+(parseInt(price.children[0].innerText)/100.0);
    }
    const total_price = document.querySelector("#total-price")
    total_price.textContent = parseInt(total);
    let total_cent = document.createElement("small")
    total_cent.classList.add("cent")
    total_cent.textContent = ((total%1)*100).toString().padStart(2, "0")
    total_price.appendChild(total_cent)
}

for (const card of cards) {
    card.addEventListener("change", (ev) => {
        toggle_selected()
        update_total()
    })
}


toggle_selected()
update_total()    

