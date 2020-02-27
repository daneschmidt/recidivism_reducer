import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Details from '../DetailsButton/DetailsButton';
//material UI imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

class CompetitionList extends Component {
  state = {
    setOpen: false,
    id: '',
    name: '',
    dateOf: '',
    winnerName: '',
    amountGranted: '',
    businessName: '',
    notes: ''
  };

  //handling modal inputs
  changeField = (event, infoKey) => {
    this.setState({
      [infoKey]: event.target.value
    });
  };

  //GET SAGA for recent events
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_RECENT_COMPS'
    });
  }

  //modal functionality
  handleOpen = event => {
    this.setState({
      setOpen: true
    });
  };

  handleClose = event => {
    this.setState({
      setOpen: false
    });
  };

  //PUT SAGA to update progression steps
  submitEdit = event => {
    //sweet alert
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    this.handleClose();
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Confirm!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })

      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Changes Updated!',
            'Your file has been deleted.',
            'success'
          );

          //UPDATE SAGA to update recent competition
          this.props.dispatch({
            type: 'EDIT_RECENT_COMP',
            payload: this.state
          });
          this.props.dispatch({
            type: 'GET_RECENT_COMPS'
          });
          this.handleClose();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Action Cancelled');
          this.handleClose();
        }
      });
  };

  submitAdd = event => {
    //sweet alert
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    this.handleClose();
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Confirm!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })

      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Changes Updated!',
            'Your file has been deleted.',
            'success'
          );

          //UPDATE SAGA to update recent competition
          this.props.dispatch({
            type: 'ADD_RECENT_COMP',
            payload: this.state
          });
          this.props.dispatch({
            type: 'GET_RECENT_COMPS'
          });
          this.handleClose();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Action Cancelled');
          this.handleClose();
        }
      });
  };

  getDetails = (event, item, id) => {
    this.setState({
      setOpen: false,
      id: id,
      name: item.name,
      dateOf: item.dateOf,
      winnerName: item.winnerName,
      amountGranted: item.amountGranted,
      businessName: item.businessName,
      notes: item.notes
    });
    this.handleOpen();
  };

  openModal = event => {
    this.setState({
      setOpen: false,
      name: '',
      dateOf: '',
      winnerName: '',
      amountGranted: '',
      businessName: '',
      notes: ''
    });
    this.handleOpen();
  };

  delete = (event, id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    this.handleClose();
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Confirm!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })

      .then(result => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Changes Updated!',
            'Your file has been deleted.',
            'success'
          );

          this.props.dispatch({
            type: 'DELETE_RECENT_COMP',
            payload: id
          });
          this.props.dispatch({
            type: 'GET_RECENT_COMPS'
          });
          this.handleClose();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire('Action Cancelled');
          this.handleClose();
        }
      });
  };

  conditionalButton = event => {
    if (this.state.id === '') {
      this.submitAdd();
    } else {
      this.submitEdit();
    }
  };

  render() {
    //competition list map render
    const competitionsArr = this.props.store.competitions.map((item, index) => {
      return (
        <TableBody key={index} style={{ backgroundColor: '#fefefe' }}>
          <TableRow hover>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.dateOf}</TableCell>
            <TableCell>{item.winnerName}</TableCell>
            <TableCell>
              <IconButton
                aria-label='info'
                size='small'
                // style={{ backgroundColor: '#f0ad43', color: '#384954' }}
                color='primary'
                onClick={event => this.getDetails(event, item, item.id)}
              >
                <InfoIcon
                //  fontSize='small'
                />
                <Details />
              </IconButton>
            </TableCell>
            <TableCell>
              <IconButton
                aria-label='delete'
                size='small'
                color='secondary'
                // style={{ color: '#384954', backgroundColor: '#cb3e4b' }}
                onClick={event => this.delete(event, item.id)}
              >
                <DeleteIcon
                // fontSize='small'
                />
                <Details />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    });

    return (
      // event table
      <Card
        raised={false}
        style={{
          width: '100%',
          marginTop: '20px',
          backgroundColor: 'rgb(56, 73, 84, 0.3)',
          color: '#1a262a'
        }}
      >
        <CardContent>
          <h2 style={{ margin: '0 10px 10px 0', display: 'inline-block' }}>
            Recent Competitions
          </h2>
          <Button
            style={{
              backgroundColor: '#f0ad43',
              color: 'black',
              margin: '10px',
              display: 'inline-block',
              color: '#1a262a'
            }}
            variant='contained'
            type='button'
            onClick={this.openModal}
            size='small'
          >
            Add Event Results
          </Button>
        </CardContent>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead
                style={{ backgroundColor: '#384954', color: '#b6c1cb' }}
              >
                <TableRow>
                  <TableCell style={{ color: '#b6c1cb' }}>
                    <strong>Event Name</strong>
                  </TableCell>
                  <TableCell style={{ color: '#b6c1cb' }}>
                    <strong>Event Date</strong>
                  </TableCell>
                  <TableCell style={{ color: '#b6c1cb' }}>
                    <strong>Event Winner</strong>
                  </TableCell>
                  <TableCell style={{ color: '#b6c1cb' }}>
                    <strong>Details</strong>
                  </TableCell>
                  <TableCell style={{ color: '#b6c1cb' }}>
                    <strong>Delete</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              {competitionsArr}
            </Table>
          </TableContainer>

          {/* add result modal */}
          <Modal
            style={{
              position: 'absolute',
              width: '40%',
              color: '#1a262a',
              border: '2px solid #f0ad43',
              top: '50%',
              left: '50%',
              height: '45%',
              transform: 'translate(-50%, -50%)'
            }}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
            open={this.state.setOpen}
          >
            <div
              className='modal-content'
              style={{ outline: 'none', height: '90%' }}
            >
              <h4 id='simple-modal-title'>Add Result</h4>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: '1' }}>
                  <TextField
                    onChange={event => this.changeField(event, 'name')}
                    style={{ margin: '3px' }}
                    label='Enter Competition Name'
                    variant='outlined'
                    defaultValue={this.state.name}
                    size='small'
                  ></TextField>
                  <TextField
                    onChange={event => this.changeField(event, 'dateOf')}
                    style={{ margin: '3px' }}
                    label='Enter Competition Date'
                    variant='outlined'
                    size='small'
                    type='date'
                    defaultValue={this.state.dateOf}
                    InputLabelProps={{
                      shrink: true
                    }}
                  ></TextField>
                  <TextField
                    onChange={event => this.changeField(event, 'winnerName')}
                    style={{ margin: '3px' }}
                    label='Enter Winner Name'
                    variant='outlined'
                    defaultValue={this.state.winnerName}
                    size='small'
                  ></TextField>
                  <TextField
                    onChange={event => this.changeField(event, 'amountGranted')}
                    style={{ margin: '3px' }}
                    label='Enter Amount Granted'
                    variant='outlined'
                    size='small'
                    defaultValue={this.state.amountGranted}
                  ></TextField>
                  <TextField
                    onChange={event => this.changeField(event, 'businessName')}
                    style={{ margin: '3px' }}
                    label='Enter Business Name'
                    variant='outlined'
                    size='small'
                    defaultValue={this.state.businessName}
                  ></TextField>
                </div>
                <div style={{ flex: '1' }}>
                  <TextField
                    onChange={event => this.changeField(event, 'notes')}
                    id='outlined-multiline-flexible'
                    label='Enter Notes'
                    multiline
                    rowsMax='10'
                    variant='outlined'
                    defaultValue={this.state.notes}
                  />
                  <div>
                    <Button
                      size='small'
                      onClick={this.conditionalButton}
                      style={{
                        backgroundColor: '#f0ad43',
                        color: 'black',
                        margin: '2px',
                        display: 'inline-block'
                      }}
                    >
                      Confirm Change
                    </Button>
                    <Button
                      size='small'
                      style={{
                        backgroundColor: '#f0ad43',
                        color: 'black',
                        marginLeft: '14px',
                        display: 'inline-block'
                      }}
                      onClick={this.handleClose}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </CardContent>
      </Card>
    );
  }
}

export default connect(mapStoreToProps)(CompetitionList);
