// Your code goes here
//increase the size of anchor wrapper and its anchors
const navAnchors = document.querySelector('nav');
navAnchors.addEventListener("mouseover", (e) => e.target.style.transform = "scale(2)")
//press any key and the header image while explode!!
const body = document.querySelector('body'); 
const logo = document.querySelector('img');
body.addEventListener("keydown", () => logo.style.transform = "scale(2)");
//returns logo to default when double clicked
body.addEventListener("dblclick", () => logo.style.transform = "scale(1)");
// Asks the user why he's scrolling too fast
body.addEventListener('wheel', function alertMeOnce(){
    prompt("why are you scrolling so fast? dont you like my header?!?!?!?!?!");
    body.removeEventListener('wheel', alertMeOnce);
  });
// drag the destination image to transform it
const destination = document.querySelector(".content-destination img" );
destination.addEventListener('drag', (e) => e.target.style.transform = 'scale(1.5)');
// button background color turns blue when clicked once
const button = document.querySelector(".btn");
button.addEventListener("click", (e) => e.target.style.backgroundColor = "blue");
// asks if youre fun or not when the page loads
window.addEventListener("load", function(e) {
prompt("Welcome, THE FUN BUS IS ONLY FOR FUN PEOPLE IF YOU ARE NOT FUN ANSWER THIS QUESTION. DOES YOUR MOM KNOW YOURE LAME? IF YOURE FUN JUST SAY I AM FUN");
});
 
// propagation for h4
const destinationContent = document.querySelector('.destination-header');
destinationContent.addEventListener('click', (e) => {
destinationContent.style.color = "#177b78"
destinationContent.style.transition = 'color 0.5s';
e.stopPropagation()
})

