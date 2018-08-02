const toDoList = document.getElementById('toDoList');
const addButton = document.getElementById('addListItem');
const removeAllItemsButton = document.getElementById('removeAllItems');
const input = document.getElementById('input')

// Remove all list items
removeAllItemsButton.addEventListener('click', () => {
  // GET REKT
  const children = [];
  Object.keys(toDoList.children).map(key => {
    children[key] = toDoList.children[key]
  });
  children.forEach(element => element.tagName === 'ul'.toUpperCase() ? toDoList.removeChild(element) : null)
});

// Add list item with button
addButton.addEventListener('click', () => {
  addListItem(input.value)
})

// Add list item with Enter
input.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    addListItem(input.value)
  }
})

// Create list item
function addListItem(name) {
  if (!name) {
    return;
  }
  let listItem = document.createElement('ul');
  let doneButton = document.createElement('button');
  let removeButton = document.createElement('button');
  let listItemText = document.createElement('li');

  doneButton.innerHTML = 'Done';
  doneButton.addEventListener('click', () => {
    if (!listItemText.classList.contains('listItemStriked')) {
      listItemText.classList.add('listItemStriked')
      doneButton.innerHTML = 'Undone';
    } else {
      listItemText.classList.remove('listItemStriked')
      doneButton.innerHTML = 'Done';
      
    };
  })
  
  removeButton.innerHTML = 'Remove';
  removeButton.addEventListener('click', () => {
    toDoList.removeChild(listItem)
  })

  // Get value from input
  listItemText.innerHTML = name

  // Create all required elements
  listItem.appendChild(listItemText);
  listItem.appendChild(doneButton);
  listItem.appendChild(removeButton);
  toDoList.appendChild(listItem);
};
