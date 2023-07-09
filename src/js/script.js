const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
    personagem.addEventListener('click', () => {

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')
        console.log(personagemSelecionado)

        personagem.classList.add('selecionado');


        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/img/${idPersonagem}-png.png`


        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})
