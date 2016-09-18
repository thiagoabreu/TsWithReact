import * as React from "react";
import * as ReactDOM from "react-dom";
// import injectTapEventPlugin from "react-tap-event-plugin";

// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Hello from "./components/Hello";
import AlertExample from "./components/Alerta"; 

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React.js" ></Hello>,
    document.getElementById("example")
);

ReactDOM.render(
    <MuiThemeProvider>
        <AlertExample message="This is a alert with Material-UI" ></AlertExample>
    </MuiThemeProvider>,
    document.querySelector("#testDialog")
);



