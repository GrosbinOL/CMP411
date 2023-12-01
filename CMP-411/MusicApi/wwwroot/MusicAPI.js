const uri = 'api/MusicItems';
let musicItems = [];


function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => { 
            _displayItems(data);
        })
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
    const addSongTextbox = document.getElementById('addSongName').value;
    const addArtistNameTextbox = document.getElementById('addArtistName').value;
    const addRatingTextbox = document.getElementById('addRating').value;

    const item = {
        songName: addSongTextbox.trim(),
        artistName: addArtistNameTextbox.trim(),
        rating: addRatingTextbox
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
     .then(response => response.json())
     .then(()=> {
           getItems()
           addSongTextbox.value = '';
           addArtistNameTextbox.value = '';
           addRatingTextbox.value = '';
     })
     .catch(error => console.error('Unable to add item.', error));
     
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}







function displayEditForm(id) {
    const item = musicItems.find(item => item.id === id);

    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-artistName').value = item.artistName;
    document.getElementById('edit-songName').value = item.songName;
    document.getElementById('edit-rating').value = item.rating
    document.getElementById('editForm').style.display = 'block';
}





function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const item = {
        id: parseInt(itemId, 10),
        songName: document.getElementById('edit-songName').value.trim(),
        artistname: document.getElementById('edit-artistName').value.trim(),
        rating: document.getElementById('edit-rating').value
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;
}






function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}





function _displayItems(data) {
    const tBody = document.getElementById('musicItems');
    tBody.innerHTML = '';

    data.forEach(item => {
        const tr = tBody.insertRow();

        const td1 = tr.insertCell(0);
        td1.appendChild(document.createTextNode(item.songName));

        const td2 = tr.insertCell(1);
        td2.appendChild(document.createTextNode(item.artistName));

        const td3 = tr.insertCell(2);
        td3.appendChild(document.createTextNode(item.rating));

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        const td4 = tr.insertCell(3);
        td4.appendChild(editButton);

        const td5 = tr.insertCell(4);
        td5.appendChild(deleteButton);
    });
    musicItems = data
}

