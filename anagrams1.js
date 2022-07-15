const button = document.getElementById("findButton");
    button.addEventListener("click", function () {

        let typedText = document.getElementById("input").value;
        showAnagrams(getAnagramsOf(typedText))
        
});

function getAnagramsOf (texto) {

    let wordNew = alphabetize(texto)
    let arrNew = []
    let anagrams = []

    for(let i = 0; i < palavras.length; i++) {

        arrNew.push(alphabetize(palavras[i]))

    }

    for(let i = 0; i < arrNew.length; i++) {

        if(wordNew == arrNew[i]) {
            anagrams.push(palavras[i])

        }

    }
    return anagrams

}

function alphabetize(text) {

    return text.toLowerCase().split("").sort().join("").trim();

}

function showAnagrams (array) {

    let ul = document.querySelector(".listaAnagrams")

    for(let i = 0; i < array.length; i++) {

        let li = document.createElement("li")
        li.classList.add("itemAnagram")
        li.innerText = array[i]
        ul.append(li)
        
    }

}
