class UI{
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

let ui = new UI();

ui.changeBackground();