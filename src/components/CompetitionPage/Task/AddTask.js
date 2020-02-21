import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../../redux/reducers/actions';
import uuid from 'uuid/v1';

import Button from '@material-ui/core/Button';

class AddTask extends React.Component {
  add() {
    const id = uuid();
    this.props.dispatch(addTask(id));
    this.props.dispatch({
      type: 'ADD_PARTICIPANT',
      payload: id
    });
  }

  render() {
    return (
      <Button
        style={{ backgroundColor: '#f0ad43', color: 'white' }}
        variant='contained'
        size='small'
        color='#f0ad43'
        onClick={() => this.add()}
      >
        Add Participant
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  tasks: _.values(state.tasks)
});

export default connect(mapStateToProps)(AddTask);
