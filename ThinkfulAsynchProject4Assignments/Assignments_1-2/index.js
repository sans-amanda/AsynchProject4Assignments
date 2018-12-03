'use strict';

function getDogImage() {
  let userNumber = document.getElementById("userNumber").value;
  fetch(('https://dog.ceo/api/breeds/image/random') + '/' + userNumber)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  // clear child elements, if any
  $('.dogimages').empty();
  // log responseJSON
  console.log(responseJson);
  //loop through JSON Object
  $.each(responseJson.message, function( i, val ) {
    //add img src to empty div
    $('.dogimages').append(
    "<img src=\"" + val + "\" class =\"results-img\">"
    );
  });
  // remove class, only applicable first time
  $('.results').removeClass('hidden');
};
 

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


