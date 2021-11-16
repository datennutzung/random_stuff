const cards = document.querySelectorAll(".card > input");

function toggle_selected() {
    const cards_unchecked = document.querySelectorAll(
        ".card > input:not(checked)"
    );
    for (const card of cards_unchecked) {
        card.parentElement.classList.remove("selected");
    }
    const cards_checked = document.querySelectorAll(".card > input:checked");
    for (const card of cards_checked) {
        card.parentElement.classList.add("selected");
    }
}

function update_total() {
    let total = 0.0;
    const prices = document.querySelectorAll(".selected > .price");
    for (const price of prices) {
        total += parseFloat(price.dataset.price);
    }
    const total_price = document.querySelector("#total-price");
    total_price.innerText = parseInt(total);
    let total_cent = document.createElement("small");
    total_cent.classList.add("cent");
    total_cent.textContent = ((total % 1) * 100).toString().padStart(2, "0");
    total_price.appendChild(total_cent);
}

for (const card of cards) {
    card.addEventListener("change", (ev) => {
        toggle_selected();
        update_total();
    })
}


toggle_selected();
update_total();

