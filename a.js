// ============================================
// THEME TOGGLE
// ============================================

const darkToggle = document.getElementById("darkToggle")
const navbar = document.getElementById("navbar")

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
  navbar.classList.toggle("dark-mode")

  if (document.body.classList.contains("dark-mode")) {
    darkToggle.textContent = "🌙"
    localStorage.setItem("theme", "dark")
  } else {
    darkToggle.textContent = "☀️"
    localStorage.setItem("theme", "light")
  }
})

// Apply saved theme on load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "light"
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode")
    navbar.classList.add("dark-mode")
    darkToggle.textContent = "🌙"
  }
})

// ============================================
// THEORY DATA
// ============================================

const theoryData = [
  { title: "JS History", body: "Created in 1995 for Netscape. Now the standard for web logic." },
  { title: "V8 Engine", body: "Google engine that compiles JS directly to machine code for speed." },
  { title: "Hoisting", body: "Variable and function declarations are moved to the top of their scope." },
  { title: "Closures", body: "Functions retaining access to variables from their parent scope after execution." },
  { title: "Prototypes", body: "The mechanism for inheritance in JS via a chain of linked objects." },
  { title: "Strict Mode", body: "A restricted variant of JS that throws errors for silent failures." },
  { title: "Arrow Funcs", body: "Concise syntax for functions that lexically binds the 'this' value." },
  { title: "Destructuring", body: "Unpacking values from arrays or properties from objects into variables." },
  { title: "Promises", body: "An object representing the eventual completion or failure of an async task." },
  { title: "Async/Await", body: "Syntactic sugar over Promises making async code look synchronous." },
  { title: "DOM Tree", body: "The Document Object Model: a tree representation of the HTML document." },
  { title: "Type Coercion", body: "Automatic conversion of values from one data type to another (e.g., 5 + '5')." },
  { title: "Event Loop", body: "Enables non-blocking I/O by offloading tasks and checking the queue." },
  { title: "LocalStorage", body: "Browser-based key-value storage that persists after page reloads." },
  { title: "IIFE", body: "Immediately Invoked Function Expressions used for private scoping." },
  { title: "Call Stack", body: "LIFO structure used to keep track of active function calls." },
  { title: "Event Delegation", body: "A technique of handling events at a higher level in the DOM." },
  { title: "Currying", body: "Transforming a function with multiple arguments into a sequence of functions." },
  { title: "Memoization", body: "Optimization technique to cache function results for faster future access." },
  { title: "Spread Operator", body: "Syntax (...) to expand iterable objects into individual elements." },
]

