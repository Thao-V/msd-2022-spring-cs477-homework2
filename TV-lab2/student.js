class Student {
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    getName(id){
        if(this.id === id){
            console.log('My name is ', this.name);
        }else{
            console.log('It is not me');
        }
    }
}

module.exports = Student