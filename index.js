'use strict';

function createApiUrl() {
  const endPoint = 'https://dog.ceo/api/breeds/image/random/';
  let numberOfImagesRequested = $('.js-quantity').val();
  return endPoint + numberOfImagesRequested;
}

function getImages() {
  fetch(createApiUrl())
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log(error));
}

function handleGetDogImagesClicked() {
  $('form').on('click', '.js-submit', function() {
    event.preventDefault();
    getImages();
  });
}

handleGetDogImagesClicked();