// ============================================
// LAB DATA (SNIPPETS)
// ============================================

 const labSnippets = [
  // Variables & Data Types
  { name: "Ex 1: Declare Variables", code: "let a = 10;\nconst b = 20;\nvar c = 30;\nconsole.log(a, b, c);" },
  { name: "Ex 2: Template Literals", code: "const name = 'Gemachis';\nconsole.log(`Hello ${name}`);" },
  { name: "Ex 3: Type Conversion", code: "const num = '5';\nconsole.log(Number(num) + 2);" },
  { name: "Ex 4: typeof Operator", code: "let x = true;\nconsole.log(typeof x);" },
  { name: "Ex 5: Null vs Undefined", code: "let a = null;\nlet b;\nconsole.log(a, b);" },

  // Operators
  { name: "Ex 6: Arithmetic Operators", code: "console.log(5 + 3, 5 - 3, 5 * 3, 5 / 3, 5 % 3);" },
  { name: "Ex 7: Comparison Operators", code: "console.log(5 > 3, 5 < 3, 5 == '5', 5 === '5');" },
  { name: "Ex 8: Logical Operators", code: "console.log(true && false, true || false, !true);" },
  { name: "Ex 9: Assignment Operators", code: "let a = 5;\na += 3;\na *= 2;\nconsole.log(a);" },
  { name: "Ex 10: Ternary Operator", code: "let age = 18;\nconsole.log(age >= 18 ? 'Adult' : 'Minor');" },

  // Functions
  { name: "Ex 11: Function Declaration", code: "function greet(name){ console.log('Hello', name); }\ngreet('Gemachis');" },
  { name: "Ex 12: Function Expression", code: "const greet = function(name){ console.log('Hi', name); };\ngreet('JS');" },
  { name: "Ex 13: Arrow Function", code: "const add = (a, b) => a + b;\nconsole.log(add(5,3));" },
  { name: "Ex 14: Default Parameters", code: "function greet(name='Guest'){ console.log('Hello', name); }\ngreet();" },
  { name: "Ex 15: Rest Parameters", code: "function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }\nconsole.log(sum(1,2,3,4));" },

  // Arrays
  { name: "Ex 16: Array Creation", code: "const arr = [1,2,3,4];\nconsole.log(arr);" },
  { name: "Ex 17: Array Methods: push/pop", code: "const arr=[1,2]; arr.push(3); arr.pop(); console.log(arr);" },
  { name: "Ex 18: Array Map", code: "const nums=[1,2,3]; const double=nums.map(n=>n*2);\nconsole.log(double);" },
  { name: "Ex 19: Array Filter", code: "const nums=[1,2,3,4]; const evens=nums.filter(n=>n%2===0);\nconsole.log(evens);" },
  { name: "Ex 20: Array Reduce", code: "const nums=[1,2,3,4]; const sum=nums.reduce((a,b)=>a+b,0);\nconsole.log(sum);" },

  // Objects
  { name: "Ex 21: Object Creation", code: "const user={id:1,name:'Gemachis'};\nconsole.log(user);" },
  { name: "Ex 22: Object Destructuring", code: "const {name,id}=user;\nconsole.log(name,id);" },
  { name: "Ex 23: Object Methods", code: "const user={name:'JS', greet(){console.log('Hi', this.name);}}; user.greet();" },
  { name: "Ex 24: Object Keys & Values", code: "console.log(Object.keys(user), Object.values(user));" },
  { name: "Ex 25: Object Spread", code: "const newUser={...user, age:25}; console.log(newUser);" },

  // Loops
  { name: "Ex 26: for Loop", code: "for(let i=0;i<5;i++){ console.log(i); }" },
  { name: "Ex 27: for...of Loop", code: "const arr=[1,2,3]; for(let n of arr) console.log(n);" },
  { name: "Ex 28: for...in Loop", code: "const obj={a:1,b:2}; for(let k in obj) console.log(k,obj[k]);" },
  { name: "Ex 29: while Loop", code: "let i=0; while(i<3){ console.log(i); i++; }" },
  { name: "Ex 30: do...while Loop", code: "let i=0; do{ console.log(i); i++; } while(i<3);" },

  // Conditionals
  { name: "Ex 31: if Statement", code: "let x = 10;\nif(x > 5) console.log('Greater');" },
  { name: "Ex 32: if...else Statement", code: "let x = 2;\nif(x > 5) console.log('Yes'); else console.log('No');" },
  { name: "Ex 33: else if Ladder", code: "let score = 75;\nif(score >= 90) console.log('A');\nelse if(score >= 75) console.log('B');\nelse console.log('C');" },
  { name: "Ex 34: switch Statement", code: "let color = 'red';\nswitch(color){ case 'red': console.log('Red'); break; default: console.log('Other'); }" },
  { name: "Ex 35: Conditional (Ternary)", code: "let age = 18;\nconsole.log(age >= 18 ? 'Adult' : 'Minor');" },

  // Strings
  { name: "Ex 36: String Length", code: "let str='Hello'; console.log(str.length);" },
  { name: "Ex 37: String Methods", code: "let str='hello'; console.log(str.toUpperCase(), str.includes('h'));" },
  { name: "Ex 38: Template Literals", code: "let name='JS'; console.log(`Hello ${name}`);" },
  { name: "Ex 39: String Split & Join", code: "let s='a,b,c'; console.log(s.split(','), s.split(',').join('-'));" },
  { name: "Ex 40: String Replace", code: "let s='Hello'; console.log(s.replace('H','J'));" },

  // Dates
  { name: "Ex 41: Date Object", code: "let now=new Date(); console.log(now);" },
  { name: "Ex 42: Get Date Components", code: "let d=new Date(); console.log(d.getFullYear(), d.getMonth(), d.getDate());" },
  { name: "Ex 43: Set Date Components", code: "let d=new Date(); d.setFullYear(2025); console.log(d);" },
  { name: "Ex 44: Date Formatting", code: "let d=new Date(); console.log(d.toDateString());" },
  { name: "Ex 45: Date Comparison", code: "let d1=new Date('2025-01-01'), d2=new Date(); console.log(d1>d2);" },

  // Math
  { name: "Ex 46: Math Methods", code: "console.log(Math.round(4.7), Math.floor(4.7), Math.ceil(4.1));" },
  { name: "Ex 47: Math Random", code: "console.log(Math.random());" },
  { name: "Ex 48: Math Max/Min", code: "console.log(Math.max(1,2,3), Math.min(1,2,3));" },
  { name: "Ex 49: Math Power & Sqrt", code: "console.log(Math.pow(2,3), Math.sqrt(16));" },
  { name: "Ex 50: Math Trig", code: "console.log(Math.sin(0), Math.cos(0));" },

  // JSON & Storage
  { name: "Ex 51: JSON stringify/parse", code: "const obj={a:1}; const json=JSON.stringify(obj); console.log(JSON.parse(json));" },
  { name: "Ex 52: LocalStorage Set/Get", code: "localStorage.setItem('x','123'); console.log(localStorage.getItem('x'));" },
  { name: "Ex 53: SessionStorage Set/Get", code: "sessionStorage.setItem('y','abc'); console.log(sessionStorage.getItem('y'));" },
  { name: "Ex 54: JSON Access", code: "const obj={a:{b:5}}; console.log(obj.a.b);" },
  { name: "Ex 55: Deep Copy JSON", code: "const obj={a:1}; const copy=JSON.parse(JSON.stringify(obj)); console.log(copy);" },

  // DOM Basics
  { name: "Ex 56: querySelector", code: "const el=document.querySelector('body'); console.log(el);" },
  { name: "Ex 57: getElementById", code: "const el=document.getElementById('main'); console.log(el);" },
  { name: "Ex 58: createElement", code: "const div=document.createElement('div'); document.body.appendChild(div);" },
  { name: "Ex 59: appendChild", code: "const p=document.createElement('p'); p.textContent='Hi'; document.body.appendChild(p);" },
  { name: "Ex 60: removeChild", code: "const p=document.querySelector('p'); p.parentNode.removeChild(p);" },

  // Events
  { name: "Ex 61: addEventListener", code: "document.body.addEventListener('click',()=>console.log('Clicked'));" },
  { name: "Ex 62: onclick Event", code: "document.body.onclick=()=>console.log('Clicked');" },
  { name: "Ex 63: Event Object", code: "document.body.addEventListener('click',(e)=>console.log(e.target));" },
  { name: "Ex 64: Prevent Default", code: "document.querySelector('form').addEventListener('submit',e=>e.preventDefault());" },
  { name: "Ex 65: Event Delegation", code: "document.body.addEventListener('click',e=>{if(e.target.tagName==='BUTTON')console.log('Button clicked');});" },

  // Async & Fetch
  { name: "Ex 66: setTimeout", code: "setTimeout(()=>console.log('Delayed'),1000);" },
  { name: "Ex 67: setInterval", code: "let i=0; setInterval(()=>{console.log(i); i++;},1000);" },
  { name: "Ex 68: Fetch API", code: "fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(console.log);" },
  { name: "Ex 69: Async/Await", code: "async function fetchData(){ const res=await fetch('https://jsonplaceholder.typicode.com/todos/1'); console.log(await res.json()); } fetchData();" },
  { name: "Ex 70: Promise Example", code: "const p=new Promise(resolve=>resolve('Done')); p.then(console.log);" } ,

  // Arrays & Loops Practice
  { name: "Ex 71: Array forEach", code: "const arr=[1,2,3]; arr.forEach(n=>console.log(n));" },
  { name: "Ex 72: Array find", code: "const arr=[5,10,15]; console.log(arr.find(n=>n>8));" },
  { name: "Ex 73: Array some/every", code: "const nums=[2,4,6]; console.log(nums.every(n=>n%2===0), nums.some(n=>n>5));" },
  { name: "Ex 74: Array includes", code: "const arr=[1,2,3]; console.log(arr.includes(2));" },
  { name: "Ex 75: Nested Loops", code: "for(let i=1;i<=3;i++){ for(let j=1;j<=2;j++){ console.log(i,j); }}" },

  // Functions Practice
  { name: "Ex 76: Higher-Order Function", code: "function greet(name){ return ()=>console.log('Hello',name);} const sayHi=greet('JS'); sayHi();" },
  { name: "Ex 77: Callback Function", code: "function compute(a,b,cb){ cb(a+b);} compute(5,10,res=>console.log(res));" },
  { name: "Ex 78: Recursive Function", code: "function factorial(n){ return n<=1?1:n*factorial(n-1);} console.log(factorial(5));" },

  // DOM Manipulation
  { name: "Ex 79: Change Text Content", code: "const h1=document.createElement('h1'); h1.textContent='Hello'; document.body.appendChild(h1);" },
  { name: "Ex 80: Change Style", code: "document.body.style.backgroundColor='lightblue';" },
  { name: "Ex 81: Toggle Class", code: "const div=document.createElement('div'); div.classList.add('box'); document.body.appendChild(div); div.classList.toggle('box');" },

  // Event Practice
  { name: "Ex 82: Button Click", code: "const btn=document.createElement('button'); btn.textContent='Click'; btn.onclick=()=>console.log('Clicked'); document.body.appendChild(btn);" },
  { name: "Ex 83: Input Event", code: "const input=document.createElement('input'); input.addEventListener('input', e=>console.log(e.target.value)); document.body.appendChild(input);" },

  // Objects & JSON
  { name: "Ex 84: Object Nested", code: "const user={name:'JS', contact:{email:'a@b.com'}}; console.log(user.contact.email);" },
  { name: "Ex 85: Object Loop", code: "const obj={a:1,b:2}; for(let k in obj){ console.log(k,obj[k]); }" },
  { name: "Ex 86: Merge Objects", code: "const a={x:1}, b={y:2}; const c={...a,...b}; console.log(c);" },

  // Async Practice
  { name: "Ex 87: Async Function Simple", code: "async function hello(){ return 'Hi'; } hello().then(console.log);" },
  { name: "Ex 88: Fetch Multiple", code: "Promise.all([fetch('https://jsonplaceholder.typicode.com/todos/1').then(r=>r.json()), fetch('https://jsonplaceholder.typicode.com/todos/2').then(r=>r.json())]).then(console.log);" },

  // Strings & Template Literals
  { name: "Ex 89: Multiline Template", code: "const msg=`Hello\nWorld`;\nconsole.log(msg);" },
  { name: "Ex 90: Replace All", code: "let s='JS JS JS'; console.log(s.replaceAll('JS','JavaScript'));" },

  // Advanced Arrays
  { name: "Ex 91: Array Flatten", code: "const arr=[[1,2],[3,4]]; console.log(arr.flat());" },
  { name: "Ex 92: Array FindIndex", code: "const arr=[5,10,15]; console.log(arr.findIndex(n=>n>9));" },
  { name: "Ex 93: Array Sort", code: "const arr=[3,1,2]; console.log(arr.sort());" },
  { name: "Ex 94: Array Reverse", code: "const arr=[1,2,3]; console.log(arr.reverse());" },

  // Mini Projects / Practical
  { name: "Ex 95: Simple Counter", code: "let count=0; const btn=document.createElement('button'); btn.textContent='Click'; btn.onclick=()=>{count++; console.log(count)}; document.body.appendChild(btn);" },
  { name: "Ex 96: Random Number", code: "console.log(Math.floor(Math.random()*100));" },
  { name: "Ex 97: Palindrome Check", code: "const str='madam'; console.log(str===str.split('').reverse().join(''));" },
  { name: "Ex 98: Capitalize", code: "const str='hello'; console.log(str.charAt(0).toUpperCase()+str.slice(1));" },
  { name: "Ex 99: Sum of Array", code: "const arr=[1,2,3,4]; console.log(arr.reduce((a,b)=>a+b,0));" },
  { name: "Ex 100: Filter Even Numbers", code: "const arr=[1,2,3,4,5]; console.log(arr.filter(n=>n%2===0));" }
];


 // ================== QUIZ 315 QUESTIONS ==================
    const qBank = [
  // Foundations 1–35
  { num: 1, txt: "Foundations: What is the primary purpose of JavaScript in web development?", opts: ["Add interactivity", "Style pages", "Structure content", "Handle server-side logic"], ans: "Add interactivity", expl: "JavaScript primarily adds interactivity to web pages." },
  { num: 2, txt: "Foundations: Which data type is NOT primitive in JavaScript?", opts: ["String", "Number", "Object", "Boolean"], ans: "Object", expl: "Objects are reference types, not primitive types." },
  { num: 3, txt: "Foundations: What keyword declares a block-scoped variable?", opts: ["var", "let", "function", "const"], ans: "let", expl: "'let' declares block-scoped variables." },
  { num: 4, txt: "Foundations: Which operator is used for strict equality?", opts: ["==", "===", "=", "!=="], ans: "===", expl: "'===' checks both type and value." },
  { num: 5, txt: "Foundations: What is a closure?", opts: ["A function inside another function", "A function with no return", "A variable declared globally", "A function retaining access to outer scope"], ans: "A function retaining access to outer scope", expl: "Closures allow a function to access variables from its outer scope." },
  { num: 6, txt: "Foundations: Which of these is a falsy value?", opts: ["0", "1", "true", "'false'"], ans: "0", expl: "0 is considered falsy in JavaScript." },
  { num: 7, txt: "Foundations: What does NaN stand for?", opts: ["Not a Number", "New and Null", "Never a Number", "Not Null"], ans: "Not a Number", expl: "NaN indicates an invalid number." },
  { num: 8, txt: "Foundations: Which function converts a string to a number?", opts: ["parseInt()", "String()", "Number()", "Both parseInt() and Number()"], ans: "Both parseInt() and Number()", expl: "Both functions convert strings to numbers, with slight differences." },
  { num: 9, txt: "Foundations: Which is a higher-order function?", opts: ["map()", "push()", "pop()", "length"], ans: "map()", expl: "map() takes a function as an argument, making it higher-order." },
  { num: 10, txt: "Foundations: What is the result of typeof null?", opts: ["null", "object", "undefined", "number"], ans: "object", expl: "In JavaScript, typeof null returns 'object' due to legacy reasons." },
  { num: 11, txt: "Foundations: Which keyword creates a constant?", opts: ["const", "let", "var", "function"], ans: "const", expl: "const declares variables that cannot be reassigned." },
  { num: 12, txt: "Foundations: What does 'this' refer to in a regular function?", opts: ["Global object", "Arrow function scope", "Function itself", "Undefined"], ans: "Global object", expl: "'this' in a regular function depends on how the function is called." },
  { num: 13, txt: "Foundations: Which array method mutates the original array?", opts: ["slice()", "splice()", "map()", "filter()"], ans: "splice()", expl: "splice() changes the original array, others return new arrays." },
  { num: 14, txt: "Foundations: What is the default value of an uninitialized variable?", opts: ["null", "undefined", "0", "NaN"], ans: "undefined", expl: "Uninitialized variables are undefined by default." },
  { num: 15, txt: "Foundations: Which function is used to schedule code asynchronously?", opts: ["setTimeout()", "parseInt()", "console.log()", "alert()"], ans: "setTimeout()", expl: "setTimeout() schedules code to run after a delay." },
  { num: 16, txt: "Foundations: Which method converts an object to JSON?", opts: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "JSON.convert()"], ans: "JSON.stringify()", expl: "JSON.stringify() converts an object to a JSON string." },
  { num: 17, txt: "Foundations: What does 'use strict' do?", opts: ["Enables strict mode", "Disables type checks", "Allows undeclared variables", "Changes equality behavior"], ans: "Enables strict mode", expl: "'use strict' enforces stricter parsing and error handling in JavaScript." },
  { num: 18, txt: "Foundations: Which is NOT a primitive type?", opts: ["Boolean", "String", "Array", "Number"], ans: "Array", expl: "Array is an object, not a primitive type." },
  { num: 19, txt: "Foundations: What is function hoisting?", opts: ["Moving declarations to the top", "Delayed execution", "Running functions twice", "Scope pollution"], ans: "Moving declarations to the top", expl: "Function declarations are hoisted to the top of their scope." },
  { num: 20, txt: "Foundations: What is the output of 2+ '2'?", opts: ["4", "'22'", "NaN", "'4'"], ans: "'22'", expl: "JavaScript coerces 2 to a string, concatenating to '22'." },
  { num: 21, txt: "Foundations: Which symbol is used for template literals?", opts: ["`", "'", '"', "~"], ans: "`", expl: "Backticks ` are used for template literals." },
  { num: 22, txt: "Foundations: Which statement correctly defines a class?", opts: ["class MyClass {}", "function MyClass()", "var MyClass = {}", "new class MyClass {}"], ans: "class MyClass {}", expl: "The 'class' keyword defines a class in JavaScript." },
  { num: 23, txt: "Foundations: Which is NOT a falsy value?", opts: ["0", "NaN", "undefined", "'false'"], ans: "'false'", expl: "The string 'false' is truthy." },
  { num: 24, txt: "Foundations: Which method creates a new array from a function?", opts: ["map()", "forEach()", "filter()", "reduce()"], ans: "map()", expl: "map() returns a new array with transformed elements." },
  { num: 25, txt: "Foundations: Which is a correct arrow function?", opts: ["x => x*2", "function(x) { return x*2 }", "var x = function(x) x*2", "x => { x*2 }"], ans: "x => x*2", expl: "Arrow functions can be written in concise form: x => x*2." },
  { num: 26, txt: "Foundations: Which operator is for logical AND?", opts: ["&&", "||", "!", "&"], ans: "&&", expl: "&& represents logical AND." },
  { num: 27, txt: "Foundations: What is the typeof []?", opts: ["array", "object", "list", "undefined"], ans: "object", expl: "Arrays are objects in JavaScript." },
  { num: 28, txt: "Foundations: Which method checks if an array includes a value?", opts: ["includes()", "indexOf()", "find()", "filter()"], ans: "includes()", expl: "includes() returns true if the value is present." },
  { num: 29, txt: "Foundations: Which keyword creates a function expression?", opts: ["function", "const", "let", "var"], ans: "function", expl: "The 'function' keyword can create a function expression." },
  { num: 30, txt: "Foundations: Which method merges objects?", opts: ["Object.assign()", "Object.merge()", "Object.concat()", "Object.combine()"], ans: "Object.assign()", expl: "Object.assign() copies properties from source to target." },
  { num: 31, txt: "Foundations: Which loop iterates over object keys?", opts: ["for...in", "for...of", "while", "do...while"], ans: "for...in", expl: "for...in iterates over enumerable object properties." },
  { num: 32, txt: "Foundations: Which loop iterates over array values?", opts: ["for...of", "for...in", "while", "do...while"], ans: "for...of", expl: "for...of iterates over iterable values." },
  { num: 33, txt: "Foundations: What is the result of null + 1?", opts: ["1", "null1", "NaN", "0"], ans: "1", expl: "null is coerced to 0, so 0+1 = 1." },
  { num: 34, txt: "Foundations: Which method parses a JSON string?", opts: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "parseJSON()"], ans: "JSON.parse()", expl: "JSON.parse() converts JSON string to object." },
  { num: 35, txt: "Foundations: Which method adds elements to the end of an array?", opts: ["push()", "pop()", "shift()", "unshift()"], ans: "push()", expl: "push() appends elements to the array." },

  // DOM 36–70
  { num: 36, txt: "DOM: Which method selects an element by ID?", opts: ["getElementById()", "querySelectorAll()", "getElementsByClassName()", "getElementsByTagName()"], ans: "getElementById()", expl: "getElementById() selects a single element by its ID." },
  { num: 37, txt: "DOM: Which property changes the HTML content of an element?", opts: ["innerText", "innerHTML", "textContent", "value"], ans: "innerHTML", expl: "innerHTML allows you to get or set the HTML content." },
  { num: 38, txt: "DOM: What does appendChild() do?", opts: ["Removes a node", "Adds a node", "Replaces a node", "Selects a node"], ans: "Adds a node", expl: "appendChild() adds a node to the end of a parent element." },
  { num: 39, txt: "DOM: Which method removes an element?", opts: ["removeChild()", "appendChild()", "insertBefore()", "cloneNode()"], ans: "removeChild()", expl: "removeChild() removes a child element from its parent." },
  { num: 40, txt: "DOM: Which event triggers when the page is fully loaded?", opts: ["DOMContentLoaded", "load", "click", "mouseover"], ans: "load", expl: "The 'load' event fires when all assets and content are fully loaded." },
  { num: 41, txt: "DOM: How do you add a CSS class to an element?", opts: ["classList.add()", "setAttribute()", "className.assign()", "addClass()"], ans: "classList.add()", expl: "classList.add() adds a class to the element." },
  { num: 42, txt: "DOM: How do you remove a CSS class from an element?", opts: ["classList.remove()", "deleteClass()", "className.remove()", "removeClass()"], ans: "classList.remove()", expl: "classList.remove() removes a class from the element." },
  { num: 43, txt: "DOM: Which method selects all elements matching a CSS selector?", opts: ["querySelectorAll()", "getElementsByClassName()", "getElementsByTagName()", "getElementById()"], ans: "querySelectorAll()", expl: "querySelectorAll() returns a NodeList of all matching elements." },
  { num: 44, txt: "DOM: How can you change an element's style color?", opts: ["element.style.color", "element.color", "element.styleColor", "element.setStyle('color')"], ans: "element.style.color", expl: "You can set element.style.color to change its text color." },
  { num: 45, txt: "DOM: What does event.preventDefault() do?", opts: ["Stops default behavior", "Stops propagation", "Removes element", "Adds event listener"], ans: "Stops default behavior", expl: "preventDefault() prevents the default action of the event." },
  // DOM continued 46–70
{ num: 46, txt: "DOM: Which method inserts an element before another?", opts: ["insertBefore()", "appendChild()", "replaceChild()", "cloneNode()"], ans: "insertBefore()", expl: "insertBefore() inserts a node before a reference node." },
{ num: 47, txt: "DOM: How do you get an element's parent?", opts: ["parentNode", "childNode", "previousSibling", "nextSibling"], ans: "parentNode", expl: "parentNode returns the parent element of a node." },
{ num: 48, txt: "DOM: Which property sets input value?", opts: ["value", "innerText", "textContent", "defaultValue"], ans: "value", expl: "value property sets or gets the value of input elements." },
{ num: 49, txt: "DOM: How to clone an element?", opts: ["cloneNode()", "copyNode()", "duplicateNode()", "replicateNode()"], ans: "cloneNode()", expl: "cloneNode(true/false) creates a copy of an element." },
{ num: 50, txt: "DOM: Which event triggers on a form submission?", opts: ["submit", "click", "change", "input"], ans: "submit", expl: "The submit event fires when a form is submitted." },
{ num: 51, txt: "DOM: How to add an event listener?", opts: ["addEventListener()", "onEvent()", "attachEvent()", "listen()"], ans: "addEventListener()", expl: "addEventListener() attaches event handlers to elements." },
{ num: 52, txt: "DOM: How to remove an event listener?", opts: ["removeEventListener()", "detachEvent()", "offEvent()", "stopListening()"], ans: "removeEventListener()", expl: "removeEventListener() removes previously attached event handlers." },
{ num: 53, txt: "DOM: Which property gets element text including hidden?", opts: ["textContent", "innerText", "innerHTML", "value"], ans: "textContent", expl: "textContent returns all text content, ignoring styles." },
{ num: 54, txt: "DOM: Which method finds the first element matching a selector?", opts: ["querySelector()", "getElementsByTagName()", "getElementById()", "getElementsByClassName()"], ans: "querySelector()", expl: "querySelector() returns the first matching element." },
{ num: 55, txt: "DOM: How to toggle a class?", opts: ["classList.toggle()", "classList.add()", "classList.remove()", "setAttribute()"], ans: "classList.toggle()", expl: "classList.toggle() adds the class if missing, removes if present." },
{ num: 56, txt: "DOM: How to check if an element contains another?", opts: ["contains()", "includes()", "hasChild()", "hasElement()"], ans: "contains()", expl: "element.contains(node) checks if the node is a descendant." },
{ num: 57, txt: "DOM: Which property gets element dimensions?", opts: ["offsetWidth/offsetHeight", "clientWidth/clientHeight", "scrollWidth/scrollHeight", "All of the above"], ans: "All of the above", expl: "Various properties provide element dimensions for layout and scrolling." },
{ num: 58, txt: "DOM: Which method scrolls an element into view?", opts: ["scrollIntoView()", "scrollTo()", "scrollBy()", "scrollTop()"], ans: "scrollIntoView()", expl: "scrollIntoView() scrolls the element into visible area of the viewport." },
{ num: 59, txt: "DOM: How to prevent event bubbling?", opts: ["stopPropagation()", "preventDefault()", "stopImmediatePropagation()", "cancelBubble"], ans: "stopPropagation()", expl: "stopPropagation() prevents the event from bubbling up the DOM tree." },
{ num: 60, txt: "DOM: How to detect DOM changes?", opts: ["MutationObserver", "setInterval()", "onchange", "DOMWatcher"], ans: "MutationObserver", expl: "MutationObserver observes changes to the DOM nodes." },
{ num: 61, txt: "DOM: Which attribute gets data-* values?", opts: ["dataset", "getAttribute()", "dataAttr", "dataSetAttr"], ans: "dataset", expl: "element.dataset accesses all data-* attributes as properties." },
{ num: 62, txt: "DOM: How to focus an input element?", opts: ["focus()", "click()", "select()", "activate()"], ans: "focus()", expl: "focus() sets focus on an element programmatically." },
{ num: 63, txt: "DOM: Which event triggers when text changes in input?", opts: ["input", "change", "keyup", "keydown"], ans: "input", expl: "The input event fires on every change in value." },
{ num: 64, txt: "DOM: Which property returns element children?", opts: ["children", "childNodes", "firstChild", "lastChild"], ans: "children", expl: "children returns HTML elements only, excluding text nodes." },
{ num: 65, txt: "DOM: How to get computed style?", opts: ["getComputedStyle()", "element.style", "currentStyle", "styleSheets"], ans: "getComputedStyle()", expl: "getComputedStyle() returns the final styles applied to an element." },
{ num: 66, txt: "DOM: Which method prevents default anchor navigation?", opts: ["event.preventDefault()", "return false", "stopPropagation()", "navigate()"], ans: "event.preventDefault()", expl: "preventDefault() stops the browser from following the link." },
{ num: 67, txt: "DOM: How to check if element has a class?", opts: ["classList.contains()", "element.hasClass()", "getAttribute()", "element.className.includes()"], ans: "classList.contains()", expl: "classList.contains() checks presence of a class." },
{ num: 68, txt: "DOM: Which method replaces a child node?", opts: ["replaceChild()", "replaceNode()", "swapChild()", "updateChild()"], ans: "replaceChild()", expl: "replaceChild(newNode, oldNode) replaces a child node with newNode." },
{ num: 69, txt: "DOM: How to detect right-click on element?", opts: ["contextmenu", "click", "mousedown", "mouseup"], ans: "contextmenu", expl: "The contextmenu event fires on right-click." },
{ num: 70, txt: "DOM: How to traverse to next sibling element?", opts: ["nextElementSibling", "nextSibling", "parentNode", "children"], ans: "nextElementSibling", expl: "nextElementSibling returns the next element, skipping text nodes." },
// Q71–Q150

