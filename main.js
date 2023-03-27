
//get the image element on the screen
const image = document.querySelector('img')

// add event listener to listen to mouse enter events
image.addEventListener('mouseenter',  () => {
 
  console.log("I am clicked, clickced !!")
  image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';

} )

// add event listener to listen to mouse leave events
image.addEventListener('mouseleave',  () => {
 
  console.log("I am clicked, clickced !!")
  image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';

} )
