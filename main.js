
let register = document.querySelector(".register");

let citizens_quantity = document.querySelector('.citizens-quantity');
let citizens_archived = document.querySelector('.citizens-archived');
let naturalized_quantity = document.querySelector('.naturalized-quantity');
let naturalized_archived = document.querySelector('.naturalized-archived');
let births_quantity = document.querySelector('.births-quantity');
let births_archived = document.querySelector('.births-archived');
let deaths_quantity = document.querySelector('.deaths-quantity');
let deaths_archived = document.querySelector('.deaths-archived');

total_quantity = document.querySelector('.total-quantity');
total_archived = document.querySelector('.total-archived');


register.addEventListener('click', function() {

    let newCitizens_files = document.querySelector(".newcitizens-files").value;
    let archived_newCitizens_files = document.querySelector(".archived-newcitizens-files").value;
    let newNaturalized_files = document.querySelector(".newnaturalized-files").value;
    let archived_newNaturalized_files = document.querySelector(".archived-newnaturalized-files").value;
    let newBirths_files = document.querySelector(".newbirths-files").value;
    let archived_newBirths_files = document.querySelector(".archived-newbirths-files").value;
    let newDeaths_files = document.querySelector(".newdeaths-files").value;
    let archived_newDeaths_files = document.querySelector(".archived-newdeaths-files").value;


    

    citizens_quantity.innerHTML = `${newCitizens_files}`;
    citizens_archived.innerHTML = `${archived_newCitizens_files}`;
    naturalized_quantity.innerHTML = `${newNaturalized_files}`;
    naturalized_archived.innerHTML = `${archived_newNaturalized_files}`;
    births_quantity.innerHTML = `${newBirths_files}`;
    births_archived.innerHTML = `${archived_newBirths_files}`;
    deaths_quantity.innerHTML = `${newDeaths_files}`;
    deaths_archived.innerHTML = `${archived_newDeaths_files}`;

    var allFiles_quantity = (newCitizens_files+ newNaturalized_files);
    total_quantity.innerHTML = `${allFiles_quantity}` ;
    // let allFiles_archived;

    
}) 








