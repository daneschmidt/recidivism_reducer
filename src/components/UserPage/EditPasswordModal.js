// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Material UI
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// CSS
import '../UserPage/Modal.css'
// Sweet Alert
import Swal from 'sweetalert2/dist/sweetalert2.js';

class EditPasswordModal extends Component {
    state = {
        setOpen: false,
        newPassword: {
            id: this.props.store.user.id,
            oldPassword: '',
            enteredNewPassword: '',
            enteredNewPasswordConfirmed: ''
        }
    };

    handleInputField = infoKey => (event) => {
        const inputedVal = event.target != null ? event.target.value : event;
        this.setState({
            [infoKey]: inputedVal,
        });
    }

    openEditPassword = (event) => {
        this.setState({
            setOpen: true,
        })
    }

    closeEditPassword = (event) => {
        this.setState({
            setOpen: false,
        })
    }
    handleSubmit = (event, infoKey) => {
        if(this.state.newPassword.oldPassword &&
            this.state.newPassword.enteredNewPassword &&
            this.state.newPassword.enteredNewPasswordConfirmed === this.state.newPassword.enteredNewPassword 
            ) {
        this.props.dispatch({
            type: 'PUT_PASSWORD',
            payload: {
                ...this.state.newPassword
            }
        })
        this.closeEditPassword();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your password has been changed!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            this.setState({
                checkbox: null,
            });
        })
    } else {
        this.closeEditPassword();
        Swal.fire({
            position: 'center',
            icon: 'error',
            // title: 'Please fill out all input fields!',
            text: `Your passwords do not match. Please try again.`,
            timer: 2000
        })
    }
}

    render() {
        
        return (
            <div className="container">
                <div className="modal-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.openEditPassword}
                    >
                        Change Password
                    </Button>
                </div>
                <div className="event-modal">
                    <Modal
                        open={this.state.setOpen}
                        onClose={this.closeEditPassword}>
                        <div className="modalOrigin">
                            <h2>Edit Password</h2>
                            <div className="text-input">
                                <TextField variant="outlined"
                                    type="text"
                                    label="Current Password"
                                    
                                    onChange={(event) => this.handleInputField(event, this.state.newPassword.oldPassword = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="text"
                                    label="New Password"
                                    // InputLabelProps={{
                                    //     shrink: true,
                                    //   }}
                                    onChange={(event) => this.handleInputField(event, this.state.newPassword.enteredNewPassword = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="text"
                                    label="Confirm New Password"
                                    
                                    onChange={(event) => this.handleInputField(event, this.state.newPassword.enteredNewPasswordConfirmed = event.target.value)}
                                />
                                </div>
                                <div className="form-button">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleSubmit}
                                    >
                                        Change Password
                                    </Button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditPasswordModal);
