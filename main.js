
var register = document.querySelector(".register");

var citizens_quantity = document.querySelector('.citizens-quantity');
var citizens_archived = document.querySelector('.citizens-archived');
var naturalized_quantity = document.querySelector('.naturalized-quantity');
var naturalized_archived = document.querySelector('.naturalized-archived');
var births_quantity = document.querySelector('.births-quantity');

var births_archived = document.querySelector('.births-archived');
var deaths_quantity = document.querySelector('.deaths-quantity');
var deaths_archived = document.querySelector('.deaths-archived');

total_quantity = document.querySelector('.total-quantity');
total_archived = document.querySelector('.total-archived');


register.addEventListener('click', function() {

    var newCitizens_files = document.querySelector(".newcitizens-files").value;
    var archived_newCitizens_files = document.querySelector(".archived-newcitizens-files").value;
    var newNaturalized_files = document.querySelector(".newnaturalized-files").value;
    var archived_newNaturalized_files = document.querySelector(".archived-newnaturalized-files").value;
    var newBirths_files = document.querySelector(".newbirths-files").value;
    var archived_newBirths_files = document.querySelector(".archived-newbirths-files").value;
    var newDeaths_files = document.querySelector(".newdeaths-files").value;
    var archived_newDeaths_files = document.querySelector(".archived-newdeaths-files").value;
    

    citizens_quantity.innerHTML = newCitizens_files;
    citizens_archived.innerHTML = archived_newCitizens_files;
    naturalized_quantity.innerHTML = newNaturalized_files;
    naturalized_archived.innerHTML = archived_newNaturalized_files;
    births_quantity.innerHTML = newBirths_files;
    births_archived.innerHTML = archived_newBirths_files;
    deaths_quantity.innerHTML = newDeaths_files;
    deaths_archived.innerHTML = archived_newDeaths_files;
    
    
    function total() {
        let allFiles_quantity = parseInt(newCitizens_files)  + parseInt(newNaturalized_files) + parseInt(newBirths_files) + parseInt(newDeaths_files);
        total_quantity.innerHTML = allFiles_quantity;
        let allFiles_archived = parseInt(archived_newCitizens_files) + parseInt(archived_newNaturalized_files) + parseInt(archived_newBirths_files) + parseInt(archived_newDeaths_files);
        total_archived.innerHTML = allFiles_archived;
    }

    total();
    
})