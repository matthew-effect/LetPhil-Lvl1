const tasks = []; // list where tasks go 

while (true) {
    let task = prompt("Enter task or type 'done' to finish: ");

    if (task.toLowerCase() === 'done') {
        break; // if done break out of while loop
    }

    tasks.push(task); // add user input to tasks 
}

console.log("Your to-do list: ")
tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`)
})