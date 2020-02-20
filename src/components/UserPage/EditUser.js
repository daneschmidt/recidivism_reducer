import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Material-UI
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';

import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";

class EditUser extends Component {

    state = {
        checkbox: false
    }

    // allow checkbox to have blue check mark
    handleCheckboxChange = (event, id) => {
        this.setState({
            checkbox: !this.state.checkbox,
            id,
        })
    }


    render() {
        let checkBe = this.state.checkbox;

        if (this.props.masterUncheck === true) {
            checkBe = false;
        }

        return (
            <GridContainer>
                <Grid>
                    <Paper>
                        <TableRow>
                            <TableCell align="center">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checkBe}
                                            onChange={(event) => this.handleCheckboxChange(event, this.props.item.id)}
                                            color="primary"
                                        />
                                    }
                                />
                            </TableCell>
                            <TableCell>{this.props.item.firstName}</TableCell>
                            <TableCell>{this.props.item.lastName}</TableCell>
                            <TableCell>{this.props.item.phoneNumber}</TableCell>
                            <TableCell>{this.props.item.email}</TableCell>
                            <TableCell>{this.props.item.securityLevel}</TableCell>
                        </TableRow>
                    </Paper>
                </Grid>
            </GridContainer>

            // <div className="edit-button">
            //         <Button
            //             variant="contained"
            //             color="primary"
            //             onClick={this.openEditUser}
            //         >
            //             Edit
            //     </Button>
            //         <div className="event-modal">
            //             <Modal open={this.state.setOpen} onClose={this.closeEditUser} className="user-modal">
            //                 <div className="modal-input">
            //                     <div className="modal-header">
            //                         <h2>Update User</h2>
            //                     </div>
            //                     <div className="event-form">
            //                         <Grid container spacing={2}>
            //                             <Grid item xs={6}>
            //                                 <div className="text-input">
            //                                     <TextField variant="outlined"
            //                                         type="text"
            //                                         label="First Name"
            //                                         value={this.state.firstName}
            //                                         onChange={this.handleInputChange('firstName')}
            //                                     />
            //                                     <TextField variant="outlined"
            //                                         type="text"
            //                                         label="Last Name"
            //                                         value={this.state.lastName}
            //                                         onChange={this.handleInputChange('lastName')}
            //                                     />
            //                                     <TextField variant="outlined"
            //                                         type="number"
            //                                         label="Phone Number"
            //                                         value={this.state.phoneNumber}
            //                                         onChange={this.handleInputChange('phoneNumber')}
            //                                     />
            //                                     <TextField variant="outlined"
            //                                         type="text"
            //                                         label="Email"
            //                                         value={this.state.email}
            //                                         onChange={this.handleInputChange('email')}
            //                                     />
            //                                 </div>
            //                             </Grid>
            //                             <Grid item xs={6}>
            //                                 <h3>Security Level</h3>
            //                                 <FormControlLabel
            //                                     control={<Radio color="primary"/>}
            //                                     label="1"
            //                                     labelPlacement="end"
            //                                     value={this.state.securityLevel.level1}
            //                                     onChange={this.handleInputChange('securityLevel')}
            //                                 />
            //                                 <br></br>
            //                                 <FormControlLabel
            //                                     control={<Radio color="primary"/>}
            //                                     label="2"
            //                                     labelPlacement="end"
            //                                     value={this.state.securityLevel.level2}
            //                                     onChange={this.handleInputChange('securityLevel')}
            //                                 />
            //                                 <br></br>
            //                                 <FormControlLabel
            //                                     control={<Radio color="primary"/>}
            //                                     label="3"
            //                                     labelPlacement="end"
            //                                     value={this.state.securityLevel.level3}
            //                                     onChange={this.handleInputChange('securityLevel')}
            //                                 />
            //                                 <br></br>
            //                                 <FormControlLabel
            //                                     control={<Radio color="primary"/>}
            //                                     label="4"
            //                                     labelPlacement="end"
            //                                     value={this.state.securityLevel.level4}
            //                                     onChange={this.handleInputChange('securityLevel')}
            //                                 />
            //                                 <br></br>
            //                                 <FormControlLabel
            //                                     control={<Radio color="primary"/>}
            //                                     label="5"
            //                                     labelPlacement="end"
            //                                     value={this.state.securityLevel.level5}
            //                                     onChange={this.handleInputChange('securityLevel')}
            //                                 />
            //                             </Grid>
            //                         </Grid>
            //                         <div className="form-button">
            //                             <Button
            //                                 variant="contained"
            //                                 color="primary"
            //                                 onClick={this.handleDelete}
            //                             >
            //                                 Delete
            //                             </Button>
            //                         </div>
            //                         <div className="cancel-button">
            //                             <Button
            //                                 variant="contained"
            //                                 color="primary"
            //                                 onClick={this.closeEditUser}
            //                             >
            //                                 Cancel
            //                             </Button>
            //                         </div>
            //                         <div className="update-button">
            //                             <Button
            //                                 variant="contained"
            //                                 color="primary"
            //                                 onClick={this.handleUpdate}
            //                             >
            //                                 Update
            //                             </Button>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </Modal>
            //         </div>
            //     </div>
        );
    }
}

export default connect(mapStoreToProps)(EditUser);
