'use strict';

/*
Написать объект ToDoList, который хранит в себе задачи 
{'title': 'Помыть посуду',
 id: 1,
priority: 1}

 и имеет методы: 

 - Добавить задачу 
 - Удалить задачу по id 
 - Обновить имя или приоритет по id 
 - Отсортировать задачи по приоритету
*/

const toDoList = {
    task1: [
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        }
    ],
    addTask: function() {
        this.task1.push(
            {
                'title': prompt("Введите название задачи"),
                id: this.task1.length + 1,
                priority: Number(prompt("Введите приоритет"))
            }
        ); 
        console.log(toDoList)
        return this
    },
    deleteTask: function(identify) {
        for (let i=0; i<this.task1.length; i++) {
            if (this.task1[i].id == identify) {
                this.task1.splice(i, 1)
            }
        }
        return this
    },
    updateTask: function(idOfTask, newTitle) {
        for (let i=0; i<this.task1.length; i++) {
            if (this.task1[i].id == idOfTask) {
                this.task1[i].title = newTitle;
            }
        }
        return this
    },
    sortTasks: function() {
        this.task1.sort((a, b) => a.priority - b.priority);
        return this
    }
};

// console.log(toDoList)
// console.log(toDoList.addTask());
// console.log(toDoList.deleteTask(prompt("Введите номер id по которому удалить")));
// console.log(toDoList.updateTask(prompt("Введите номер id для обновление имени"), prompt("Введите новое название задачи")))
// console.log(toDoList.sortTasks());




