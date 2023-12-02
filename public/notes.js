function input(event) {
    event.preventDefault ();
    
    let notes = document.getElementById("notes").value;
    
    let formData={
    notes:notes,
    };
    
    console.log ("FormData" , formData);
};
    
document.addEventListener('DOMContentLoaded',function(){
let inputForm =document.getElementById('notesForm');
inputForm.addEventListener('submit',input)
    
    });