const xhr = new XMLHttpRequest();
const btn = document.getElementById("btn")


class Data {
    
    getData() {
       
    
    } 
}

btn.addEventListener("click", () => {
    // xhr.open("GET", "http://localhost:5050/data.json", true);
    // xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    // xhr.send();
    // xhr.onreadystatechange = function() {
    // if (this.status == 200 && this.readyState === 4) {
    //     const options = JSON.parse(xhr.response);

    // } else {
    //     console.error(this.error);
    // }
    // return options
    // };
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
    width: 100,
    height: 100,
    color: "red"
}).setParent(document.body);