{ num: 71, txt: "Async: What is the proper way to chain multiple promises?", opts: [".then().then()", ".catch()", "await all()", "Promise.allSettled()"], ans: ".then().then()", expl: "Chaining promises uses successive .then() calls for sequential execution." },
{ num: 72, txt: "Async: How do you convert a callback function to a Promise?", opts: ["Wrap in new Promise()", "Use setTimeout()", "Use async keyword only", "Call directly"], ans: "Wrap in new Promise()", expl: "Wrapping callbacks in a Promise allows using async/await syntax." },
{ num: 73, txt: "Async: What does Promise.allSettled() return?", opts: ["Array of results for all promises", "First resolved promise only", "Undefined", "Array of errors"], ans: "Array of results for all promises", expl: "Promise.allSettled() returns status and value/reason for all promises." },
{ num: 74, txt: "Async: Which statement pauses an async function until a promise resolves?", opts: ["await", "return", "yield", "then"], ans: "await", expl: "await pauses execution of an async function until the Promise settles." },
{ num: 75, txt: "Async: How do you handle errors in async/await?", opts: ["try/catch block", "if statement", ".then()", "return null"], ans: "try/catch block", expl: "Wrap await calls in try/catch to catch rejected promises." },
{ num: 76, txt: "Async: Which method runs promises concurrently?", opts: ["Promise.all()", "for loop with await", "Promise.race()", "setTimeout()"], ans: "Promise.all()", expl: "Promise.all() executes multiple promises concurrently and waits for all to settle." },
{ num: 77, txt: "Async: What happens if one promise fails in Promise.all()?", opts: ["All reject immediately", "Other promises continue silently", "Ignored", "Returns undefined"], ans: "All reject immediately", expl: "Promise.all() rejects immediately if any promise rejects." },
{ num: 78, txt: "Async: How can you wait for the fastest promise to finish?", opts: ["Promise.race()", "Promise.all()", "Promise.any()", "setTimeout()"], ans: "Promise.race()", expl: "Promise.race() resolves/rejects as soon as the first promise settles." },
{ num: 79, txt: "Async: What type does an async function always return?", opts: ["Promise", "Number", "Array", "String"], ans: "Promise", expl: "Async functions always return a Promise." },
{ num: 80, txt: "Async: Which function creates a delayed execution for async/await?", opts: ["await new Promise(resolve => setTimeout(resolve, ms))", "setTimeout(ms)", "sleep(ms)", "delay(ms)"], ans: "await new Promise(resolve => setTimeout(resolve, ms))", expl: "A common pattern for delays using async/await." },

