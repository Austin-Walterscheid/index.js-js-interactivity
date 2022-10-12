document.querySelector(`form`).addEventListener('submit' , addMovie)
const message = document.querySelector('#message')

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}




function addMovie (event) {
    event.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement ('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)

    addEventListener('click', crossOffMovie)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click' ,deleteMovie)
    movie.appendChild(deleteBtn)

    const list = document.querySelector('ul');
    list.appendChild(movie)

    inputField.value = ''
}

function crossOffMovie (event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true){
    message.textContent = 'Movie Watched!'
    }else{
        message.textContent = 'Movie added back!'
    }
}




