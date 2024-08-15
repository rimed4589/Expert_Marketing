let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(500)
  .typeString('Quisquella la Bella')
  .pauseFor(1000)
  .deleteChars(10)
  .start();