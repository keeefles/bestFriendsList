let friends = []
function add(){
    let name = document.querySelector('[data-entry]').value
    friends.push(name)

    localStorage.setItem('friendsNames',
    JSON.stringify(friends))
    displayFriends()
}
document.querySelector('[data-submit]').addEventListener('click', add)

function displayFriends(){
    let listWrapper = document.querySelector('[data-friends]');
    let cFriends = JSON.parse(localStorage.getItem('friendNames'));
    listWrapper.innerHTML = ""
    if(cFriends) {
        cFriends.forEach(people => {
            listWrapper.innerHTML +=
            `<li>${people}</li>`
        });
    }
}