import React from "react";
import ReactDOM from "react-dom/client";

// ReactDOM.render(<App />,document.getElementById("root"));
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);