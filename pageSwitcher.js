function changeIFrameSource(newSource) {
    var myIFrame = document.getElementById("myIFrame");
    myIFrame.src = newSource;
}

function openLinkInNewTab(url) {
    var newTab = window.open(url, '_blank');
    newTab.focus();
  }

function scrolltoID(id) {
    const targetItem = document.getElementById(id);
    targetItem.scrollIntoView({ behavior: 'smooth' });
}

function setGlob(str) {
    top.glob = str;
}

function reloadPage() {
    location.reload();
}