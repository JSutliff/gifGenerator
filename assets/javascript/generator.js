//create array of theme strings
var celebArr = ['Gary Busey', 'Jim Carey', 'Bob Ross', 'Jerry Garcia', 'Bob Weir', 'Bruce Lee'];

//for each theme(elem) create a button on the page 
function makeButton(item) {
  var newButton = $('<button>');
  newButton.text(item);
  newButton.attr('data-name', item);
  newButton.attr('class', 'celebButton');
  return newButton;
}

function generateButtons(arr) {
  $('#buttonsGoHere').empty();
  for (var i = 0; i < arr.length; i++) {
    $('#buttonsGoHere').append(makeButton(arr[i]));
  }
}

generateButtons(celebArr);

//intake user input in addUserButton form 

  //create new button with user input that generates giphy button and displays in buttonsGoHere div
  $('#submit').on('click', function() {
    if ($('#inlineFormInput').val().trim()) {
      celebArr.push($('#inlineFormInput').val().trim());
      console.log(celebArr);
      generateButtons(celebArr);
      $('#inlineFormInput').val('');
    }
  });

  $('#buttonsGoHere').on('click', '.celebButton', function() {
    var celebClick = $(this)[0].dataset.name;
    console.log(celebClick);
    callGiphyApi(celebClick);
  }); 

  function callGiphyApi(celeb) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        celeb + "&api_key=Rk3uChgU2CfdM30Xwl6OEtimU574I752&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          var results = response.data;
          console.log(results);
          createGiphs(results);
        });
  }
  
  function createGiphs(arr) {
    for (var i = 0; i < arr.length; i++) {
      var celebImg = $('<img>');
      celebImg.attr({
        'class': 'giph',
        'data-state': 'still',
        'data-still': arr[i].images.fixed_height_still.url,
        'data-animate': arr[i].images.fixed_height.url,
        'src': arr[i].images.fixed_height_still.url
      });
      $('#appendImagesHere').prepend(celebImg);
    }
  }

  $('#appendImagesHere').on('click', '.giph', function() {
    console.log($(this));
    var state = $(this)[0].dataset.state;
    var stillImg = $(this)[0].dataset.still;
    var animateImg = $(this)[0].dataset.animate;
    console.log(state, stillImg, animateImg);

    if (state === 'still') {
      $(this).attr({
        'src': animateImg,
        'data-state': 'animate'
      })
    } else {
      $(this).attr({
        'src': stillImg,
        'data-state': 'still'
      })
    }
  });
