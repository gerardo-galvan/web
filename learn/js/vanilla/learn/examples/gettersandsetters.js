var cat = {
    name: {first: 'flussy', last: 'Lebe'},
    color: 'white'
}

Object.defineProperty(cat, 'fullName',
{
    get: function(){
        return this.name.first + '' + this.name.last;
    }
    set: function(value) {
        var nameParts = value.split('')
        this.name.first = nameParts[0];
        this.name.last = nameParts[1]
    }

})

