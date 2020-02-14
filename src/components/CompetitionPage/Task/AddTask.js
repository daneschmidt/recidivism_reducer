import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../../redux/reducers/actions';

import Button from '@material-ui/core/Button';

class AddTask extends React.Component {
  add() {
    const id = this.props.tasks.length
      ? _.last(_.sortBy(this.props.tasks, 'id')).id + 1
      : 1;
    this.props.dispatch(addTask(id));
  }

  render() {
    return (
      <Button
        variant='contained'
        size='small'
        color='primary'
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
