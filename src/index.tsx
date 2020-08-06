import React from "react";
import { render } from "react-dom";


//root component
import App from "./main/app";

//styles
import "./assets/less/index.css";

const target = document.getElementById("root");

render(<App />, target);
