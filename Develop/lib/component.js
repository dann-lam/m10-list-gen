class Component {
    constructor(children = []){
        this.children = children
        this.taskList = [];
    }
    render() {

        throw new Error ("Child class must implement render() method.");
    }

    renderInnerHTML() {
        for(let i = 0; i < this.children.length; i++){
            if(typeof(this.children[i]) !== "string"){
                console.log("This is :");
                console.log(this)
                this.render();
            }
        }
    }
}

class Header extends Component {
    constructor (children, item) { //How our class parameters work
        super(children); //Stuff we took from the parent class.
        this.children = children;

    }
    render() {
        return `<header class="header"><h1>Todo Today</h1><p>${this.children}</p></header>`
    }

}
// * It's done when the `TaskListItem` class passes children to its parent class and sets a `priority` property.
class TaskListItem extends Component {
    constructor (children, text, priority) {
        super(children)
        this.text = text;
        this.priority = priority;
    }
    render(){
        if (this.priority) {
            return `<li class="tasks-item tasks-item-priority">${this.text}</li>`
        } else {
        return `<li class="tasks-item">${this.text}</li>`
        //append this return to the list.
        }
    }
}

class TaskList extends Component {
    constructor (children) {
        super(children)
    }
    render(){
        return `<ul class="tasks">${this.children}</ul>`
    }
}

class sayHi {
    constructor(string) {
        this.string = string;
    }
    greet() {
        console.log("Hello, " + this.string);
    }
}

module.exports = {
    Header, TaskListItem, TaskList, sayHi
}
