//Seleção de elementos
const multplicationForm = document.querySelector("#multplication-form");
const numberInput = document.querySelector("#number");
const multplicationInput = document.querySelector("#multplicator");
const multplicationTable = document.querySelector("#multplication-operations");
const multplicationTitle = document.querySelector("#multplication-title span");

//Funções
const createTable = (number, multplicatorNumber) => {
    multplicationTable.innerHTML = "";

    for (let i = 1; i <= multplicatorNumber; i++) {
        const result = number * i;
        
        const templat = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result} </div>
        </div>`;
        
        const parser = new DOMParser();
        const htmlTemplat = parser.parseFromString(templat, "text/html"); 
        const row = htmlTemplat.querySelector(".row");

        multplicationTable.appendChild(row);
        multplicationTitle.innerHTML = number;
    }
}

// Eventos
multplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multplicationNumber = +numberInput.value;
    const multplicatorNumber = +multplicationInput.value;

    if (!multplicationNumber || !multplicatorNumber) return;
    
    createTable(multplicationNumber, multplicatorNumber);
});