
function changeBoxColors(color) {
  var boxClass = document.getElementsByClassName("box ")

  if (boxClass.length > 1) {
    for (var i=0; i<boxClass.length; i++) {
      boxClass[i].className += color;
    }
  }

  console.log('Selected color: ' + color);
  // TODO: Look at styles.css and choose a class
  // to apply to all of the box elements in order
  // to change their background color
  // possible values of color are: 'red', 'blue', 'yellow'
  // (consider using a switch statement!)
}

function addBox() {
  console.log('Adding a new box');
  // TODO: Add a new div with class="box" to
  // the boxes section of the dom tree

  var newBoxElement = document.createElement('div');
    newBoxElement.setAttribute("class", "box");
    var position = document.getElementById("boxes");
    position.appendChild(newBoxElement);

   // replace with your code
  // This line is needed to make sure that new boxes
  // handle clicks. Make sure thatnewBoxElement refers
  // to the DOM node containing your new Div.
  newBoxElement.addEventListener('click', handleBoxClick);
}

var selectedBoxes = [];
function removeSelectedBoxes() {
  console.log('Removing selected boxes');
  // TODO: look at the selectedBoxes array and remove each of those
  // from their parent in the DOM tree (their parent is the div with id="boxes").
  // Think about what happens to the selectedBoxes array when you're done!
}

/* Event Handlers */
function handleBoxClick(event) {
  var boxElement = event.target;
  console.log('Selecting box: ', boxElement);
  // TODO: add or remove the box from the array of selectedBoxes
  // TODO: looke at styles.css and choose a class (or multiple classes)
  // to apply in order to add a border around selected boxes or
  // remove a border from deselected boxes
}

function handleColorSelect(event) {
  changeBoxColors(event.target.id);
}

function attachListeners() {
  document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('click', handleBoxClick);
  });
  document.querySelectorAll('.color-selector').forEach(function(color){
    color.addEventListener('click', handleColorSelect);
  });
  document.querySelector('#addButton').addEventListener('click', addBox);
  document.querySelector('#removeButton').addEventListener('click', removeSelectedBoxes);
}
document.addEventListener("DOMContentLoaded", attachListeners);
