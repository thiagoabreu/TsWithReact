import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

// Use this if you don't want to use classes:
// export function Hello(props: HelloProps) {
//     return <h1>Hello world, with {props.compiler} and {props.framework}!</h1>
// }

export default class Hello extends React.Component<HelloProps, any> {
    render() {
        return <h1>Hello world, with {this.props.compiler} and {this.props.framework}!</h1>
    }
}
