import"./index.css";
import React from "react";
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";

const Tittle =({todos}) => {
    return(
       <div className="todos">
        <h1 className="tittle">Todo App {new Date().getFullYear()} {toHaveDescription.length} Tasks</h1>
       </div>
    )
}
export const heading = "ToDo App";

export default Tittle;