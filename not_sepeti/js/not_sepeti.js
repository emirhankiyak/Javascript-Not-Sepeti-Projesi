let noteAddButton = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

let noteCount = 0;
gorevListesi.addEventListener('click', deleteOrMark);
noteAddButton.addEventListener('click',addNote);

function addNote(e){
    let textInput = document.querySelector('.input-gorev').value;
    let gorevListesi = document.querySelector('.gorev-listesi')
    if(!(textInput === "")) {
        let newNoteElement = document.createElement('div');
        newNoteElement.className= 'gorev-item';

        let newLi = document.createElement('li');
        newLi.className='gorev-tanim';

        let newOkButton = document.createElement('button');
        newOkButton.className = 'gorev-btn gorev-btn-tamamlandi';

        let newDeleteButton = document.createElement('button');
        newDeleteButton.className = 'gorev-btn gorev-btn-sil';

        let newOkI = document.createElement('i');
        newOkI.className = 'far fa-check-square';

        let newDeleteI = document.createElement('i');
        newDeleteI.className = 'far fa-trash-alt';

        newNoteElement.appendChild(newLi);
        newNoteElement.appendChild(newOkButton);
        newNoteElement.appendChild(newDeleteButton);
        newOkButton.appendChild(newOkI);
        newDeleteButton.appendChild(newDeleteI);
        newLi.textContent = textInput;
        gorevListesi.appendChild(newNoteElement);
        document.querySelector('.input-gorev').value = "";
        noteCount++;
    }else alert("Not boş olamaz");
}

function deleteOrMark(e){
    const tiklanilanEleman = e.target;
    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')){
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
    }
    if(tiklanilanEleman.classList.contains('gorev-btn-sil')){
        tiklanilanEleman.parentElement.classList.toggle('kaybol');
        tiklanilanEleman.parentElement.addEventListener('transitionend', ()=>{
            tiklanilanEleman.parentElement.remove();
        })
    }
}