// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment';
import DatePicker from 'react-date-picker';
// Material UI
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// CSS
import '../../components/App/App.css';
// Sweet Alert
import Swal from 'sweetalert2/dist/sweetalert2.js';

class AddUserModal extends Component {
    state = {
        setOpen: false,
        newUser: {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            securityLevel: 1,
            phoneNumber: '',
            email: '',
            role: '',
        }
    };

    handleInputField = infoKey => (event) => {
        const inputedVal = event.target != null ? event.target.value : event;
        this.setState({
            [infoKey]: inputedVal,
        });
    }

    openAddUser = (event) => {
        this.setState({
            setOpen: true,
        })
    }

    closeAddUser = (event) => {
        this.setState({
            setOpen: false,
        })
    }
    handleSubmit = (event, infoKey) => {
        if (this.state.newUser.firstName &&
            this.state.newUser.lastName &&
            this.state.newUser.username &&
            this.state.newUser.password &&
            this.state.newUser.phoneNumber &&
            this.state.newUser.email) {
            // this.closeAddUser();

            this.props.dispatch({
                type: 'POST_USER',
                payload: {
                    ...this.state.newUser
                }
            })
            this.closeAddUser();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User has been Added!',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                this.setState({
                    checkbox: null,
                });
            })
        } else {
            this.closeAddUser();
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please fill out all input fields!',
                text: `Hint: Make sure you don't have any characters other than numbers in the phone number field.`,
                timer: 2500
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
                        onClick={this.openAddUser}
                    >
                        Add User
                    </Button>
                </div>
                <div className="event-modal">
                    <Modal
                        open={this.state.setOpen}
                        onClose={this.closeAddUser}>
                        <div className="modal">
                            <h2>Add User</h2>
                            <div className="text-input">
                                <TextField variant="outlined"
                                    type="text"
                                    label="First Name"

                                    onChange={(event) => this.handleInputField(event, this.state.newUser.firstName = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="text"
                                    label="Last Name"
                                    // InputLabelProps={{
                                    //     shrink: true,
                                    //   }}
                                    onChange={(event) => this.handleInputField(event, this.state.newUser.lastName = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="text"
                                    label="User Name"

                                    onChange={(event) => this.handleInputField(event, this.state.newUser.username = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="text"
                                    label="Password"

                                    onChange={(event) => this.handleInputField(event, this.state.newUser.password = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="number"
                                    label="Phone Number"

                                    onChange={(event) => this.handleInputField(event, this.state.newUser.phoneNumber = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="text"
                                    label="E-Mail"

                                    onChange={(event) => this.handleInputField(event, this.state.newUser.email = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="text"
                                    label="Role"

                                    onChange={(event) => this.handleInputField(event, this.state.newUser.role = event.target.value)}
                                />
                                {/* <Grid item xs={6}>
                                </Grid> */}
                                {/* <select className="select-user-css" onChange={(event) => this.handleInputField(event, this.state.newUser.clients_id = event.target.value)}>
                                    {blankClient}
                                    {allClientsList}
                                </select> */}
                            </div>
                            <div className="form-button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}
                                >
                                    Add User
                                    </Button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AddUserModal);
