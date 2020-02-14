import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
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

class CompetitionList extends Component {
  state = {
    setOpen: false
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

  render() {
    //competition list map render
    const competitionsArr = this.props.store.competitions.map((item, index) => {
      return (
        <TableBody key={index}>
          <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.dateOf}</TableCell>
            <TableCell>
              {item.firstName} {item.lastName}
            </TableCell>
            <TableCell>
              <Button style={{ backgroundColor: 'black', color: 'white' }}>
                Details
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    });

    return (
      // event table
      <Card
        style={{
          width: '100%',
          marginTop: '20px',
          backgroundColor: 'black',
          color: 'white'
        }}
      >
        <CardContent>
          <h2 style={{ margin: '10px', display: 'inline-block' }}>
            Recent Competitions
          </h2>
          <Button
            style={{
              backgroundColor: 'white',
              color: 'black',
              margin: '10px',
              display: 'inline-block'
            }}
            type='button'
            onClick={this.handleOpen}
            size='small'
          >
            Add Event Results
          </Button>
        </CardContent>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Event Name</TableCell>
                  <TableCell>Event Date</TableCell>
                  <TableCell>Event Winner</TableCell>
                  <TableCell>Details</TableCell>
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
        </CardContent>
      </Card>
    );
  }
}

export default connect(mapStoreToProps)(CompetitionList);
