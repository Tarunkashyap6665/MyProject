console.log("notes_project");
// funtion for add notes
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = sessionStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    sessionStorage.setItem('notes', JSON.stringify(notesobj));
    addTxt.value = "";
    showNotes();
});

function showNotes() {
    let notes = sessionStorage.getItem('notes');
    let notesElm = document.getElementById('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `<div class="notecard card my-2 mx-3" style="width:18rem;">
        <div class="card-header"> <h4 class="card-title">Note ${index + 1}</h4></div>
      <div class="card-body">
       
        <p class="card-text">${element}</p>
        <button class="btn btn-primary" id=${index} onclick=deleteNote(this.id)>Delete Note</button>
      </div>
    </div>`;
    });
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show`;
    }


}

//delete node

function deleteNote(index)
{
    let notes = sessionStorage.getItem('notes');
    // let notesElm = document.getElementById('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    sessionStorage.setItem('notes',JSON.stringify(notesobj));
    showNotes();
}
let search=document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputVal=search.value.toLowerCase()
    // console.log(inputVal);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
});