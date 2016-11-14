/**
 * Created by David on 13 Nov 2016.
 */
import http = require('http')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// Here we define our Food interface, its properties, and their types.
interface IBook {
    title: string;
    author: string;
    published?: Date;
    pages?: number;
}

// We tell our function to expect an object that fulfills the Food interface.
// This way we know that the properties we need will always be available.
function about(book: IBook): void{
    console.log("Title: " + book.title + ", Author: " + book.author + ", Published: " + book.published + " Pages: " + book.pages);
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.

let book1 = {
    title: "The Name of the Wind",
    author: "maman",
    published: new Date,
    pages: 100
}

about(book1);

interface IFunc {
    myFunc(a: string,b: string,c: string): Array<string>;
}

class Func implements IFunc {
    myFunc(a: string, b: string, c: string): Array<string> {
        return [a, b, c]
    }
}

class FUNC implements IFunc {
    myFunc(a: string, b: string, c: string): Array<string> {
        return [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()]
    }
}

let a = new Func;
console.log(a.myFunc('aa','bb','cc'));

let b = new FUNC;
console.log(b.myFunc('aa','bb','cc'));

/*let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}*/
