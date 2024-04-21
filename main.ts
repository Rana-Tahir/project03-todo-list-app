#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";


let todoList: string [] = [];
let condition = true

// print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<==================================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(` <<<===================>>>    ${chalk.bold.hex('#9999ff')('Welcome To TODO-App ')})  <<<=====================>>> `));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t  <<<================================================>>>\n`));


let main = async () => {
    while(condition){
        let Option = await inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],    
            }
        ]);
        if(Option.choice === "Add Task"){
            await addTask()
        }
        else if(Option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(Option.choice === "Update Task"){
            await updateTask()
        }
        else if(Option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(Option.choice === "Exit"){
            condition = false
        }
    }
};

    let addTask = async () => {
        let newTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Enter your new task :",
            }
        ]);
        todoList.push(newTask.task);
        console.log(`\n ${newTask.task} task added successfully in Todo-List`);
    };
    
let viewTask = () => {
        console.log(`\n Your Todo-List: \n`);
        todoList.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`)
        })
        console.log("\n");
    }


let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete :",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List\n`);
};


let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter new task name :",
        }
    ]);
todoList[update_task_index.index - 1] = update_task_index.new_task
console.log(`\n Task at index no. ${update_task_index.index} update successfully [for updated list check option: ]`);

}

main()


