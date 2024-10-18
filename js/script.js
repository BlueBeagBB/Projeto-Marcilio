document.addEventListener("DOMContentLoaded", function () {
    const addElementButton = document.getElementById("addElementButton");
    const removeElementButton = document.getElementById("remove");
    const flashcardsContainer = document.getElementById("flashcardsContainer");

    addElementButton.addEventListener("click", function () {
        // Cria o container do flashcard
        const newContainer = document.createElement("div");
        newContainer.classList.add("container");

        // Botão de fechar o flashcard
        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", function () {
            newContainer.remove();
        });
        newContainer.appendChild(closeButton);

        // Elemento interno para o conteúdo do flashcard
        const innerElement = document.createElement("div");
        innerElement.classList.add("inner-element");

        // Input para o nome do flashcard/postagem
        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("placeholder", "Título da Postagem");
        nameInput.classList.add("container-name");
        innerElement.appendChild(nameInput);

        // Textarea para o conteúdo do post
        const contentInput = document.createElement("textarea");
        contentInput.setAttribute("placeholder", "Escreva seu texto aqui...");
        contentInput.classList.add("content-input");
        innerElement.appendChild(contentInput);

        // Input para upload de imagem
        const imageInput = document.createElement("input");
        imageInput.setAttribute("type", "file");
        imageInput.setAttribute("accept", "image/*");
        imageInput.classList.add("image-input");
        innerElement.appendChild(imageInput);

        // Botão para criar o flashcard/postagem
        const createButton = document.createElement("button");
        createButton.textContent = "Publicar Postagem";
        createButton.addEventListener("click", function () {
            const containerName = nameInput.value;
            const content = contentInput.value;
            const imageFile = imageInput.files[0];

            if (containerName && content) {
                newContainer.remove();

                const customContainer = document.createElement("div");
                customContainer.classList.add("new-container");

                const title = document.createElement("h4");
                title.textContent = containerName;
                customContainer.appendChild(title);

                const postContent = document.createElement("p");
                postContent.textContent = content;
                customContainer.appendChild(postContent);

                // Se uma imagem foi carregada, exibe-a
                if (imageFile) {
                    const imgElement = document.createElement("img");
                    imgElement.src = URL.createObjectURL(imageFile);
                    imgElement.classList.add("post-image");
                    customContainer.appendChild(imgElement);
                }

                flashcardsContainer.appendChild(customContainer);
            }
        });
        innerElement.appendChild(createButton);

        newContainer.appendChild(innerElement);
        flashcardsContainer.appendChild(newContainer);
    });

    removeElementButton.addEventListener("click", function () {
        const containers = document.querySelectorAll(".new-container");
        if (containers.length > 0) {
            containers[containers.length - 1].remove();
        }
    });
});