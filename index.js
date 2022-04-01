const xhr = new XMLHttpRequest();
const btn = document.getElementById("btn")


btn.addEventListener("click", () => {
    function get() {
        return new Promise((succeed, fail) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:5050");
            xhr.addEventListener("load", () => {
                if (xhr.status >=200 && xhr.status < 400)
                    succeed(xhr.response);
                else
                    fail(new Error(`Request failed: ${xhr.statusText}`));
            });
            xhr.addEventListener("error", () => fail(new Error("Network error")));
            xhr.send();
      });
    }
    
    get().then(function(value){ console.log(value)});
})


class UI{

    constructor(options) {
        this.elem = document.createElement("div");
        this.elem.style.width =  options.width + 'px';
        this.elem.style.height = options.height + 'px'
        this.elem.style.background = options.color;
    }

    setParent(parent) {
        parent.appendChild(this.elem);
    }

    setText(str, el){
        return el.innerText = str;
    }
    createEL(element){
        return document.createElement(element);
    }
    changeBackground(){
        return Draw.setBackground();
    }

}

class Draw{

    static setBackground(){
        document.body.style.background = '#B5B8B1';
        return console.log("Background was colored");
    }
    
}

let ui = new UI({
    width: 100,
    height: 100,
    color: "red"
});

ui.changeBackground();
ui.setParent(document.body);