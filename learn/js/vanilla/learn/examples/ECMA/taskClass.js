'use strict'

class Task {
    constructor(name){
        this.name = name;
        this.completed = false;
    };

    complete() {
        console.log('completing task:' + this.name);
        this.completed = true;
    };

    save() {
        console.log('saving Task:' + this.name);
    };

}

var task1 = new Task('create a demo for modules');
var task2 = new Task('create a demo for modules');

task1.complete();
task2.save();
  