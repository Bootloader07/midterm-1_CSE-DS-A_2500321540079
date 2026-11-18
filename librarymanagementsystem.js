const http = require('http');

let books = [{id:1,title:"Mathematics",author: "Kanishak bansal",category: "Numbers"},
    {id: 2,title: "Python", author:"Kanishak Bansal",category: "programming"},
    {id: 3, title: "Rust",author:"Kanishak Bansal", category:"programming"}
];
const server = http.createServer((req, res)=>{
    if(req.method === 'POST' && req.url === '/add'){
        books.push({ id: 4, title: "Javascript", author: "Kanhaiya gupta", category: "programming" });
        res.end("Book Added");
    }
    else if(req.method === 'GET' && req.url === '/books'){
        res.end(JSON.stringify(books));
    }
    else if(req.method === 'PUT' && req.url === '/update'){
        books[0].title = "Mathematics for AI/ML";
        res.end("Book Updated");
    }
    else if(req.method === 'DELETE' && req.url === '/delete'){
        books = books.filter(b => b.id !== 1);
        res.end("Book Deleted");
    }
    else{
        res.end("Invalid Request");
    }
});
server.listen(3000,()=>{
    console.log("Server running on port 3000");
});
