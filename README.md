# Backend-MERN-

# 📘 Backend Short Notes

## 🚀 What is Backend?

* Backend is the server-side part of a web application.
* Handles database, APIs, server logic, authentication.
* In simple words: **Frontend dikhata hai, Backend chalata hai.**

---

# 🟢 Node.js

Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows you to run JS outside the browser.

### ✅ Features of Node.js

* Asynchronous & Event-driven
* Single-threaded (Handles multiple tasks via event loop)
* Non-blocking I/O
* Fast due to V8 engine

### 🛠 Simple Node.js Setup

```bash
node --version
npm --version
```

### 🖨 Hello World Program

```js
console.log("Hello World");
```

Run using:

```bash
node app.js
```

---

# 📦 Modules in Node.js

Modules = Reusable pieces of code.

### Types of Modules

1. **Core Modules** (built-in)
2. **Local Modules** (your own)
3. **Third-party Modules** (npm packages)

---

## 🔹 Core Modules (Short Notes)

### 1️⃣ Path Module

```js
const path = require('path');
```

* `path.basename()` → file name
* `path.dirname()` → folder path
* `path.extname()` → extension
* `path.join()` → join paths

### 2️⃣ OS Module

```js
const os = require('os');
```

* `os.type()` → OS type
* `os.totalmem()` → RAM
* `os.freemem()` → free RAM
* `os.homedir()` → home directory

### 3️⃣ HTTP Module

```js
const http = require('http');
```

* Create server

```js
const server = http.createServer((req, res)=>{
    res.end("Hello from Server");
});
server.listen(3000);
```

---

# 📁 File System (fs) Module — **Short Notes**

```js
const fs = require('fs');
```

## ⭐ Important FS Functions (with 1-line meaning)

### 📌 Reading Files

```js
fs.readFileSync('file.txt', 'utf-8');
```

* Reads file **synchronously**.

```js
fs.readFile('file.txt', 'utf-8', (err, data)=>{});
```

* Reads file **asynchronously**.

### 📌 Creating / Writing Files

```js
fs.writeFileSync('data.txt', 'Hello');
```

* Creates or overwrites file.

```js
fs.writeFile('data.txt', 'Hello', ()=>{});
```

* Async version.

### 📌 Appending Data

```js
fs.appendFileSync('data.txt', '\nExtra line');
```

* Adds data without overwriting.

### 📌 Deleting File

```js
fs.unlinkSync('file.txt');
```

* Deletes file.

### 📌 Check File Exists

```js
fs.existsSync('data.txt');
```

* Returns **true/false**.

### 📌 Make Folder

```js
fs.mkdirSync('myFolder');
```

* Creates a folder.

### 📌 Read Folder

```js
fs.readdirSync('myFolder');
```

* Gives list of files in folder.

### 📌 Remove Folder

```js
fs.rmdirSync('myFolder');
```

* Removes empty folder.

---

# 🔧 Creating Local Modules

### 📌 math.js

```js
function add(a,b){ return a+b }
function subtract(a,b){ return a-b }
module.exports = { add, subtract };
```

### 📌 app.js

```js
const math = require('./math');
console.log(math.add(5,3));
```

---

# 📜 How `process.argv` Works (Short Note)

Used to take input from terminal.

```js
const command = process.argv[2];
console.log(command);
```

Running:

```bash
node app.js add
```

Output: `add`

---

# 🎯 Summary

* Node.js lets you run JS on server.
* Modules help organize code.
* FS module handles file operations.
* `process.argv` helps in CLI inputs.

---

If you want, I'll also make **Notes PDF / Word file**.
