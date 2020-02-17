import React, { Component } from 'react';
//material UI imports
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

class DetailsButton extends Component {
  state = {
    setOpen: false,
    addResults: {
      name: '',
      dateOf: '',
      firstName: '',
      lastName: '',
      business: ''
    }
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

  render() {
    return (
      <div>
        {/* add result modal */}
        <Modal
          style={{
            position: 'absolute',
            width: '40%',
            height: '50%',
            backgroundColor: 'white',
            color: 'white',
            border: '2px solid white',
            padding: '10px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginRight: '-50%',
            opacity: '100%'
          }}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={this.state.setOpen}
        >
          <div>
            <h4 id='simple-modal-title'>Add Result</h4>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1' }}>
                <TextField
                  style={{ margin: '3px' }}
                  label='Enter Competition Name'
                  variant='outlined'
                  size='small'
                ></TextField>
                <TextField
                  style={{ margin: '3px' }}
                  label='Enter Competition Date'
                  variant='outlined'
                  size='small'
                ></TextField>
                <TextField
                  style={{ margin: '3px' }}
                  label='Enter Winner Name'
                  variant='outlined'
                  size='small'
                ></TextField>
                <TextField
                  style={{ margin: '3px' }}
                  label='Enter Amount Granted'
                  variant='outlined'
                  size='small'
                ></TextField>
                <TextField
                  style={{ margin: '3px' }}
                  label='Enter Business Name'
                  variant='outlined'
                  size='small'
                ></TextField>
              </div>
              <div style={{ flex: '1' }}>
                <TextField
                  id='outlined-multiline-flexible'
                  label='Enter Notes'
                  multiline
                  rowsMax='10'
                  variant='outlined'
                />
                <div>
                  <Button
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      margin: '2px',
                      display: 'inline-block'
                    }}
                  >
                    Add Result
                  </Button>
                  <Button
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
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
      </div>
    );
  }
}

export default DetailsButton;
