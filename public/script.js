const result = document.getElementById('result');

// Button declarations

// Artists
const getAllArtists = document.getElementById('getAllArtistsButton');

const createArtist = document.getElementById('createArtistButton');

const editArtist = document.getElementById('editArtistButton');

const deleteArtist = document.getElementById('deleteArtistButton');

// Songs
const getAllSongs = document.getElementById('getAllSongsButton');

const createSong = document.getElementById('createSongButton');

const editSong = document.getElementById('editSongButton');

const deleteSong = document.getElementById('deleteSongButton');

// Input declarations

// Artists
const createArtistInput = document.getElementById('createArtistInput');

const editArtistInputId = document.getElementById('editArtistInputId');
const editArtistInputName = document.getElementById('editArtistInputName');

const deleteArtistInputId = document.getElementById('deleteArtistInputId');

// Songs
const createSongInputArtist = document.getElementById('createSongInputArtist');
const createSongInputSong = document.getElementById('createSongInputSong');

const editSongInputId = document.getElementById('editSongInputId');
const editSongInputName = document.getElementById('editSongInputName');

const deleteSongInputId = document.getElementById('deleteSongInputId');

// ARTISTS SECTION

// Get All Artists
getAllArtists.addEventListener('click', async () => {
  result.innerHTML = '';
  const response = await newFetch(`routes/artists`, 'GET');
  result.innerHTML = JSON.stringify(response);
});

// Create Artist
createArtist.addEventListener('click', async () => {
  const json = await newFetch(`routes/artists/add-artist`, 'POST', {
    artistName: createArtistInput.value,
  });
  result.innerHTML = JSON.stringify(json);
});

// Edit Artist
editArtist.addEventListener('click', async () => {
  const id = editArtistInputId.value;
  const json = await newFetch(`routes/artists/${id}`, 'PUT', {
    artistName: editArtistInputName.value,
  });
  result.innerHTML = JSON.stringify(json);
});

// Delete Artist
deleteArtist.addEventListener('click', async () => {
  const id = deleteArtistInputId.value;
  const json = await newFetch(`routes/artists/${id}`, 'DELETE');
  result.innerHTML = JSON.stringify(json);
});

// SONGS SECTION

// Get All Songs
getAllSongs.addEventListener('click', async () => {
  result.innerHTML = '';
  const response = await newFetch(`routes/songs`, 'GET');
  result.innerHTML = JSON.stringify(response);
});

// Create Song
createSong.addEventListener('click', async () => {
  const json = await newFetch(`routes/songs/add-song`, 'POST', {
    artistName: createSongInputArtist.value,
    songName: createSongInputSong.value,
  });
  result.innerHTML = JSON.stringify(json);
});

// Edit Song
editSong.addEventListener('click', async () => {
  const id = editSongInputId.value;
  const json = await newFetch(`routes/songs/${id}`, 'PUT', {
    songName: editSongInputName.value,
  });
  result.innerHTML = JSON.stringify(json);
});

// Delete Song
deleteSong.addEventListener('click', async () => {
  const id = deleteSongInputId.value;
  const json = await newFetch(`routes/songs/${id}`, 'DELETE');
  result.innerHTML = JSON.stringify(json);
});

const newFetch = async (url, method, body) => {
  result.innerHTML = '';
  let response = await fetch(`http://localhost:3000/${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};
