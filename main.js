#! /usr/bin/env node 
import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            type: "input",
            name: "firstQuestion",
            message: "What would you like to add to the List?"
        },
        {
            type: "confirm",
            name: "secondQuestion",
            message: "Would you like to add more in your todos?",
            default: "true"
        }
    ]);
    todoList.push(todoQuestions.firstQuestion);
    console.log("Added successfully in your todo List", todoList);
    // The loop is running on the based of this condition
    condition = todoQuestions.secondQuestion;
}
console.log("Your updated todo List", todoList);
