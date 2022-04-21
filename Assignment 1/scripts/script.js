let pets = [];

function submitForm(event) {
    event.preventDefault();

    let petName = document.getElementById("txtName").value;
    pets.push(petName);

    displayPetsNames();
    alert ("Pet Registered Succesfully! \nYou have "+pets.length+" registered pets.");

    resetForm();
}

function displayPetsNames(){
    console.log("")
    pets.forEach(pet => {
        console.log(pet);
    });
}

function resetForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtGender").value = "";
    document.getElementById("txtBreed").value = "";
    document.getElementById("txtOwner").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("selService").value = "nails cut";
}



