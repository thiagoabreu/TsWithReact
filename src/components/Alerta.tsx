import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export interface AlertState {
    opened: boolean;
}

export interface AlertProps {
    message: string;
}

/**
 * A example or what should be Alert Dialog from Material UI.
 */
export default class AlertExample extends React.Component<AlertProps, AlertState> {
    state = { opened: false };

    /**
     * Handler for when the dialog should open
     */
    handleOpen = () => {
        this.setState({opened: true});
    };

    /**
     * Handler for when the dialog should close
     */
    handleClose = () => {
        this.setState({opened: false});
    };

    render() {
        let Actions = [
            <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
            <FlatButton label="Discard" primary={true} onClick={this.handleClose}/>
        ];
        return (
            <div>
                <RaisedButton label="Alert" onClick={this.handleOpen} />
                <Dialog actions={Actions} modal={false} open={this.state.opened} onRequestClose={this.handleClose}>
                    {this.props.message}
                </Dialog>
            </div>
        );
    }
}