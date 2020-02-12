import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../../redux/reducers/actions';

class AddTask extends React.Component {
  add() {
    const id = this.props.tasks.length
      ? _.last(_.sortBy(this.props.tasks, 'id')).id + 1
      : 1;
    this.props.dispatch(addTask(id));
  }

  render() {
    return (
      <button
        className='btn btn-block btn-secondary btn-sm'
        onClick={() => this.add()}
      >
        Add Participant
      </button>
    );
  }
}

const mapStateToProps = state => ({
  tasks: _.values(state.tasks)
});

export default connect(mapStateToProps)(AddTask);
