'use strict';

const searchURL = 'https://api.github.com/users/';


function displayResults(responseJson) {
  // if there are previous results or errors, remove them
  console.log(responseJson);
  $('#repo-list').empty();
  $('#js-error-message').empty();
  // iterate through the array
  for (let i = 0; i < responseJson.length; i++){
    $('#repo-list').append(
      `<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};



function getRepos(input) {
  ////// GOOD //////
  const url = searchURL + input + '/repos';
  console.log(url);
    ////// GOOD //////
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: User ${err.message}`);
    });

}

////// GOOD //////
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-github-handle').val();
    getRepos(searchTerm);
  });
}
////// GOOD //////
$(watchForm);