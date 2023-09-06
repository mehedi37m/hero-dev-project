const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'rajshahi';
placesList.appendChild(li);


const sections = document.querySelectorAll('section');
for(const section of sections) {
   
    section.style.border = '2px solid black';
    section.style.backgroundColor = 'yellow';
    section.style.textAlign = 'center';

}

