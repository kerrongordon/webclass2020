const submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener('click', saveItem);

function saveItem(event) {
    event.preventDefault();

    console.log(event);
}