{ num: 81, txt: "Engine: What is JIT in JS engines?", opts: ["Just-In-Time compiler", "Java Interface Tool", "Job In Thread", "JSON Internal Transform"], ans: "Just-In-Time compiler", expl: "JIT compiles JS to machine code at runtime for performance." },
{ num: 82, txt: "Engine: Which engine powers Chrome and Node.js?", opts: ["V8", "SpiderMonkey", "Chakra", "JavaScriptCore"], ans: "V8", expl: "V8 compiles JS to machine code and executes it efficiently." },
{ num: 83, txt: "Engine: What is the call stack used for?", opts: ["Tracking function execution", "Storing variables globally", "Rendering DOM", "Async tasks only"], ans: "Tracking function execution", expl: "The call stack manages function invocation order (LIFO)."},
{ num: 84, txt: "Engine: How does JS handle long-running tasks?", opts: ["Event loop and callback queue", "Multiple threads automatically", "Parallel synchronous execution", "Ignore them"], ans: "Event loop and callback queue", expl: "JS uses the event loop for non-blocking asynchronous execution." },
{ num: 85, txt: "Engine: What does garbage collection do?", opts: ["Frees memory of unused objects", "Increases memory usage", "Deletes global variables", "Optimizes CPU only"], ans: "Frees memory of unused objects", expl: "Automatic garbage collection removes objects no longer referenced." },
{ num: 86, txt: "Engine: Which method improves performance in engines?", opts: ["Inline caching", "Global variables", "Loops only", "Async functions"], ans: "Inline caching", expl: "Engines optimize repeated property access using inline caching." },
{ num: 87, txt: "Engine: What is the main thread used for?", opts: ["Executing JS code sequentially", "Rendering CSS only", "Async database access", "Garbage collection"], ans: "Executing JS code sequentially", expl: "JS executes code on the main thread while async tasks wait in the queue." },
{ num: 88, txt: "Engine: How are function calls stored?", opts: ["Call stack", "Heap memory", "Queue", "Global object"], ans: "Call stack", expl: "Function calls are tracked using the call stack." },
{ num: 89, txt: "Engine: Which part of memory stores objects?", opts: ["Heap", "Stack", "Register", "Cache"], ans: "Heap", expl: "Heap stores objects and dynamically allocated memory." },
{ num: 90, txt: "Engine: What is event loop priority?", opts: ["Microtasks before macrotasks", "Macrotasks first", "Random", "None"], ans: "Microtasks before macrotasks", expl: "Microtasks (Promises) run before macrotasks (setTimeout) each loop." },

{ num: 91, txt: "Memory: Which scope type holds local variables?", opts: ["Function scope", "Block scope", "Global scope", "Module scope"], ans: "Function scope", expl: "Variables declared with var have function scope." },
{ num: 92, txt: "Memory: Which is block scoped?", opts: ["let", "var", "function", "global"], ans: "let", expl: "let and const are block scoped." },
{ num: 93, txt: "Memory: How to avoid memory leaks?", opts: ["Remove unused references", "Keep everything", "Use global variables", "Ignore closures"], ans: "Remove unused references", expl: "Memory leaks occur when references prevent garbage collection." },
{ num: 94, txt: "Memory: Which object is weakly referenced?", opts: ["WeakMap", "Map", "Array", "Set"], ans: "WeakMap", expl: "WeakMap allows objects to be garbage-collected when no other references exist." },
{ num: 95, txt: "Memory: Stack memory stores?", opts: ["Primitive values and function calls", "Objects only", "DOM nodes", "Arrays"], ans: "Primitive values and function calls", expl: "Stack stores local primitives and call frames; heap stores objects." },
{ num: 96, txt: "Memory: Heap memory stores?", opts: ["Objects and dynamic allocations", "Primitives", "Call stack only", "Undefined"], ans: "Objects and dynamic allocations", expl: "Heap stores dynamically allocated objects." },
{ num: 97, txt: "Memory: Which tool helps profile memory?", opts: ["Browser DevTools", "setTimeout", "console.log", "Promise.all"], ans: "Browser DevTools", expl: "DevTools Memory panel helps detect leaks and heap usage." },
{ num: 98, txt: "Memory: How are closures related to memory?", opts: ["They retain outer variables", "They free memory instantly", "They block async tasks", "They create global variables"], ans: "They retain outer variables", expl: "Closures keep references to outer variables, potentially impacting memory." },
{ num: 99, txt: "Memory: Which reduces memory usage?", opts: ["Dereference unused objects", "Use var everywhere", "Keep global variables", "Create more closures"], ans: "Dereference unused objects", expl: "Dereferencing frees memory for garbage collection." },
{ num: 100, txt: "Memory: WeakSet is useful when?", opts: ["Objects need garbage collection automatically", "Primitives only", "Global constants", "Functions only"], ans: "Objects need garbage collection automatically", expl: "WeakSet holds objects weakly without preventing GC." },

// Continue 101–150 with unique DOM, Events, Logic, Scopes mastery questions
{ num: 101, txt: "DOM: How to select element by ID?", opts: ["document.getElementById()", "querySelectorAll()", "getElementsByClassName()", "getElementByTagName()"], ans: "document.getElementById()", expl: "Selects a single element by its ID." },
{ num: 102, txt: "DOM: How to create a new element?", opts: ["document.createElement()", "document.newElement()", "create()", "new Element()"], ans: "document.createElement()", expl: "Creates a new DOM element of the given type." },
{ num: 103, txt: "DOM: How to add a class to an element?", opts: ["element.classList.add()", "element.classAdd()", "element.setClass()", "element.addClass()"], ans: "element.classList.add()", expl: "Adds class(es) to an element's class list." },
{ num: 104, txt: "DOM: How to remove a child node?", opts: ["parent.removeChild(child)", "child.remove()", "parent.deleteChild()", "element.removeNode()"], ans: "parent.removeChild(child)", expl: "Removes a child node from its parent." },
{ num: 105, txt: "DOM: Which event fires when content is loaded?", opts: ["DOMContentLoaded", "load", "ready", "init"], ans: "DOMContentLoaded", expl: "DOMContentLoaded fires when HTML is fully parsed and loaded." },
// Q106–Q150

{ num: 106, txt: "DOM: How do you attach an event listener?", opts: ["element.addEventListener()", "element.onEvent()", "element.bind()", "element.attach()"], ans: "element.addEventListener()", expl: "addEventListener attaches an event to an element without overwriting existing handlers." },
{ num: 107, txt: "DOM: How to prevent default action?", opts: ["event.preventDefault()", "return false", "event.stop()", "event.ignore()"], ans: "event.preventDefault()", expl: "preventDefault() stops the default behavior for an event." },
{ num: 108, txt: "DOM: How to stop event propagation?", opts: ["event.stopPropagation()", "event.preventDefault()", "return false", "event.cancel()"], ans: "event.stopPropagation()", expl: "Stops the event from bubbling up the DOM tree." },
{ num: 109, txt: "DOM: How to query multiple elements?", opts: ["document.querySelectorAll()", "getElementById()", "document.querySelector()", "document.getElementsByName()"], ans: "document.querySelectorAll()", expl: "Returns a static NodeList of all matching elements." },
{ num: 110, txt: "DOM: How to set inner HTML?", opts: ["element.innerHTML", "element.textContent", "element.value", "element.html"], ans: "element.innerHTML", expl: "Sets or gets the HTML content of an element." },

{ num: 111, txt: "Events: Which event triggers on input change?", opts: ["input", "change", "submit", "click"], ans: "input", expl: "The 'input' event fires every time the value changes." },
{ num: 112, txt: "Events: Which event triggers on form submit?", opts: ["submit", "input", "change", "focus"], ans: "submit", expl: "The 'submit' event fires when a form is submitted." },
{ num: 113, txt: "Events: What is event delegation?", opts: ["Handling events on parent for children", "Adding listener to every child", "Removing all events", "Using inline handlers"], ans: "Handling events on parent for children", expl: "Event delegation uses a parent listener to manage events for multiple child elements." },
{ num: 114, txt: "Events: Which event triggers when the mouse enters an element?", opts: ["mouseenter", "mouseover", "mouseout", "mousemove"], ans: "mouseenter", expl: "mouseenter triggers once when the mouse enters the element." },
{ num: 115, txt: "Events: Which event triggers when the mouse leaves an element?", opts: ["mouseleave", "mouseout", "hover", "mouseup"], ans: "mouseleave", expl: "mouseleave triggers once when the mouse leaves the element." },

{ num: 116, txt: "Logic: What operator checks strict equality?", opts: ["===", "==", "=", "!==" ], ans: "===", expl: "=== checks both value and type." },
{ num: 117, txt: "Logic: How do you combine conditions for AND?", opts: ["&&", "||", "!", "&"], ans: "&&", expl: "&& returns true if both operands are true." },
{ num: 118, txt: "Logic: How do you combine conditions for OR?", opts: ["||", "&&", "!", "|"], ans: "||", expl: "|| returns true if at least one operand is true." },
{ num: 119, txt: "Logic: How do you negate a boolean value?", opts: ["!", "~", "not", "neg"], ans: "!", expl: "! flips true to false and vice versa." },
{ num: 120, txt: "Logic: Which operator assigns value?", opts: ["=", "==", "===", "+="], ans: "=", expl: "= assigns a value to a variable." },

{ num: 121, txt: "Scopes: What is global scope?", opts: ["Accessible anywhere", "Accessible only in function", "Accessible only in block", "Accessible in module"], ans: "Accessible anywhere", expl: "Global variables are accessible throughout the program." },
{ num: 122, txt: "Scopes: What is function scope?", opts: ["Variables accessible only inside function", "Variables accessible globally", "Variables accessible in block", "Variables accessible in module"], ans: "Variables accessible only inside function", expl: "var variables are function-scoped." },
{ num: 123, txt: "Scopes: What is block scope?", opts: ["Variables accessible inside {...}", "Variables accessible globally", "Variables accessible in function only", "Variables accessible in object"], ans: "Variables accessible inside {...}", expl: "let and const are block scoped." },
{ num: 124, txt: "Scopes: How to avoid polluting global scope?", opts: ["Use closures or modules", "Use var everywhere", "Declare in window", "Use global constants"], ans: "Use closures or modules", expl: "Encapsulate variables inside functions or modules to avoid globals." },
{ num: 125, txt: "Scopes: Which keyword declares a constant?", opts: ["const", "let", "var", "constant"], ans: "const", expl: "const creates a read-only reference to a value." },

{ num: 126, txt: "Scopes: What happens when a local variable has same name as global?", opts: ["Local shadows global", "Global overrides local", "Error", "Both accessible"], ans: "Local shadows global", expl: "Local variables take precedence within their scope." },
{ num: 127, txt: "Scopes: How do closures affect scope?", opts: ["Keep access to outer variables", "Delete outer variables", "Ignore outer variables", "Copy values only"], ans: "Keep access to outer variables", expl: "Closures retain references to outer variables even after function returns." },
{ num: 128, txt: "Scopes: What is lexical scope?", opts: ["Scope determined by code position", "Scope determined at runtime", "Global only", "Function only"], ans: "Scope determined by code position", expl: "Lexical scope depends on where variables/functions are declared." },
{ num: 129, txt: "Scopes: Which keyword allows re-assignment?", opts: ["let", "const", "var", "static"], ans: "let", expl: "let allows reassignment while maintaining block scope." },
{ num: 130, txt: "Scopes: Which keyword is hoisted but undefined?", opts: ["var", "let", "const", "function"], ans: "var", expl: "var declarations are hoisted and initialized as undefined." },

{ num: 131, txt: "DOM: How do you change element attribute?", opts: ["element.setAttribute()", "element.attr()", "element.modify()", "element.change()"], ans: "element.setAttribute()", expl: "setAttribute sets a specified attribute to a value." },
{ num: 132, txt: "DOM: How to read element attribute?", opts: ["element.getAttribute()", "element.attr()", "element.value", "element.read()"], ans: "element.getAttribute()", expl: "getAttribute reads the value of a specified attribute." },
{ num: 133, txt: "Events: Which event triggers when a key is pressed?", opts: ["keydown", "keypress", "keyup", "input"], ans: "keydown", expl: "keydown fires when a key is pressed down." },
{ num: 134, txt: "Events: Which event triggers after a key is released?", opts: ["keyup", "keydown", "keypress", "input"], ans: "keyup", expl: "keyup fires when a key is released." },
{ num: 135, txt: "Logic: What is short-circuit evaluation?", opts: ["Logical operators stop if result known", "All conditions always evaluated", "Loops stop immediately", "Functions exit early"], ans: "Logical operators stop if result known", expl: "AND/OR operators stop evaluating once the result is determined." },

