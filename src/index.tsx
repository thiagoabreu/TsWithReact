import * as React from "react";
import * as ReactDOM from "react-dom";
// import injectTapEventPlugin from "react-tap-event-plugin";

// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Hello from "./components/Hello";
import AlertaExemplo from "./components/Alerta"; 

ReactDOM.render(
    <Hello compilador="TS" ferramenta="ReacT" ></Hello>,
    document.getElementById("example")
);

ReactDOM.render(
    <MuiThemeProvider>
        <AlertaExemplo mensagem="Wagner é legal" ></AlertaExemplo>
    </MuiThemeProvider>,
    document.querySelector("#testeDialog")
);



