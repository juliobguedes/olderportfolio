app.filter("language", function() {
    return function(texto, input, letter) {
        if (letter == "a") { 
            if (input) {
                return "Hey!";
            } else {
                return "Olá!";
            }
        } else if (letter == "b") {
            if (input) {
                return "My name is Júlio Barreto"
            } else {
                return "Meu nome é Júlio Barreto"
            }
        } else if (letter == "c") {
            if (input) {
                return "This is a small introduction to my personal page. First of all, I'd like to thank you for seeing this page and checking out my work."
            } else {
                return "Esta é uma pequena introdução à minha página pessoal. Antes de tudo, gostaria de agradecer por estar nessa página vendo meu trabalho."
            }
        } else if (letter == "d") {
            if (input) {
                return "Well, let me introduce myself. I am a brazilian Computer Science undergraduate student @ Federal University of Campina Grande, and I am 19 years old (born in August 1, 1998)."
            } else {
                return "Bem, deixem que eu me introduza. Eu sou estudante de Ciência da Computação pela Universidade Federal de Campina Grande e tenho 19 anos (nascido em 1° de Agosto de 1998)."
            }

        } else if (letter == "e") {
            if (input) {
                return "I'm actually taking the 4th semester of the course and made some projects so far (you can also check my LinkedIn), but clicking in the button below will take you to a walkthrough made by myself. Hope you all like it."
            } else {
                return "Estou atualmente cursando o 4° semestre do curso e fiz alguns projetos (você também pode checar meu LinkedIn), mas clicar no botão abaixo te levará para uma descrição detalhada feita por mim. Espero que gostem."
            }
        } else if (letter == "f") {
            if (input) {
                return "Detailed version"
            } else {
                return "Versão detalhada"
            }
        } else if (letter == "g") {
            if (input) {
                return "Sections"
            } else {
                return "Seções"
            }
        } else if (letter == "h") {
            if (input) {
                return "About me"
            } else {
                return "Sobre mim"
            }
        } else if (letter == "i") {
            if (input) {
                return "Places"
            } else {
                return "Lugares"
            }
        } else if (letter == "j") {
            if (input) {
                return "Profile"
            } else {
                return "Perfil"
            }
        } else if (letter == "k") {
            if (input) {
                return "University"
            } else {
                return "Universidade"
            }
        } else if (letter == "l") {
            if (input) {
                return "Monitoring"
            } else {
                return "Monitoria"
            }
        } else if (letter == "m") {
            if (input) {
                return "Projects"
            } else {
                return "Projetos"
            }
        } else if (letter == "n") {
            if (input) {
                return "Next Page"
            } else {
                return "Próxima Página"
            }
        } else if (letter == "o") {
            if (input) {
                return "Previous Page"
            } else {
                return "Página Anterior"
            }
        } else if (letter == "p") {
            if (input) {
                return "If you want to see my /about page with details of each project, click on the left button below. If you want an overview of my projects, go with the right one."
            } else {
                return 'Se você quer ver uma página sobre mim e com detalhes de cada projeto, clique no botão à esquerda. Caso queira apenas ver uma visão geral dos meus projetos, clique no botão à direita.'
            }
        } else if (letter == "q") {
            if (input) {
                return "Overview"
            } else {
                return "Visão Geral"
            }
        }
    }
})