{ num: 136, txt: "Logic: What does NaN mean?", opts: ["Not a Number", "Null and Nothing", "Never a Number", "Number Error"], ans: "Not a Number", expl: "NaN represents a value that is not a legal number." },
{ num: 137, txt: "Logic: How to test for NaN?", opts: ["Number.isNaN()", "== NaN", "=== NaN", "typeof NaN"], ans: "Number.isNaN()", expl: "Number.isNaN() reliably checks if a value is NaN." },
{ num: 138, txt: "Logic: How to coerce a string to number?", opts: ["Number()", "String()", "parseStr()", "toInt()"], ans: "Number()", expl: "Number() converts a value to numeric type if possible." },
{ num: 139, txt: "Logic: Which value is falsy?", opts: ["0", "1", "'0'", "'false'"], ans: "0", expl: "Falsy values in JS include 0, '', null, undefined, NaN, false." },
{ num: 140, txt: "Logic: Which value is truthy?", opts: ["{}", "0", "''", "null"], ans: "{}", expl: "Non-empty objects are truthy." },

{ num: 141, txt: "Scopes: Which function creates closure?", opts: ["A function returning another function", "A function returning null", "An arrow function alone", "Global function"], ans: "A function returning another function", expl: "Returning a function creates a closure capturing outer scope." },
{ num: 142, txt: "Scopes: Can a closure access local variable after function ends?", opts: ["Yes", "No", "Only global", "Sometimes"], ans: "Yes", expl: "Closures retain access to outer variables even after the parent function completes." },
{ num: 143, txt: "Scopes: Which creates block scope?", opts: ["let or const", "var", "function", "global"], ans: "let or const", expl: "let and const create block scope." },
{ num: 144, txt: "DOM: How to insert HTML before element?", opts: ["element.insertAdjacentHTML('beforebegin', ...)", "appendChild()", "innerHTML", "prepend()"], ans: "element.insertAdjacentHTML('beforebegin', ...)", expl: "Insert HTML before an element using insertAdjacentHTML." },
{ num: 145, txt: "DOM: How to insert HTML inside element?", opts: ["element.insertAdjacentHTML('afterbegin', ...)", "appendChild()", "innerHTML", "prepend()"], ans: "element.insertAdjacentHTML('afterbegin', ...)", expl: "Insert HTML at the start of the element." },

{ num: 146, txt: "Events: Which event triggers on window resize?", opts: ["resize", "load", "scroll", "input"], ans: "resize", expl: "resize fires when window size changes." },
{ num: 147, txt: "Events: Which event triggers when a checkbox changes?", opts: ["change", "input", "click", "submit"], ans: "change", expl: "change fires when input value changes, including checkboxes." },
{ num: 148, txt: "Logic: What does typeof return for arrays?", opts: ["object", "array", "list", "undefined"], ans: "object", expl: "typeof returns 'object' for arrays." },
{ num: 149, txt: "Logic: How to check if value is array?", opts: ["Array.isArray()", "typeof", "instanceof Object", "isArray()"], ans: "Array.isArray()", expl: "Array.isArray() returns true for arrays." },
{ num: 150, txt: "Logic: What is short-circuit OR example?", opts: ["true || false returns true", "false || false returns true", "true || true returns false", "false || true returns false"], ans: "true || false returns true", expl: "OR operator returns first truthy value, stopping evaluation early." },
// Q151–Q200

{ num: 151, txt: "DOM: How to remove an element?", opts: ["element.remove()", "delete element", "element.delete()", "removeChild()"], ans: "element.remove()", expl: "remove() removes the element from the DOM directly." },
{ num: 152, txt: "DOM: How to clone an element?", opts: ["element.cloneNode(true)", "element.copy()", "clone(element)", "element.duplicate()"], ans: "element.cloneNode(true)", expl: "cloneNode(true) copies the element with all child nodes." },
{ num: 153, txt: "DOM: How to find parent element?", opts: ["element.parentElement", "element.parentNode", "element.closest()", "element.up()"], ans: "element.parentElement", expl: "parentElement returns the direct parent node." },
{ num: 154, txt: "DOM: How to find closest ancestor matching selector?", opts: ["element.closest()", "querySelector()", "parentElement", "matches()"], ans: "element.closest()", expl: "closest(selector) returns the nearest ancestor matching the selector." },
{ num: 155, txt: "DOM: How to check if element matches selector?", opts: ["element.matches()", "element.is()", "element.check()", "element.test()"], ans: "element.matches()", expl: "matches() tests if the element matches a CSS selector." },

{ num: 156, txt: "Events: How to listen for multiple events?", opts: ["Use multiple addEventListener calls", "Use event.multi()", "Use bind()", "Use global listener"], ans: "Use multiple addEventListener calls", expl: "Attach individual listeners for each event type." },
{ num: 157, txt: "Events: How to prevent event bubbling?", opts: ["event.stopPropagation()", "event.preventDefault()", "return false", "event.cancel()"], ans: "event.stopPropagation()", expl: "stopPropagation prevents event from reaching parent elements." },
{ num: 158, txt: "Events: How to handle asynchronous event?", opts: ["Use async function in listener", "Use setTimeout only", "Use synchronous code", "Events cannot be async"], ans: "Use async function in listener", expl: "Listeners can be async functions to handle async tasks." },
{ num: 159, txt: "Events: Which event triggers after form reset?", opts: ["reset", "submit", "input", "change"], ans: "reset", expl: "reset event fires when form is reset." },
{ num: 160, txt: "Events: How to delegate event for dynamic elements?", opts: ["Attach listener to parent", "Attach listener to child only", "Attach listener globally", "Attach listener in window"], ans: "Attach listener to parent", expl: "Parent delegation allows handling future dynamic elements." },

{ num: 161, txt: "Logic: What does === compare?", opts: ["Value and type", "Value only", "Type only", "Reference only"], ans: "Value and type", expl: "Strict equality === checks both value and type." },
{ num: 162, txt: "Logic: What does !== compare?", opts: ["Value and type inequality", "Value only", "Type only", "Reference only"], ans: "Value and type inequality", expl: "!== checks both value and type for inequality." },
{ num: 163, txt: "Logic: How to coerce boolean from value?", opts: ["!!value", "Boolean(value)", "value?", "Both !!value and Boolean(value)"], ans: "Both !!value and Boolean(value)", expl: "Double negation or Boolean() converts value to boolean." },
{ num: 164, txt: "Logic: What does '&&' return?", opts: ["First falsy or last value", "Always true", "Always false", "Undefined"], ans: "First falsy or last value", expl: "AND returns first falsy or last operand if all truthy." },
{ num: 165, txt: "Logic: What does '||' return?", opts: ["First truthy or last value", "Always true", "Always false", "Undefined"], ans: "First truthy or last value", expl: "OR returns first truthy value or last if all falsy." },

{ num: 166, txt: "Scopes: Which scope allows variables to persist between function calls?", opts: ["Closure", "Block scope", "Global scope", "Function scope only"], ans: "Closure", expl: "Closures retain access to outer variables for later calls." },
{ num: 167, txt: "Scopes: What is temporal dead zone?", opts: ["Accessing let/const before declaration", "Using var before declaration", "Accessing global before function", "Undefined variable"], ans: "Accessing let/const before declaration", expl: "TDZ occurs when let/const variables are accessed before initialization." },
{ num: 168, txt: "Scopes: Which scope is accessible in all modules?", opts: ["Global scope", "Function scope", "Block scope", "Module scope only"], ans: "Global scope", expl: "Global scope variables are accessible across modules if exported properly." },
{ num: 169, txt: "Scopes: How to create private variable?", opts: ["Closure or module", "var in global", "let in global", "const in global"], ans: "Closure or module", expl: "Encapsulate variable inside function/module to make it private." },
{ num: 170, txt: "Scopes: Which keyword avoids redeclaration?", opts: ["let/const", "var", "global", "function"], ans: "let/const", expl: "let and const prevent redeclaration in the same scope." },

{ num: 171, txt: "DOM: How to scroll to element?", opts: ["element.scrollIntoView()", "window.scrollTo()", "element.scroll()", "element.goto()"], ans: "element.scrollIntoView()", expl: "scrollIntoView scrolls page to make element visible." },
{ num: 172, txt: "DOM: How to get element dimensions?", opts: ["element.getBoundingClientRect()", "element.size()", "element.dimensions", "window.getRect()"], ans: "element.getBoundingClientRect()", expl: "Returns size and position of element relative to viewport." },
{ num: 173, txt: "DOM: How to toggle class?", opts: ["element.classList.toggle()", "element.toggleClass()", "element.classToggle()", "element.switchClass()"], ans: "element.classList.toggle()", expl: "toggle() adds class if missing or removes if present." },
{ num: 174, txt: "DOM: How to check class presence?", opts: ["element.classList.contains()", "element.hasClass()", "element.classCheck()", "element.isClass()"], ans: "element.classList.contains()", expl: "contains() checks if element has a specific class." },
{ num: 175, txt: "DOM: How to add multiple classes?", opts: ["element.classList.add('a','b')", "element.addClass()", "element.classAdd()", "element.classes.add()"], ans: "element.classList.add('a','b')", expl: "classList.add can take multiple class names to add at once." },

{ num: 176, txt: "Events: Which event triggers when window loads?", opts: ["load", "DOMContentLoaded", "ready", "init"], ans: "load", expl: "load fires after all resources including images and scripts are loaded." },
{ num: 177, txt: "Events: Which event triggers after DOM ready?", opts: ["DOMContentLoaded", "load", "ready", "init"], ans: "DOMContentLoaded", expl: "DOMContentLoaded fires when HTML is parsed and DOM is ready." },
{ num: 178, txt: "Events: How to remove event listener?", opts: ["element.removeEventListener()", "element.off()", "element.unbind()", "element.deleteEvent()"], ans: "element.removeEventListener()", expl: "removeEventListener removes a previously attached listener." },
{ num: 179, txt: "Events: How to detect key 'Enter' pressed?", opts: ["event.key === 'Enter'", "event.code === 'Enter'", "event.which === 13", "All of the above"], ans: "All of the above", expl: "All methods can detect the Enter key depending on context." },
{ num: 180, txt: "Events: Which event triggers on input focus?", opts: ["focus", "blur", "click", "change"], ans: "focus", expl: "focus fires when an element gains focus." },

{ num: 181, txt: "Logic: What is truthy value?", opts: ["Non-empty string", "0", "''", "null"], ans: "Non-empty string", expl: "Non-empty strings, objects, arrays are truthy in JavaScript." },
{ num: 182, txt: "Logic: What is falsy value?", opts: ["0", "1", "true", "{}"], ans: "0", expl: "0, '', null, undefined, false, NaN are falsy." },
{ num: 183, txt: "Logic: How to safely access nested property?", opts: ["optional chaining ?. ", "dot notation", "bracket notation", "eval()"], ans: "optional chaining ?. ", expl: "?. allows safe property access even if intermediate is undefined." },
{ num: 184, txt: "Logic: Which operator has highest precedence?", opts: ["()", "&&", "||", "+"], ans: "()", expl: "Parentheses have the highest precedence to control evaluation order." },
{ num: 185, txt: "Logic: How to compare objects for equality?", opts: ["JSON.stringify(a) === JSON.stringify(b)", "===", "==", "Object.equals()"], ans: "JSON.stringify(a) === JSON.stringify(b)", expl: "Objects must be serialized for structural equality check." },

{ num: 186, txt: "Scopes: Which scope stores function arguments?", opts: ["Function scope", "Block scope", "Global scope", "Closure"], ans: "Function scope", expl: "Function scope includes local variables and arguments." },
{ num: 187, txt: "Scopes: Which keyword hoists function declarations?", opts: ["function", "var", "let", "const"], ans: "function", expl: "Function declarations are hoisted with full definition." },
{ num: 188, txt: "Scopes: Which keyword hoists variables undefined?", opts: ["var", "let", "const", "function"], ans: "var", expl: "var is hoisted and initialized as undefined." },
{ num: 189, txt: "Scopes: How to protect variable from outside?", opts: ["Encapsulate in function", "Declare globally", "Use var", "Use let"], ans: "Encapsulate in function", expl: "Encapsulation prevents external access." },
{ num: 190, txt: "Scopes: How to share variables safely between modules?", opts: ["Export/import", "Global var", "window.var", "Use let"], ans: "Export/import", expl: "Use ES modules to share variables safely." },

