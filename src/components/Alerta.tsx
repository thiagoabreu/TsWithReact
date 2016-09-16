import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export interface Estado {
    aberto: boolean;
}

export interface AlertaProps {
    mensagem: string;
}

export default class AlertaExemplo extends React.Component<AlertaProps, Estado> {
    state = { aberto: false };

    handleOpen = () => {
        this.setState({aberto: true});
    };

    handleClose = () => {
        this.setState({aberto: false});
    };

    render() {
        var Acoes = [
            <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
            <FlatButton label="Descartar" primary={true} onClick={this.handleClose}/>,
            <FlatButton label="Wagner" primary={false}></FlatButton>
        ];
        return (
            <div>
                <RaisedButton label="Alerta" onClick={this.handleOpen} />
                <Dialog actions={Acoes} modal={false} open={this.state.aberto} onRequestClose={this.handleClose}>
                    {this.props.mensagem}
                </Dialog>
            </div>
        );
    }
}