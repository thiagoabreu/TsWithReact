import * as React from "react";

export interface HelloProps {
    compilador: string;
    ferramenta: string;
}

// export function Hello(props: HelloProps) {
//     return <h1>Hello world, with {props.compiler} and {props.framework}!</h1>
// }

export default class Hello extends React.Component<HelloProps, any> {
    render() {
        return <h1>Hello world, with {this.props.compilador} and {this.props.ferramenta}!</h1>
    }
}
