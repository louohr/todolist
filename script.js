// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    // Create edit button
    var editBtn = document.createElement("BUTTON");
    editBtn.className = "edit";
    editBtn.innerHTML = "Edit";
    li.appendChild(editBtn);
  
    // Create delete button
    var deleteBtn = document.createElement("BUTTON");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "Completed";
    li.appendChild(deleteBtn);
  
    // Assign event listener to edit button
    editBtn.onclick = function() {
      var newText = prompt("Edit task:", t.textContent);
      if (newText !== null && newText.trim() !== "") {
        t.textContent = newText;
      }
    };
  
    // Assign event listener to delete button
    deleteBtn.onclick = function() {
      li.style.display = "none";
    };
  }
  
  
