var Task = require('./task');
var Repo require('./taskRepo');

var task1 = new Task(Repo.get(1));

var task1 = new Task('create a demo for modules');
var task2 = new Task('create a demo for modules');

task1.complete();
task2.save();