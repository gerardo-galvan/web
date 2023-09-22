var repo = function() {

    var db = {};
    var get = function(id){ //get method
            console.log('getting task' + id);
            return{
                name: 'new task from db'
            }
    }
    var save = function(task){
            console.log('Saving' + task.name + 'to the db');
        }

    return {
        get: get, 
        save: 
    }
}

module.exports = repo(); 