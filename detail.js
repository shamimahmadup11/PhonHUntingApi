document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const detailImage = document.getElementById('detailImage');
    const detailName = document.getElementById('detailName');
    const detailSlug = document.getElementById('detailSlug');

    // Retrieve data from query parameters
    const imageUrl = urlParams.get('image');
    const phoneName = urlParams.get('name');
    const phoneSlug = urlParams.get('slug');

    // Update the DOM with the retrieved data
    detailImage.src = imageUrl;
    detailName.textContent = phoneName;
    detailSlug.textContent = phoneSlug;
});
