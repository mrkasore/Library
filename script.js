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
    let read = document.querySelector('.readen').checked;
    let index = i;
    myLibrary.push(new Book(title, author, pages, read, index));
    console.log(myLibrary[0].read);
    
    let div = document.createElement('div');
    div.innerHTML = myLibrary[i].title;
    document.body.querySelector('.txt').append(div);

    let div2 = document.createElement('div2');
    div2.innerHTML = myLibrary[i].author;
    document.body.querySelector('.txt').append(div2);

    let div3 = document.createElement('div3');
    div3.innerHTML = myLibrary[i].pages;
    document.body.querySelector('.txt').append(div3);

    console.log(document.querySelector('.readen').checked);
    console.log(myLibrary[i].read);
    let btnRead = document.createElement('button');

    btnRead.setAttribute('class', 'read');
    document.body.querySelector('.txt').append(btnRead);
    btnRead.classList.add('activeBtn');
    btnRead.setAttribute('id', i);
    if (read) {
        btnRead.innerHTML = 'Read';
        btnRead.classList.remove('NotActiveBtn');
        btnRead.classList.add('activeBtn');
        myLibrary[i].read = true;
    } else {
        btnRead.innerHTML = 'Not read';
        btnRead.classList.remove('activeBtn');
        btnRead.classList.add('NotActiveBtn');
        myLibrary[i].read = false;
    }

    btnRead.addEventListener('click', function(e) {
        if (e.target.classList.contains('NotActiveBtn')) {
            btnRead.innerHTML = 'Read';
            btnRead.classList.remove('NotActiveBtn');
            btnRead.classList.add('activeBtn');
            myLibrary[e.target.id].read = true;

        } else if (e.target.classList.contains('activeBtn')){
            btnRead.innerHTML = 'Not read';
            btnRead.classList.remove('activeBtn');
            btnRead.classList.add('NotActiveBtn');
            myLibrary[e.target.id].read = false;

        }
    });

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
        btnRead.setAttribute('class', 'read');
        document.body.querySelector('.txt').append(btnRead);
        if (b[i].read) {
            btnRead.innerHTML = 'Read';
            btnRead.classList.remove('NotActiveBtn');
            btnRead.classList.add('activeBtn');
        } else {
            btnRead.innerHTML = 'Not read';
            btnRead.classList.remove('activeBtn');
            btnRead.classList.add('NotActiveBtn');
        }
        btnRead.setAttribute('id', i);

        btnRead.addEventListener('click', function(e) {
            if (e.target.classList.contains('NotActiveBtn')) {
                btnRead.innerHTML = 'Read';
                btnRead.classList.remove('NotActiveBtn');
                btnRead.classList.add('activeBtn');
                myLibrary[e.target.id].read = true;
                locStor();
            } else if (e.target.classList.contains('activeBtn')){
                btnRead.innerHTML = 'Not read';
                btnRead.classList.remove('activeBtn');
                btnRead.classList.add('NotActiveBtn');
                myLibrary[e.target.id].read = false;
                locStor();
            }
        });



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
