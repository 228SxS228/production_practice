class UI {
    
    constructor(type) {
        this.elem = document.createElement("input");
        if (type) this.elem.type = type
    }

    setParent(parent) {
        parent.appendChild(this.elem);
    }

}


new UI("password").setParent(document.body)