const tasks = [] // init empty task list

while (true) {
    // prompt user for task
    let task = prompt("Enter a task or 'done' to finish");

    // validate input
    if (task.toLowerCase() === 'done') {
        break // if done break
    }

    tasks.push(task);
}

// display list
console.log("Your To-Do List:")
tasks.forEach((task, index) => {
    console.log(`${index + 1}.${task}`)
});