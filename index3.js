let lists=document.getElementsByClassName("list");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");


for (l of lists){
    l.addEventListener("dragstart",function(e){
        let select = e.target;

        box1.addEventListener("dragover",function(w){
            w.preventDefault();
        });
        box1.addEventListener("drop",function(t){
            box1.appendChild(select);
            select = null;
        });

        box2.addEventListener("dragover",function(w){
            w.preventDefault();
        });
        box2.addEventListener("drop",function(t){
            box2.appendChild(select);
            select = null;
        });
    })
       
    }
