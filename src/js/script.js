const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
    personagem.addEventListener('click', () => {
        personagem.classList.add('selecionado');
    })
})