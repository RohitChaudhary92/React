// const heading=React.createElement("h1",{},"Hello from React")
//     const root=ReactDOM.createRoot(document.getElementById("root"))
//     root.render(heading);



// {/* <div id="Parent">
//     <div id="child">
//         <h1>Hello from child</h1>
//     </div>
// </div> */}

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

// const parent1=React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"Hello from child1"),React.createElement("h2",{},"Hello from child2")]),
// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"Hello from child1"),React.createElement("h2",{},"Hello from child2")])]);
// console.log(parent1);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent1);
 

import React from "react";
import ReactDOM from "react-dom/client";


//JSX (transpiled before it reaches the JS)-Parcel-Babel

//JSX=>Babel transpiles it to React.createElement=>ReactElement-JS Object=>HTML ELement

//React Functional Component
const Title= ()=>(
    <h2>Hello Rohit using functional component</h2>,
    <h1 >Hello Rohit using Jsx</h1>,
    <h1 >Hello Rohit using Jsx</h1>   
)
 
const elem=<span>Hello World!</span>;
//React Element
const title= (
        <h1 >
            {elem}
            Hello Rohit using Element</h1>
)
    
    
const HeadingComponent=()=>(
    <div id="container">
         {/* Rendering Functional component */}
        <Title/>
        
        {/* Rendering Simple Element  
        You can Write any js code inside these curly braces */}
        {title}  
        <h1>Hello using functional component</h1>

        {/* we can also call function component */}
        {Title()}
    </div>
)
console.log(HeadingComponent)

// const title= (
//         <h1>
//             {elem}

//             <HeadingComponent/>
//             Hello Rohit using Element
//             </h1>
// )
 const root=ReactDOM.createRoot(document.getElementById("root"))
 // root.render replace the content that is in the file index.html under div id root i.e(Rohit) and outside the root it does not replace anything
root.render(<HeadingComponent/>);
// root.render(title);