{ num: 191, txt: "DOM: How to read checkbox value?", opts: ["checkbox.checked", "checkbox.value", "checkbox.selected", "checkbox.state"], ans: "checkbox.checked", expl: "checked returns true if checkbox is selected." },
{ num: 192, txt: "DOM: How to get input value?", opts: ["input.value", "input.text", "input.innerHTML", "input.content"], ans: "input.value", expl: "value property holds input content." },
{ num: 193, txt: "DOM: How to create new element?", opts: ["document.createElement()", "new Element()", "Element.create()", "document.newElement()"], ans: "document.createElement()", expl: "createElement creates a new DOM element." },
{ num: 194, txt: "DOM: How to append element to parent?", opts: ["parent.appendChild(child)", "parent.add(child)", "parent.insert(child)", "parent.append(child)"], ans: "parent.appendChild(child)", expl: "appendChild inserts child node at the end of parent." },
{ num: 195, txt: "DOM: How to replace child element?", opts: ["parent.replaceChild(newChild, oldChild)", "parent.swap()", "parent.replace()", "parent.updateChild()"], ans: "parent.replaceChild(newChild, oldChild)", expl: "replaceChild swaps old child with new one." },

{ num: 196, txt: "Events: How to detect mouse click?", opts: ["click", "mousedown", "mouseup", "All of the above"], ans: "All of the above", expl: "All listed events detect different phases of mouse click." },
{ num: 197, txt: "Events: How to detect double click?", opts: ["dblclick", "click", "mousedown", "mouseup"], ans: "dblclick", expl: "dblclick fires when an element is double-clicked." },
{ num: 198, txt: "Events: Which event triggers when element loses focus?", opts: ["blur", "focusout", "change", "focus"], ans: "blur", expl: "blur fires when an element loses focus." },
{ num: 199, txt: "Events: How to detect scroll event?", opts: ["scroll", "resize", "mousemove", "wheel"], ans: "scroll", expl: "scroll event fires when an element or window is scrolled." },
{ num: 200, txt: "Events: How to prevent form submission?", opts: ["event.preventDefault()", "return false", "event.stopPropagation()", "Both event.preventDefault() and return false"], ans: "Both event.preventDefault() and return false", expl: "Prevent submission using preventDefault or returning false in handler." },

// Q201–Q250

{ num: 201, txt: "Logic: How to convert string to number?", opts: ["Number(str)", "parseInt(str)", "parseFloat(str)", "All of the above"], ans: "All of the above", expl: "Number(), parseInt(), and parseFloat() can all convert strings to numbers depending on context." },
{ num: 202, txt: "Logic: How to check if value is NaN?", opts: ["isNaN(value)", "Number.isNaN(value)", "value === NaN", "Both isNaN() and Number.isNaN()"], ans: "Both isNaN() and Number.isNaN()", expl: "isNaN() and Number.isNaN() check for NaN, but Number.isNaN() is more strict." },
{ num: 203, txt: "Logic: How to check array type?", opts: ["Array.isArray(arr)", "typeof arr === 'array'", "arr.constructor === Array", "Both Array.isArray() and arr.constructor"], ans: "Both Array.isArray() and arr.constructor", expl: "Array.isArray() is preferred; constructor check also works." },
{ num: 204, txt: "Logic: How to shallow copy array?", opts: ["arr.slice()", "[...arr]", "Array.from(arr)", "All of the above"], ans: "All of the above", expl: "slice(), spread, and Array.from create shallow copies of arrays." },
{ num: 205, txt: "Logic: How to deep copy object?", opts: ["JSON.parse(JSON.stringify(obj))", "structuredClone(obj)", "Lodash cloneDeep", "All of the above"], ans: "All of the above", expl: "Multiple methods exist for deep copying objects; structuredClone is modern." },

{ num: 206, txt: "Scopes: Which scope captures loop variable in closure correctly?", opts: ["let in loop", "var in loop", "const in loop", "function in loop"], ans: "let in loop", expl: "let creates block-scoped variables, preserving value for each iteration." },
{ num: 207, txt: "Scopes: How to avoid polluting global scope?", opts: ["Use modules or IIFE", "Use var globally", "Use const globally", "All globals are fine"], ans: "Use modules or IIFE", expl: "Modules and IIFE encapsulate variables and prevent global pollution." },
{ num: 208, txt: "Scopes: How to capture function arguments in ES6?", opts: ["Rest parameter ...args", "arguments object", "Both", "Neither"], ans: "Both", expl: "Rest parameters and arguments object allow capturing function arguments." },
{ num: 209, txt: "Scopes: How to make read-only variable?", opts: ["const", "let", "var", "Object.freeze()"], ans: "const", expl: "const prevents reassignment of variable binding; Object.freeze() freezes objects." },
{ num: 210, txt: "Scopes: What is difference between var and let?", opts: ["var is function-scoped, let is block-scoped", "var is block-scoped, let is function-scoped", "Both same", "None"], ans: "var is function-scoped, let is block-scoped", expl: "var is function-scoped and hoisted, let is block-scoped." },

{ num: 211, txt: "DOM: How to set inner text?", opts: ["element.textContent = '...'","element.innerHTML = '...'","element.value = '...'","Both textContent and innerHTML"], ans: "element.textContent = '...'", expl: "textContent sets plain text without parsing HTML." },
{ num: 212, txt: "DOM: How to set inner HTML?", opts: ["element.innerHTML = '...'","element.textContent = '...'","element.value = '...'","element.setHTML()"], ans: "element.innerHTML = '...'", expl: "innerHTML sets HTML content of element." },
{ num: 213, txt: "DOM: How to find element by class?", opts: ["document.getElementsByClassName()", "document.querySelectorAll()", "Both", "None"], ans: "Both", expl: "Both methods allow selecting elements by class name." },
{ num: 214, txt: "DOM: How to find element by ID?", opts: ["document.getElementById()", "document.querySelector()", "Both", "None"], ans: "Both", expl: "Both getElementById and querySelector('#id') work for ID selection." },
{ num: 215, txt: "DOM: How to remove attribute?", opts: ["element.removeAttribute('attr')","element.attr = null","element.delete('attr')","element.setAttribute('attr', '')"], ans: "element.removeAttribute('attr')", expl: "removeAttribute deletes the attribute from element." },

{ num: 216, txt: "Events: How to listen to input change?", opts: ["change", "input", "keyup", "keydown"], ans: "input", expl: "input event fires on every change to input field." },
{ num: 217, txt: "Events: How to detect checkbox toggle?", opts: ["change", "input", "click", "All of the above"], ans: "All of the above", expl: "Checkbox toggle can be detected using change, input, or click events." },
{ num: 218, txt: "Events: How to prevent default link behavior?", opts: ["event.preventDefault()", "return false", "Both", "None"], ans: "Both", expl: "Both preventDefault() and return false stop link navigation." },
{ num: 219, txt: "Events: How to detect window resize?", opts: ["resize", "scroll", "load", "DOMReady"], ans: "resize", expl: "resize event fires when window is resized." },
{ num: 220, txt: "Events: How to detect mouseover?", opts: ["mouseover", "mouseenter", "mousemove", "All of the above"], ans: "All of the above", expl: "Different events detect mouse entering element in different ways." },

{ num: 221, txt: "Logic: How to merge arrays?", opts: ["arr.concat()", "[...arr1, ...arr2]", "Both", "Array.merge()"], ans: "Both", expl: "concat() and spread operator merge arrays." },
{ num: 222, txt: "Logic: How to remove duplicates?", opts: ["new Set(arr)", "arr.filter()", "Both", "Array.unique()"], ans: "Both", expl: "Set and filter methods allow removing duplicates." },
{ num: 223, txt: "Logic: How to sort array?", opts: ["arr.sort()", "arr.sorted()", "Array.sort(arr)", "Both 1 and 3"], ans: "arr.sort()", expl: "sort() sorts array in-place." },
{ num: 224, txt: "Logic: How to reverse array?", opts: ["arr.reverse()", "arr.revert()", "arr.sort()", "Both 1 and 3"], ans: "arr.reverse()", expl: "reverse() reverses elements in array." },
{ num: 225, txt: "Logic: How to check string includes?", opts: ["str.includes('x')","str.indexOf('x') !== -1","Both","str.contains('x')"], ans: "Both", expl: "includes() or indexOf() check for substring presence." },

{ num: 226, txt: "Scopes: How to access global object?", opts: ["window (browser) or global (node)","this","globalThis","All of the above"], ans: "All of the above", expl: "Global object can be accessed via window, global, or globalThis depending on environment." },
{ num: 227, txt: "Scopes: Which keyword defines block-scoped constant?", opts: ["const","let","var","function"], ans: "const", expl: "const defines block-scoped constant variables." },
{ num: 228, txt: "Scopes: How to shadow variable?", opts: ["Declare same name in inner scope","var globally","Use let globally","Cannot shadow"], ans: "Declare same name in inner scope", expl: "Inner scope variables can shadow outer scope variables." },
{ num: 229, txt: "Scopes: How to prevent reassignment in object?", opts: ["Object.freeze(obj)","const obj","Both","None"], ans: "Both", expl: "Object.freeze prevents property changes; const prevents variable reassignment." },
{ num: 230, txt: "Scopes: How to define default parameter?", opts: ["function(a=1)","function(a){a=1}","Both","None"], ans: "function(a=1)", expl: "Default parameters can be defined using = in function signature." },

{ num: 231, txt: "DOM: How to check input validity?", opts: ["input.checkValidity()","input.valid","input.isValid()","All of the above"], ans: "input.checkValidity()", expl: "checkValidity() checks HTML5 validation of input element." },
{ num: 232, txt: "DOM: How to focus input programmatically?", opts: ["input.focus()","input.setFocus()","input.select()","All of the above"], ans: "input.focus()", expl: "focus() programmatically focuses an input element." },
{ num: 233, txt: "DOM: How to select multiple elements?", opts: ["document.querySelectorAll()","document.getElementsByTagName()","document.getElementsByClassName()","All of the above"], ans: "All of the above", expl: "All methods return collections of multiple elements." },
{ num: 234, txt: "DOM: How to toggle attribute?", opts: ["element.toggleAttribute('attr')","element.setAttribute()","element.removeAttribute()","All of the above"], ans: "element.toggleAttribute('attr')", expl: "toggleAttribute adds/removes attribute based on existence." },
{ num: 235, txt: "DOM: How to get computed style?", opts: ["window.getComputedStyle(element)","element.style","Both","None"], ans: "window.getComputedStyle(element)", expl: "getComputedStyle returns actual applied styles." },

{ num: 236, txt: "Events: How to detect drag?", opts: ["drag","dragstart","dragend","All of the above"], ans: "All of the above", expl: "Drag events provide start, ongoing, and end of drag." },
{ num: 237, txt: "Events: How to detect touch?", opts: ["touchstart","touchmove","touchend","All of the above"], ans: "All of the above", expl: "Touch events capture finger interactions on touch devices." },
{ num: 238, txt: "Events: How to debounce event?", opts: ["Use setTimeout inside handler","Use Lodash debounce","Both","Cannot debounce"], ans: "Both", expl: "Debouncing can be done manually or with utility libraries." },
{ num: 239, txt: "Events: How to throttle event?", opts: ["Use setTimeout with interval","Use Lodash throttle","Both","Cannot throttle"], ans: "Both", expl: "Throttling limits how often an event handler executes." },
{ num: 240, txt: "Events: How to detect keypress?", opts: ["keypress","keydown","keyup","All of the above"], ans: "All of the above", expl: "Different key events detect keys at different stages." },

