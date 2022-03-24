class UI {
    
    constructor(options) {
        this.elem = document.createElement("div");
        this.elem.style.width =  options.width + 'px';
        this.elem.style.height = options.height + 'px'
        this.elem.style.background = options.color;
    }

    setParent(parent) {
        parent.appendChild(this.elem);
    }

}

const test = new UI({
    height: 100,
    width: 200, 
    color: 'red'
}).setParent(document.body);