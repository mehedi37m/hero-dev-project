function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => displayUser(json))

}

function displayUser(json){
    const ul = document.getElementById('users-list');
    for(const user of json){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}