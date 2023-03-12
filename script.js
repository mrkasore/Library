let myLibrary = [];
let form = document.querySelector('#form');

let btn = document.querySelector('.addBook');

let i = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


Book.prototype.info = function () {
    return `${this.title} ${this.author} ${this.pages} ${this.read}`;
}

Object.prototype.info = function () {
    return `${this.title} ${this.author} ${this.pages} ${this.read}`;
}

Object.prototype.info = function () {
    return `${this.title} ${this.author} ${this.pages} ${this.read}`;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let title = document.querySelector('.title').value;
    let author = document.querySelector('.author').value;
    let pages = document.querySelector('.pages').value;
    let read = 'Not read';
    let index = i;
    myLibrary.push(new Book(title, author, pages, read, index));
    //console.log(myLibrary);
    
    let div = document.createElement('div');
    div.innerHTML = myLibrary[i].title;
    document.body.querySelector('.txt').append(div);

    let div2 = document.createElement('div2');
    div2.innerHTML = myLibrary[i].author;
    document.body.querySelector('.txt').append(div2);

    let div3 = document.createElement('div3');
    div3.innerHTML = myLibrary[i].pages;
    document.body.querySelector('.txt').append(div3);



    let btnRead = document.createElement('button');
    btnRead.innerHTML = 'Not read';
    btnRead.setAttribute('class', 'read');

    btnRead.addEventListener('click', function(e) {
        if(e.target.innerHTML === 'Not read') {
            e.target.innerHTML = 'Read';
        } else {
            e.target.innerHTML = 'Not read';
        }
        //locStor();
        //window.location.reload();
    });
    document.body.querySelector('.txt').append(btnRead);

    let div5 = document.createElement('button');
    div5.innerHTML = 'Remove';
    div5.setAttribute('id', i);
    div5.setAttribute('class', 'remove');

    div5.addEventListener('click', function(e) {
        
        myLibrary.splice(Number(e.target.id), 1);
        locStor();
        window.location.reload();
    });

    document.body.querySelector('.txt').append(div5);

    i++;

    locStor();


    document.querySelector('.form').classList.remove("active");

    let arr =  document.querySelectorAll('.remove');

});

function locStor() {
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify(myLibrary));
    let b = localStorage.getItem('data');
    b = JSON.parse(b);
    //console.log(b);
}


function get() {
    console.log("Loaded");
    let b = localStorage.getItem('data');

    if(JSON.parse(b) !== null) {
        myLibrary = JSON.parse(b);
        i = JSON.parse(b).length;
    }

    b = JSON.parse(b);
    //console.log(b[0].info());

    for(let i = 0; i < b.length; i++) {

        let div = document.createElement('div');
        div.innerHTML = b[i].title;
        document.body.querySelector('.txt').append(div);

        let div2 = document.createElement('div');
        div2.innerHTML = b[i].author;
        document.body.querySelector('.txt').append(div2);

        let div3 = document.createElement('div');
        div3.innerHTML = b[i].pages;
        document.body.querySelector('.txt').append(div3);



        let btnRead = document.createElement('button');
        btnRead.innerHTML = myLibrary[i].read;
        btnRead.setAttribute('class', 'read');
        let t = btnRead.innerHTML;
        btnRead.addEventListener('click', function(e) {
            if(e.target.innerHTML === 'Not read') {
                t = 'Read';
                myLibrary[i].read = t;
                //locStor();
            } else {
                t = 'Not read';
                myLibrary[i].read = t;
                //locStor();
            }
            locStor();

            window.location.reload();
        });
        document.body.querySelector('.txt').append(btnRead);



        let div5 = document.createElement('button');
        div5.innerHTML = 'Remove';

        div5.setAttribute('id', i);
        div5.setAttribute('class', 'remove');

        div5.addEventListener('click', function(e) {

            myLibrary.splice(Number(e.target.id), 1);
            locStor();
            window.location.reload();
        });

        document.body.querySelector('.txt').append(div5);

        myLibrary[i].read = t;

    }

}

let formWindow = document.querySelector('.form2');

formWindow.addEventListener('click', function() {
    document.querySelector('.form').classList.remove("active");
});

btn.addEventListener('click', function() {
    document.querySelector('.form').classList.add("active");
});

document.addEventListener("DOMContentLoaded", get);
