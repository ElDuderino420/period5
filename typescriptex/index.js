"use strict";
/**
 * Created by David on 13 Nov 2016.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
// We tell our function to expect an object that fulfills the Food interface.
// This way we know that the properties we need will always be available.
function about(book) {
    console.log("Title: " + book.title + ", Author: " + book.author + ", Published: " + book.published + " Pages: " + book.pages);
}
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var book1 = {
    title: "The Name of the Wind",
    author: "maman",
    published: new Date,
    pages: 100
};
about(book1);
var Func = (function () {
    function Func() {
    }
    Func.prototype.myFunc = function (a, b, c) {
        return [a, b, c];
    };
    return Func;
}());
var FUNC = (function () {
    function FUNC() {
    }
    FUNC.prototype.myFunc = function (a, b, c) {
        return [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
    };
    return FUNC;
}());
var a = new Func;
console.log(a.myFunc('aa', 'bb', 'cc'));
var b = new FUNC;
console.log(b.myFunc('aa', 'bb', 'cc'));
/*let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}*/
