function openURL(url) {
    window.open(url)
}

function switchPage(pageName) {
    top.glob = pageName;
}

if (top.glob == null) {
    top.glob = "home";
}

document.getElementById('frame').src = top.glob + ".html";