const presentClosedUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
const presentOpenedUrl = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif'

//get the image element on the screen
const image = document.createElement('img');
image.src = presentClosedUrl;

//append this to the dom

//select the title
const title = document.querySelector('h1');

document.body.appendChild(image);

// add event listener to listen to mouse enter events
image.addEventListener('click',  (event) => {
 
  console.log(event);

  console.log("I am clicked, clickced !!")
  image.src = presentOpenedUrl;

  title.classList.add("active")
  title.classList.remove("inactive")

} )

// add event listener to listen to mouse leave events
image.addEventListener('mouseleave',  () => {
 
  console.log("I am clicked, clickced !!")
  image.src = presentClosedUrl
  
  title.classList.remove("active")
  title.classList.add("inactive")
} )


let opened = false;
setInterval(() => {
  if(opened){
    image.src = presentClosedUrl;
  }else{
    image.src = presentOpenedUrl;
  }

  opened = !opened;

  console.log("opening", opened);

}, 5000)