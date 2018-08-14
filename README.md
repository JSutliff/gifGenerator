<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Gif generator

<!-- Put a description of what the project is -->
Combining HTML, jQuery and Bootstrap/CSS to build a gif image generator. Upon 
page load there are a list of celebrity buttons. When clicked each button generates 
related gif images. The user is also able to create buttons of their own that also
generate gif images to the page.  

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->
[gif Image Generator](https://jsutliff.github.io/gifGenerator/)

# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
[screen shot of completed assignment](assets/images/screenShot.png)


<img src="assets/images/gifGenScreenShot.jpeg">
# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->
- HTML5
- jQuery
  -AJAX API Calls
- CSS3


<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->


# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```javascript
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
```
# Explanation of code
This snipet highlets the use of an ajax call to the hiphy servers that returns 
the gif images. It also shows the functionality of the submit button creating the
user generated buttons as well as the click listener for the buttons that makes 
api call.

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
This assignment was a lot of fun. It was challenging yet rewarding and really highlights
some of the posibilites for programming with an API. Making the ajax call and working 
with someone elses data is a lot of fun and a new experience for me. I look forward
to learning more and implementing future use cases. 

# Author 
<!-- make a link to the deployed site and have your name as the link -->
[Jason P. Sutliff](https://jsutliff.github.io/Basic-Portfolio/)