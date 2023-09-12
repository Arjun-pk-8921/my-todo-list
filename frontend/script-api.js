// Function to fetch tasks from the backend API
async function fetchTasks() {
    try {
      const response = await fetch('/api/tasks'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Process the data and display tasks
      displayTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }



     
  }
  
  // Function to display tasks on the page
  function displayTasks(tasks) {
    const taskList = document.querySelector('.inner-container');
  
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('todo-form-2', 'col-xs-12', 'col-sm-12', 'col-md-7', 'col-lg-7', 'col-xl-7');
      taskElement.innerHTML = `
        <input class="form-control" type="text" value="${task.text}" readonly>
        <button type="button" class="btn btn-warning" style="margin-left: 10px;">Edit</button>
        <button type="button" class="btn btn-danger" style="margin-left: 10px;">Delete</button>
      `;
  
      // Append the task element to the task list
      taskList.appendChild(taskElement);
    });
  }
  
  // Fetch tasks when the page loads
  fetchTasks();