function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function invisibleText(id) {
    let textId = document.getElementById(id);
    let checkState = window.getComputedStyle(textId, null).display;
    if(window.getComputedStyle(textId, null).display === 'block')
    {
        textId.style.display = "none";
    }
    else if(window.getComputedStyle(textId, null).display === 'none')
    {
        textId.style.display = "block";
    }
}

const languageChange = document.getElementById("language");

languageChange.innerHTML = "<span style='font-weight: bold;' >eng</span>/pl"

