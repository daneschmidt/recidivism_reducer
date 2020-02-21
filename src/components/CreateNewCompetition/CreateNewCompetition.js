import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//material UI imports
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import Swal from 'sweetalert2';

class CreateNewCompetition extends Component {
  state = {
    setOpen: false,
    step1: '',
    step2: '',
    step3: '',
    step4: '',
    step5: '',
    step6: ''
  };

  //GET SAGA for previously set progression steps
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_STATUS'
    });
  }

  //handling modal inputs
  changeField = (event, infoKey) => {
    this.setState({
      [infoKey]: event.target.value
    });
  };

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
  submit = event => {
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

          //UPDATE SAGA to update status
          this.props.dispatch({
            type: 'UPDATE_STATUS',
            payload: this.state
          });
          this.props.dispatch({
            type: 'GET_STATUS'
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

  render() {
    return (
      <div>
        <Button
          style={{ backgroundColor: '#f0ad43', color: '#1a262a' }}
          variant='contained'
          size='small'
          color='#f0ad43'
          onClick={this.handleOpen}
        >
          Start New Competition
        </Button>
        <div>
          <Modal
            style={{
              position: 'absolute',
              width: '40%',
              color: '#1a262a',
              border: '2px solid #f0ad43',
              top: '50%',
              left: '50%',
              height: '30%',
              transform: 'translate(-50%, -50%)'
            }}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
            open={this.state.setOpen}
          >
            <div
              className='modal-content'
              style={{ outline: 'none', height: '100%' }}
            >
              <h4 id='simple-modal-title'>Add Result</h4>
              <div style={{ display: 'flex', outline: 'none' }}>
                <div style={{ flex: '1' }}>
                  <TextField
                    onChange={event => this.changeField(event, 'step1')}
                    style={{ margin: '3px' }}
                    label='Enter Step One'
                    variant='outlined'
                    size='small'
                  ></TextField>
                  <TextField
                    onChange={event => this.changeField(event, 'step2')}
                    style={{ margin: '3px' }}
                    label='Enter Step two'
                    variant='outlined'
                    size='small'
                  ></TextField>
                  <TextField
                    onChange={event => this.changeField(event, 'step3')}
                    style={{ margin: '3px' }}
                    label='Enter Step Three'
                    variant='outlined'
                    size='small'
                  ></TextField>
                  <Button
                    style={{
                      backgroundColor: '#f0ad43',
                      color: 'white',
                      margin: '2px',
                      display: 'inline-block',
                      color: 'black'
                    }}
                    size='small'
                    onClick={this.submit}
                  >
                    Start Competition
                  </Button>
                </div>
                <div style={{ flex: '1' }}>
                  <TextField
                    onChange={event => this.changeField(event, 'step4')}
                    style={{ margin: '3px' }}
                    label='Enter Step Four'
                    variant='outlined'
                    size='small'
                  ></TextField>
                  <TextField
                    onChange={event => this.changeField(event, 'step5')}
                    style={{ margin: '3px' }}
                    label='Enter Step Five'
                    variant='outlined'
                    size='small'
                  ></TextField>

                  <TextField
                    onChange={event => this.changeField(event, 'step6')}
                    style={{ margin: '3px' }}
                    label='Enter Step Six'
                    variant='outlined'
                    size='small'
                  ></TextField>
                  <Button
                    size='small'
                    style={{
                      backgroundColor: '#f0ad43',
                      color: 'white',
                      marginLeft: '14px',
                      display: 'inline-block',
                      color: 'black'
                    }}
                    onClick={this.handleClose}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(CreateNewCompetition);
