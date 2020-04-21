
let register = document.querySelector(".register");


register.addEventListener('click', function () {
    let newCitizens_files = document.querySelectorAll(".newcitizens-files").value;
    let archived_newCitizens_files = document.querySelectorAll(".archived-newcitizens-files").value;
    let newnaturalized_files = document.querySelectorAll(".newnaturalized-files").value;
    let archived_newNaturalized_files = document.querySelectorAll(".archived-newnaturalized-files").value;


    let nat_ctz_qua = document.querySelectorAll('.citizens-quantity');
    // let nat_ctz_arch = document.querySelectorAll('.citizens-archived');
    // let non_ctz_qua = document.querySelectorAll('.non-native-ctz-quantity');
    // let nat_ctz_arch = document.querySelectorAll('.non-native-ctz-archived');
    // let births_qua = document.querySelectorAll('.births-quantity');
    // let births_arch = document.querySelectorAll('.births-archived');
    // let deaths_qua = document.querySelectorAll('.deaths-quantity');
    // let deaths_qua = document.querySelectorAll('.deaths-archived');
    // let total_qua = document.querySelectorAll('.total-quantity');
    // let total_arch = document.querySelectorAll('.total-archived');

    nat_ctz_qua.innerHTML = `${newCitizens_files}`;


    
}) 