{ num: 241, txt: "Logic: How to flatten array?", opts: ["arr.flat()","reduce()","Both","Array.flatten()"], ans: "Both", expl: "flat() and reduce() techniques can flatten arrays." },
{ num: 242, txt: "Logic: How to find max value?", opts: ["Math.max(...arr)","reduce()","Both","arr.max()"], ans: "Both", expl: "Spread with Math.max or reduce can find max in array." },
{ num: 243, txt: "Logic: How to find min value?", opts: ["Math.min(...arr)","reduce()","Both","arr.min()"], ans: "Both", expl: "Spread with Math.min or reduce can find min in array." },
{ num: 244, txt: "Logic: How to generate random number?", opts: ["Math.random()","crypto.getRandomValues()","Both","Random()"], ans: "Both", expl: "Math.random() and crypto.getRandomValues() generate random numbers." },
{ num: 245, txt: "Logic: How to check even number?", opts: ["num % 2 === 0","num & 1 === 0","Both","num.isEven()"], ans: "Both", expl: "Modulo and bitwise AND check even numbers." },

{ num: 246, txt: "Scopes: How to create IIFE?", opts: ["(function(){})()","(()=>{})()","Both","function(){ }"], ans: "Both", expl: "Immediately Invoked Function Expressions run as soon as defined." },
{ num: 247, txt: "Scopes: How to create module?", opts: ["export/import","IIFE pattern","Both","Cannot create"], ans: "Both", expl: "Modules can be created using ES modules or IIFE pattern for older JS." },
{ num: 248, txt: "Scopes: How to make private property?", opts: ["Closure","WeakMap","Both","None"], ans: "Both", expl: "Private properties can be implemented using closures or WeakMap." },
{ num: 249, txt: "Scopes: How to dynamically import module?", opts: ["import('module.js')","require()","Both","None"], ans: "import('module.js')", expl: "Dynamic import allows loading modules asynchronously." },
{ num: 250, txt: "Scopes: How to prevent global variable pollution?", opts: ["Use let/const","Use modules","Both","Declare var globally"], ans: "Both", expl: "Modules and block-scoped variables prevent global pollution." },

// Q251–Q300

{ num: 251, txt: "DOM: How to create element?", opts: ["document.createElement('div')","document.newElement('div')","Both","None"], ans: "document.createElement('div')", expl: "createElement creates a new HTML element." },
{ num: 252, txt: "DOM: How to append child?", opts: ["parent.appendChild(child)","parent.append(child)","Both","parent.addChild(child)"], ans: "Both", expl: "appendChild and append both add a child element; append is modern and accepts multiple nodes." },
{ num: 253, txt: "DOM: How to remove element?", opts: ["element.remove()","parent.removeChild(element)","Both","element.delete()"], ans: "Both", expl: "remove() is modern; removeChild() is older but still works." },
{ num: 254, txt: "DOM: How to clone element?", opts: ["element.cloneNode()","element.copyNode()","Both","None"], ans: "element.cloneNode()", expl: "cloneNode copies the element; deep parameter copies child nodes." },
{ num: 255, txt: "DOM: How to replace element?", opts: ["parent.replaceChild(newEl, oldEl)","element.replaceWith(newEl)","Both","None"], ans: "Both", expl: "replaceChild is older method; replaceWith is modern." },

{ num: 256, txt: "Events: How to listen once?", opts: ["addEventListener('click', fn, { once:true })","Manually remove listener","Both","Cannot listen once"], ans: "Both", expl: "addEventListener with once:true automatically removes listener after first call." },
{ num: 257, txt: "Events: How to stop propagation?", opts: ["event.stopPropagation()","event.stopImmediatePropagation()","Both","None"], ans: "Both", expl: "stopPropagation stops bubbling; stopImmediatePropagation stops all listeners on element." },
{ num: 258, txt: "Events: How to delegate event?", opts: ["Use parent listener and check target","Attach listener to every child","Both","None"], ans: "Use parent listener and check target", expl: "Event delegation allows handling child events via parent." },
{ num: 259, txt: "Events: How to detect double click?", opts: ["dblclick","click with timer","Both","None"], ans: "Both", expl: "dblclick event or manual timer on clicks can detect double clicks." },
{ num: 260, txt: "Events: How to cancel event?", opts: ["event.preventDefault()","return false","Both","Cannot cancel"], ans: "Both", expl: "Both preventDefault and return false can cancel default browser actions." },

{ num: 261, txt: "Logic: How to check array includes value?", opts: ["arr.includes(val)","arr.indexOf(val) !== -1","Both","Array.contains()"], ans: "Both", expl: "includes() or indexOf() detect presence of a value in array." },
{ num: 262, txt: "Logic: How to find index of value?", opts: ["arr.indexOf(val)","arr.findIndex(fn)","Both","None"], ans: "Both", expl: "indexOf finds first matching value; findIndex allows custom condition." },
{ num: 263, txt: "Logic: How to check string starts with?", opts: ["str.startsWith('x')","str.indexOf('x') === 0","Both","str.contains('x')"], ans: "Both", expl: "startsWith or indexOf === 0 checks prefix." },
{ num: 264, txt: "Logic: How to check string ends with?", opts: ["str.endsWith('x')","str.slice(-x.length) === 'x'","Both","str.contains('x')"], ans: "Both", expl: "endsWith or slice method can check suffix." },
{ num: 265, txt: "Logic: How to capitalize first letter?", opts: ["str.charAt(0).toUpperCase() + str.slice(1)","str[0].toUpperCase() + str.substring(1)","Both","str.capitalize()"], ans: "Both", expl: "Both methods capitalize the first character of string." },

{ num: 266, txt: "Scopes: How to use closures?", opts: ["Return inner function accessing outer variable","Assign variable globally","Both","Cannot use closures"], ans: "Return inner function accessing outer variable", expl: "Closures allow inner functions to access outer variables." },
{ num: 267, txt: "Scopes: How to maintain private variable?", opts: ["Closure","WeakMap","Both","None"], ans: "Both", expl: "Closures and WeakMap allow private data storage." },
{ num: 268, txt: "Scopes: How to dynamically evaluate code?", opts: ["eval('code')","Function('code')()","Both","None"], ans: "Both", expl: "eval and Function constructor evaluate strings as code." },
{ num: 269, txt: "Scopes: How to check variable type?", opts: ["typeof var","instanceof Object","Both","None"], ans: "Both", expl: "typeof checks primitive type; instanceof checks object type." },
{ num: 270, txt: "Scopes: How to detect undefined variable?", opts: ["var === undefined","typeof var === 'undefined'","Both","var.isUndefined()"], ans: "Both", expl: "typeof var === 'undefined' safely detects undeclared variables." },

{ num: 271, txt: "DOM: How to set style?", opts: ["element.style.color = 'red'","element.setAttribute('style','color:red')","Both","None"], ans: "Both", expl: "Inline style can be set via style property or attribute." },
{ num: 272, txt: "DOM: How to get attribute?", opts: ["element.getAttribute('attr')","element.attr","Both","None"], ans: "element.getAttribute('attr')", expl: "getAttribute retrieves attribute value from element." },
{ num: 273, txt: "DOM: How to toggle class?", opts: ["element.classList.toggle('class')","element.className = 'class'","Both","None"], ans: "element.classList.toggle('class')", expl: "classList.toggle adds/removes class efficiently." },
{ num: 274, txt: "DOM: How to check class exists?", opts: ["element.classList.contains('class')","element.className.includes('class')","Both","None"], ans: "Both", expl: "Both methods check if element has class." },
{ num: 275, txt: "DOM: How to get parent element?", opts: ["element.parentElement","element.parentNode","Both","element.getParent()"], ans: "Both", expl: "parentElement and parentNode return parent node; parentElement is standard." },

{ num: 276, txt: "Events: How to detect right click?", opts: ["contextmenu","mousedown + button check","Both","click"], ans: "Both", expl: "contextmenu event or button check detect right-click." },
{ num: 277, txt: "Events: How to listen multiple events?", opts: ["addEventListener multiple times","Use array loop","Both","Cannot"], ans: "Both", expl: "Multiple events can be attached individually or via loop." },
{ num: 278, txt: "Events: How to remove listener?", opts: ["removeEventListener","element.onclick = null","Both","None"], ans: "Both", expl: "Listener can be removed via removeEventListener or null assignment." },
{ num: 279, txt: "Events: How to trigger event manually?", opts: ["dispatchEvent(new Event('type'))","element.click()","Both","Cannot"], ans: "Both", expl: "Events can be triggered programmatically using dispatchEvent or click." },
{ num: 280, txt: "Events: How to detect form submit?", opts: ["submit event","onsubmit","Both","None"], ans: "Both", expl: "submit event triggers when form is submitted, both inline and addEventListener work." },

{ num: 281, txt: "Logic: How to count occurrences in array?", opts: ["reduce()","for loop with object","Both","Array.count()"], ans: "Both", expl: "reduce or object accumulation counts array elements." },
{ num: 282, txt: "Logic: How to sum array values?", opts: ["reduce()","for loop sum","Both","Array.sum()"], ans: "Both", expl: "reduce or loop can sum array elements." },
{ num: 283, txt: "Logic: How to get unique values?", opts: ["new Set(arr)","filter with indexOf","Both","arr.unique()"], ans: "Both", expl: "Set or filter removes duplicates." },
{ num: 284, txt: "Logic: How to merge objects?", opts: ["Object.assign()","Spread {...obj1,...obj2}","Both","None"], ans: "Both", expl: "Both Object.assign and spread merge objects." },
{ num: 285, txt: "Logic: How to deep clone object?", opts: ["structuredClone()","JSON.parse(JSON.stringify())","Both","None"], ans: "Both", expl: "Both methods can deep clone objects." },

{ num: 286, txt: "Scopes: How to define private method?", opts: ["Using #privateMethod","Closure inside function","Both","None"], ans: "Both", expl: "Private methods can be defined with # prefix or closures." },
{ num: 287, txt: "Scopes: How to create module pattern?", opts: ["IIFE returning object","ES Module export/import","Both","None"], ans: "Both", expl: "Module pattern can use IIFE or ES Modules." },
{ num: 288, txt: "Scopes: How to detect variable hoisting?", opts: ["console.log before declaration","Try access","Both","Cannot detect"], ans: "Both", expl: "var hoists, let/const do not; can test with console.log." },
{ num: 289, txt: "Scopes: How to prevent reassignment?", opts: ["const","Object.freeze()","Both","None"], ans: "Both", expl: "const prevents variable reassignment; freeze prevents object property change." },
{ num: 290, txt: "Scopes: How to destructure array?", opts: ["const [a,b]=arr","var [a,b]=arr","Both","None"], ans: "Both", expl: "Destructuring extracts elements from array into variables." },

{ num: 291, txt: "DOM: How to get element dimensions?", opts: ["element.offsetWidth","element.getBoundingClientRect()","Both","None"], ans: "Both", expl: "offsetWidth gives width; getBoundingClientRect gives full box info." },
{ num: 292, txt: "DOM: How to scroll element into view?", opts: ["element.scrollIntoView()","window.scrollTo()","Both","None"], ans: "Both", expl: "scrollIntoView scrolls element; scrollTo scrolls window." },
{ num: 293, txt: "DOM: How to query child element?", opts: ["element.querySelector()","element.querySelectorAll()","Both","None"], ans: "Both", expl: "querySelector returns first child; querySelectorAll returns all matching children." },
{ num: 294, txt: "DOM: How to check if element is hidden?", opts: ["element.style.display === 'none'","getComputedStyle(element).display === 'none'","Both","None"], ans: "Both", expl: "Both methods detect if element is visually hidden." },
{ num: 295, txt: "DOM: How to insert HTML before element?", opts: ["element.insertAdjacentHTML('beforebegin',html)","parent.insertBefore(newEl, element)","Both","None"], ans: "Both", expl: "Both methods insert HTML before target element." },

