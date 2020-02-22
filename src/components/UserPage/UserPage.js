// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import EditUser from '../UserPage/EditUser';

// Material-UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import CardContent from '@material-ui/core/CardContent';
// import DeleteIcon from '@material-ui/icons/Delete';

import AddUserModal from '../UserPage/AddUserModal';
import EditPasswordModal from './EditPasswordModal';

// Sweet Alert
import Swal from 'sweetalert2/dist/sweetalert2.js'

import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";

// CSS
import '../UserPage/UserPage.css'


class UserPage extends Component {

    state = {
        setOpen: false,
        checkbox: '',
        isActive: false,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        id: '',
        securityLevel: {
            level1: 1,
            level2: 2,
            level3: 3,
            level4: 4,
            level5: 5,
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_USER_CREDENTIALS',
        })
    }

    handleInputChange = propertyName => (event) => {
        this.setState({
            securityLevel: {
                ...this.state.securityLevel,
                level1: 1,
                level2: 2,
                level3: 3,
                level4: 4,
                level5: 5,
            },
            [propertyName]: event.target.value,
        });

    }

    // allow checkbox to have blue check mark
    handleCheckboxChange = (event, id) => {
        this.setState({
            checkbox: id,
            id,
        })
    }

    // opens edit modal
    openEditUser = (event) => {
        this.setState({
            setOpen: true,
        })
    }

    // clears input fields and closes modal
    closeEditUser = (event) => {
        this.setState({
            checkbox: false,
            setOpen: false,
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            securityLevel: {
                level1: '',
                level2: '',
                level3: '',
                level4: '',
                level5: '',
            }
        })
    }

    // Doesn't delete user just changes isActive to false
    handleStatusChange = (event) => {
        this.closeEditUser();
        Swal.fire({
            title: 'Are you sure?',
            //text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                this.props.dispatch({
                    type: 'EDIT_USER_STATUS',
                    payload: {
                        isActive: this.state.isActive,
                        id: this.state.id
                    }
                })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    // Update user credentials with sweet alert pop up 
    // with success or failed message
    handleUserUpdate = (event) => {
        if (this.state.firstName &&
            this.state.lastName &&
            this.state.phoneNumber &&
            this.state.email &&
            this.state.securityLevel) {
            this.props.dispatch({
                type: 'EDIT_USER_CREDENTIALS',
                payload: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    phoneNumber: this.state.phoneNumber,
                    email: this.state.email,
                    securityLevel: this.state.securityLevel,
                    id: this.state.id
                },
            });
            this.closeEditUser();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User has been updated!',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                this.setState({
                    checkbox: null,
                });
            })
        } else {
            this.closeEditUser();
            Swal.fire({
                position: 'center',
                icon: 'error',
                //title: 'Oops...',
                text: 'Please fill out all input fields!',
                timer: 1500
            })
        }
    }

    render() {
        return (

            <div>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead
                                style={{ backgroundColor: '#384954', color: '#b6c1cb' }}
                            >
                                <TableRow>
                                    <TableCell style={{ color: '#b6c1cb' }}>
                                        <strong>First Name</strong>
                                    </TableCell>
                                    <TableCell style={{ color: '#b6c1cb' }}>
                                        <strong>Last Name</strong>
                                    </TableCell>
                                    <TableCell style={{ color: '#b6c1cb' }}>
                                        <strong>Phone Number</strong>
                                    </TableCell>
                                    <TableCell style={{ color: '#b6c1cb' }}>
                                        <strong>Email</strong>
                                    </TableCell>
                                    <TableCell style={{ color: '#b6c1cb' }}>
                                        <strong>Security Level</strong>
                                    </TableCell>
                                    <TableCell style={{ color: '#b6c1cb' }} align="right">
                                        <strong>Select User</strong>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.store.userCredentials.userCredentials.map((item, index) =>
                                    <TableRow key={index}>
                                        <TableCell>{item.firstName}</TableCell>
                                        <TableCell>{item.lastName}</TableCell>
                                        <TableCell>{item.phoneNumber}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.securityLevel}</TableCell>
                                        <TableCell align="right">
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.checkbox === item.id}
                                                        onChange={(event) => this.handleCheckboxChange(event, item.id)}
                                                        color="primary"
                                                    />
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>


                </CardContent>
                <Grid container
                    spacing={3}
                    direction="column"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            color="default"
                            onClick={this.openEditUser}
                        >
                            Edit
                </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <EditPasswordModal />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AddUserModal />
                    </Grid>

                </Grid>
                <Modal
                    style={{
                        position: 'absolute',
                        width: '40%',
                        color: '#1a262a',
                        border: '2px solid #f0ad43',
                        top: '50%',
                        left: '50%',
                        height: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    aria-labelledby='simple-modal-title'
                    aria-describedby='simple-modal-description'
                    open={this.state.setOpen} onClose={this.closeEditUser}
                >
                    <div
                        className="modal-content"
                        style={{ outline: 'none', height: '100%' }}
                    >
                        <h4 id='simple-modal-title'>Update User</h4>

                        <Grid container>

                            <Grid item xs={6} sm={6}>

                                <TextField
                                    onChange={this.handleInputChange('firstName')}
                                    label="First Name"
                                    variant='outlined'
                                    style={{ margin: '3px' }}
                                    defaultValue={this.state.firstName}
                                ></TextField>

                                <TextField
                                    variant='outlined'
                                    style={{ margin: '3px' }}
                                    type="text"
                                    label="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange('lastName')}
                                />
                                <TextField
                                    variant='outlined'
                                    style={{ margin: '3px' }}
                                    type="number"
                                    label="Phone Number"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleInputChange('phoneNumber')}
                                />
                                <TextField
                                    variant='outlined'
                                    style={{ margin: '3px' }}
                                    type="text"
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange('email')}
                                />
                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <h3>Security Level</h3>
                                <FormControlLabel
                                    control={<Radio color="primary" />}
                                    label="1"
                                    labelPlacement="end"
                                    value={this.state.securityLevel.level1}
                                    onChange={this.handleInputChange('securityLevel')}
                                />
                                <br></br>
                                <FormControlLabel
                                    control={<Radio color="primary" />}
                                    label="2"
                                    labelPlacement="end"
                                    value={this.state.securityLevel.level2}
                                    onChange={this.handleInputChange('securityLevel')}
                                />
                                <br></br>
                                <FormControlLabel
                                    control={<Radio color="primary" />}
                                    label="3"
                                    labelPlacement="end"
                                    value={this.state.securityLevel.level3}
                                    onChange={this.handleInputChange('securityLevel')}
                                />
                                <br></br>
                                <FormControlLabel
                                    control={<Radio color="primary" />}
                                    label="4"
                                    labelPlacement="end"
                                    value={this.state.securityLevel.level4}
                                    onChange={this.handleInputChange('securityLevel')}
                                />
                                <br></br>
                                <FormControlLabel
                                    control={<Radio color="primary" />}
                                    label="5"
                                    labelPlacement="end"
                                    value={this.state.securityLevel.level5}
                                    onChange={this.handleInputChange('securityLevel')}
                                />
                            </Grid>



                            <Grid item xs={2} sm={2}>
                                <Button
                                    size='small'
                                    style={{
                                        backgroundColor: '#f0ad43',
                                        color: 'black',
                                        marginLeft: '14px',


                                    }}
                                    variant="contained"
                                    color="primary"
                                    onClick={this.closeEditUser}
                                >
                                    Cancel
                                        </Button>
                                <Button
                                    size='small'
                                    style={{
                                        backgroundColor: '#f0ad43',
                                        color: 'black',
                                        marginLeft: '14px',

                                    }}
                                    variant="contained"
                                    color="default"
                                    onClick={this.handleUserUpdate}
                                >
                                    Update
                                        </Button>
                                <Button
                                    size='small'
                                    style={{
                                        backgroundColor: '#f0ad43',
                                        color: 'black',
                                        marginLeft: '14px',

                                    }}
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleStatusChange}
                                >
                                    Delete
                                        </Button>
                            </Grid>


                        </Grid>
                    </div>
                </Modal>
            </div >

        );
    }
}
export default connect(mapStoreToProps)(UserPage);