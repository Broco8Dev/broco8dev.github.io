function switchPage(pageUrl, clickedImage) {
    // Get all elements with the class "selected-navbar-image"
    var selectedNavbarImages = document.querySelectorAll('.selected-navbar-image');

    // Remove the "selected-navbar" class from all selected images
    selectedNavbarImages.forEach(function (image) {
        image.classList.remove('selected-navbar-image');
        image.classList.add('navbar-image');
    });

    // Add the "selected-navbar" class to the clicked image
    clickedImage.classList.add('selected-navbar-image');
    clickedImage.classList.remove('navbar-image');

    // Apply the fade-in animation class
    setTimeout(function () {
        clickedImage.classList.add('selected-navbar-image');
    }, 10); // Delay added to ensure the class is applied after the removal of other classes

    // Get the iframe element
    var iframe = document.getElementById('myIFrame');

    // Set the source of the iframe to the specified page URL
    iframe.src = pageUrl;
}

function navigateToUrl(url) {
    window.open(url);
}