{ num: 296, txt: "Events: How to listen capture phase?", opts: ["addEventListener with {capture:true}","Cannot listen capture","Both","None"], ans: "addEventListener with {capture:true}", expl: "Setting capture:true listens during capture phase." },
{ num: 297, txt: "Events: How to prevent multiple triggers?", opts: ["debounce","throttle","Both","Cannot"], ans: "Both", expl: "Debounce and throttle control event frequency." },
{ num: 298, txt: "Events: How to detect key combination?", opts: ["keydown with event.ctrlKey","keyup with event.shiftKey","Both","Cannot detect"], ans: "Both", expl: "Checking event modifier keys detects key combos." },
{ num: 299, txt: "Events: How to detect form input change?", opts: ["input","change","Both","None"], ans: "Both", expl: "input fires on every change; change fires on blur or commit." },
{ num: 300, txt: "Events: How to delegate multiple child events?", opts: ["Use parent listener and check event.target","Attach listener to all children","Both","None"], ans: "Use parent listener and check event.target", expl: "Event delegation efficiently handles multiple child events." },

// Q301–Q315

{ num: 301, txt: "Logic: How to flatten nested array?", opts: ["arr.flat()","reduce + concat","Both","Array.flatten()"], ans: "Both", expl: "flat() flattens array; reduce + concat is older method." },
{ num: 302, txt: "Logic: How to find max value?", opts: ["Math.max(...arr)","reduce comparison","Both","arr.max()"], ans: "Both", expl: "Math.max with spread or reduce finds maximum value." },
{ num: 303, txt: "Logic: How to find min value?", opts: ["Math.min(...arr)","reduce comparison","Both","arr.min()"], ans: "Both", expl: "Math.min with spread or reduce finds minimum value." },
{ num: 304, txt: "Logic: How to shuffle array?", opts: ["Fisher-Yates algorithm","sort(() => Math.random()-0.5)","Both","None"], ans: "Both", expl: "Fisher-Yates is standard; sort with random is simpler but less uniform." },
{ num: 305, txt: "Logic: How to check palindrome?", opts: ["Reverse string compare","Two-pointer compare","Both","Cannot check"], ans: "Both", expl: "Both methods validate palindrome efficiently." },

{ num: 306, txt: "Async: How to fetch data?", opts: ["fetch()","XMLHttpRequest","Both","None"], ans: "Both", expl: "fetch is modern API; XMLHttpRequest is older method." },
{ num: 307, txt: "Async: How to handle promise?", opts: ["then/catch","async/await","Both","Cannot handle"], ans: "Both", expl: "Promises can be handled with then/catch or async/await." },
{ num: 308, txt: "Async: How to run multiple promises?", opts: ["Promise.all()","Promise.allSettled()","Both","Cannot"], ans: "Both", expl: "Both allow multiple promises to run concurrently with different behavior." },
{ num: 309, txt: "Async: How to cancel promise?", opts: ["AbortController","Cannot cancel","Both","Use setTimeout"], ans: "AbortController", expl: "AbortController allows aborting fetch or async operations." },
{ num: 310, txt: "Async: How to handle errors?", opts: ["try/catch with async/await","catch() with promise","Both","None"], ans: "Both", expl: "Errors can be caught with catch() or try/catch in async functions." },

{ num: 311, txt: "Engine: How to optimize loops?", opts: ["Use for-of instead of forEach","Cache length in for loop","Both","None"], ans: "Both", expl: "Caching length and using modern loops improves performance." },
{ num: 312, txt: "Engine: How to avoid memory leaks?", opts: ["Remove unused listeners","Nullify unused references","Both","Cannot avoid"], ans: "Both", expl: "Removing references and listeners prevents memory leaks." },
{ num: 313, txt: "Engine: How to profile code?", opts: ["Browser DevTools Profiler","console.time()/console.timeEnd()","Both","None"], ans: "Both", expl: "Profiler or console timers help identify performance bottlenecks." },
{ num: 314, txt: "Engine: How to optimize recursion?", opts: ["Tail recursion","Memoization","Both","Cannot optimize"], ans: "Both", expl: "Tail recursion and memoization reduce stack usage and repeated computation." },
{ num: 315, txt: "Engine: How to reduce GC pressure?", opts: ["Reuse objects","Avoid unnecessary allocations","Both","Cannot reduce"], ans: "Both", expl: "Reusing objects and minimizing allocations reduces garbage collection overhead." }

];

// ============================================
// STATE
// ============================================

const stats = { correct: 0, wrong: 0, streak: 0 }
let activeQuizIdx = 0
let selectedOpt = null
let quizState = "idle"
let currentActiveView = "theory"

// ============================================
// VIEW MANAGEMENT
// ============================================

function showView(view) {
  currentActiveView = view
  document.querySelectorAll(".view-section").forEach((el) => el.classList.add("hidden"))
  document.querySelectorAll(".nav-tab").forEach((el) => el.classList.remove("active"))

  const viewEl = document.getElementById(`view-${view}`)
  if (viewEl) viewEl.classList.remove("hidden")

  document.getElementById(`tab-${view}`).classList.add("active")

  if (view === "theory") filterTheory()
  if (view === "lab") initLab()
  if (view === "quiz") initQuizHome()
}

// ============================================
// THEORY SECTION
// ============================================

function filterTheory() {
  const query = document.getElementById("theory-search").value.toLowerCase()
  const grid = document.getElementById("theory-grid")
  grid.innerHTML = ""

  const colors = ["#6366f1", "#10b981", "#f59e0b", "#f43f5e", "#8b5cf6", "#22d3ee", "#facc15", "#ec4899"]

  theoryData
    .filter((t) => t.title.toLowerCase().includes(query) || t.body.toLowerCase().includes(query))
    .forEach((t, idx) => {
      const card = document.createElement("div")
      card.className = "theory-card"
      card.style.borderLeftColor = colors[idx % colors.length]
      card.innerHTML = `<h4>${t.title}</h4><p>${t.body}</p>`
      grid.appendChild(card)
    })
}

// ============================================
// LAB SECTION
// ============================================

function initLab() {
  const list = document.getElementById("lab-snippets")
  list.innerHTML = ""

  labSnippets.forEach((snippet) => {
    const btn = document.createElement("button")
    btn.textContent = snippet.name
    btn.onclick = () => {
      document.getElementById("code-input").value = snippet.code
    }
    list.appendChild(btn)
  })

  updateLineNumbers()
}

function updateLineNumbers() {
  const textarea = document.getElementById("code-input")
  const lines = textarea.value.split("\n").length
  const lineNumbers = document.getElementById("line-numbers")
  lineNumbers.textContent = Array.from({ length: Math.max(lines, 10) }, (_, i) => i + 1).join("\n")
}

function runCode() {
  const code = document.getElementById("code-input").value
  const output = document.getElementById("console-output")
  output.textContent = ""

  const originalLog = console.log
  console.log = (...args) => {
    output.textContent += args.map((a) => (typeof a === "object" ? JSON.stringify(a) : a)).join(" ") + "\n"
  }

  try {
    eval(code)
    const hist = document.getElementById("run-history")
    const p = document.createElement("p")
    p.textContent = `Ran at ${new Date().toLocaleTimeString()}`
    hist.innerHTML = ""
    hist.prepend(p)
  } catch (err) {
    output.textContent = `Error: ${err.message}`
  } finally {
    console.log = originalLog
  }
}

function clearConsole() {
  document.getElementById("console-output").textContent = "Ready to execute..."
}

function copyCurrentCode() {
  const area = document.getElementById("code-input")
  area.select()
  document.execCommand("copy")
}

document.getElementById("code-input")?.addEventListener("input", updateLineNumbers)

// ============================================
// QUIZ SECTION
// ============================================

function initQuizHome() {
  const path = document.getElementById("module-path")
  path.innerHTML = ""

  const segments = [
    { title: "Variables & Data Types", start: 0 },
    { title: "Functions & Scope", start: 2 },
    { title: "DOM Manipulation", start: 4 },
    { title: "Events & Listeners", start: 6 },
  ]

  segments.forEach((s, idx) => {
    const btn = document.createElement("button")
    btn.textContent = `${idx + 1}️⃣ ${s.title}`
    btn.onclick = () => startQuiz(s.start)
    path.appendChild(btn)
  })
}

function startQuiz(idx) {
  activeQuizIdx = idx
  quizState = "playing"
  document.getElementById("view-quiz-home").classList.add("hidden")
  document.getElementById("view-quiz-play").classList.remove("hidden")
  renderQuestion()
}

function renderQuestion() {
  const q = qBank[activeQuizIdx]
  selectedOpt = null
  document.getElementById("q-num-display").textContent = `Q${q.num}`
  document.getElementById("current-q-text").textContent = q.txt
  document.getElementById("btn-check").classList.remove("hidden")

  const progress = ((activeQuizIdx + 1) / qBank.length) * 100
  document.getElementById("q-progress").style.width = `${progress}%`

  const container = document.getElementById("options-container")
  container.innerHTML = ""

  q.opts.forEach((opt, i) => {
    const div = document.createElement("div")
    div.className = "option-ui"
    div.id = `opt-${i}`
    div.onclick = () => selectOpt(i)
    div.innerHTML = `<div class="circle-icon">${i + 1}</div><span>${opt}</span>`
    container.appendChild(div)
  })
}

function selectOpt(idx) {
  if (quizState !== "playing") return
  selectedOpt = idx
  document.querySelectorAll(".option-ui").forEach((el) => el.classList.remove("selected-choice"))
  document.getElementById(`opt-${idx}`).classList.add("selected-choice")
}

function processAnswer() {
  if (selectedOpt === null || quizState !== "playing") return

  const q = qBank[activeQuizIdx]
  const isCorrect = q.opts[selectedOpt] === q.ans

  quizState = "showing-explanation"
  document.getElementById("btn-check").classList.add("hidden")

  const icon = document.getElementById("expl-icon-popup")
  const title = document.getElementById("expl-title-popup")
  const body = document.getElementById("expl-body-popup")

  const optEl = document.getElementById(`opt-${selectedOpt}`)

  if (isCorrect) {
    stats.correct++
    stats.streak++
    optEl.classList.add("correct-choice")
    title.textContent = "Correct!"
    icon.textContent = "✅"
  } else {
    stats.wrong++
    stats.streak = 0
    optEl.classList.add("wrong-choice")
    title.textContent = "Incorrect"
    icon.textContent = "❌"
    const correctIdx = q.opts.indexOf(q.ans)
    document.getElementById(`opt-${correctIdx}`).classList.add("correct-choice")
  }

  body.textContent = q.expl
  updateStats()

  const modal = document.getElementById("explanation-modal")
  modal.classList.remove("hidden")
}

function closeExplanation() {
  document.getElementById("explanation-modal").classList.add("hidden")
}

function handleNextQ() {
  activeQuizIdx++
  if (activeQuizIdx >= qBank.length) {
    showView("quiz")
    return
  }
  quizState = "playing"
  renderQuestion()
}

function handlePrevQ() {
  if (activeQuizIdx > 0) {
    activeQuizIdx--
    quizState = "playing"
    renderQuestion()
  }
}

function updateStats() {
  document.getElementById("stat-correct").textContent = stats.correct
  document.getElementById("stat-wrong").textContent = stats.wrong
  document.getElementById("stat-streak").textContent = stats.streak
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

window.addEventListener("keydown", (e) => {
  if (currentActiveView !== "quiz") return

  if (quizState === "playing") {
    if (["1", "2", "3", "4"].includes(e.key)) {
      selectOpt(Number.parseInt(e.key) - 1)
    }
    if (e.key === "Enter") processAnswer()
  } else if (quizState === "showing-explanation" && e.key === "Enter") {
    closeExplanation()
    handleNextQ()
  }
})

// ============================================
// INIT
// ============================================

window.addEventListener("load", () => {
  filterTheory()
  updateStats()
})
