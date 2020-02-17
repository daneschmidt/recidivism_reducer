// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
import DeleteIcon from '@material-ui/icons/Delete';

// CSS
import '../UserPage/UserPage.css'

class UserPage extends Component {

    state = {
        setOpen: false,
        checkbox: false,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        securityLevel: {
            level1: 1,
            level2: 2,
            level3: 3,
            level4: 4,
            level5: 5,
        }
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
        console.log(propertyName);
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_USER_CREDENTIALS',
        })
    }

    handleCheckbox = (event) => {
        this.setState({
            checkbox: true,
        })
    }

    useStyles = (makeStyles) => {
        this.setState({
            table: {
                minWidth: 650,
            },
        })
    }

    openEditUser = (event) => {
        this.setState({
            setOpen: true,
        })
    }

    closeEditUser = (event) => {
        this.setState({
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

    handleUpdate = (event) => {
        this.props.dispatch({
            type: 'REGISTER',
            payload: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                securityLevel: this.state.securityLevel,
            },
        });
        this.closeNewEvent();
    }

    handleDelete = (event) => { }

    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table className={this.useStyles.table} size="small">
                        <TableHead className="table-head">
                            <TableRow className="table-row">
                                <TableCell></TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Security Level</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.store.userCredentials.userCredentials.map(row => (
                                <TableRow key={row.user}>
                                    <TableCell align="right">
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={this.state.handleCheckbox}
                                                    //onChange={this.handleInputChange('checkbox')}
                                                    color="primary"
                                                />
                                            }
                                        />
                                    </TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.securityLevel}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="edit-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.openEditUser}
                    >
                        Edit
                </Button>
                    <div className="event-modal">
                        <Modal open={this.state.setOpen} onClose={this.closeEditUser} className="user-modal">
                            <div className="modal-input">
                                <div className="modal-header">
                                    <h2>Update User</h2>
                                </div>
                                <div className="event-form">
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <div className="text-input">
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="First Name"
                                                    value={this.state.firstName}
                                                    onChange={this.handleInputChange('firstName')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Last Name"
                                                    value={this.state.lastName}
                                                    onChange={this.handleInputChange('lastName')}
                                                />
                                                <TextField variant="outlined"
                                                    type="number"
                                                    label="Phone Number"
                                                    value={this.state.phoneNumber}
                                                    onChange={this.handleInputChange('phoneNumber')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Email"
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange('email')}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <h3>Security Level</h3>
                                            <FormControlLabel
                                                control={<Radio color="primary"/>}
                                                label="1"
                                                labelPlacement="end"
                                                value={this.state.securityLevel.level1}
                                                onChange={this.handleInputChange('securityLevel')}
                                            />
                                            <br></br>
                                            <FormControlLabel
                                                control={<Radio color="primary"/>}
                                                label="2"
                                                labelPlacement="end"
                                                value={this.state.securityLevel.level2}
                                                onChange={this.handleInputChange('securityLevel')}
                                            />
                                            <br></br>
                                            <FormControlLabel
                                                control={<Radio color="primary"/>}
                                                label="3"
                                                labelPlacement="end"
                                                value={this.state.securityLevel.level3}
                                                onChange={this.handleInputChange('securityLevel')}
                                            />
                                            <br></br>
                                            <FormControlLabel
                                                control={<Radio color="primary"/>}
                                                label="4"
                                                labelPlacement="end"
                                                value={this.state.securityLevel.level4}
                                                onChange={this.handleInputChange('securityLevel')}
                                            />
                                            <br></br>
                                            <FormControlLabel
                                                control={<Radio color="primary"/>}
                                                label="5"
                                                labelPlacement="end"
                                                value={this.state.securityLevel.level5}
                                                onChange={this.handleInputChange('securityLevel')}
                                            />
                                        </Grid>
                                    </Grid>
                                    <div className="form-button">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleDelete}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                    <div className="cancel-button">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.closeEditUser}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                    <div className="update-button">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleUpdate}
                                        >
                                            Update
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(UserPage);
