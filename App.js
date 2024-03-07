// const heading=React.createElement("h1",{},"Hello from React")
//     const root=ReactDOM.createRoot(document.getElementById("root"))
//     root.render(heading);



{/* <div id="Parent">
    <div id="child">
        <h1>Hello from child</h1>
    </div>
</div> */}

// const parent=React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"Hello from child")))
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);



/* <div id="Parent">
    <div id="child">
        <h1>Hello from child</h1>
        <h2>Hello from child</h2>
    </div>
</div> */

// const parent1=React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"Hello from child1"),React.createElement("h2",{},"Hello from child2")]))
// console.log(parent1);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent1);



/* <div id="Parent">
    <div id="child">
        <h1>Hello from child</h1>
        <h2>Hello from child</h2>
    </div>
    <div id="child2">
        <h1>Hello from child</h1>
        <h2>Hello from child</h2>
    </div>
</div> */

const parent1=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hello from child1"),React.createElement("h2",{},"Hello from child2")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"Hello from child1"),React.createElement("h2",{},"Hello from child2")])]);
console.log(parent1);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent1);

