import React from 'react';
import { connect } from 'react-redux';
import ContentEditable from 'react-contenteditable';
import { editTask, deleteTask } from '../../../redux/reducers/actions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Task extends React.Component {
  state = {
    id: '',
    parName: ''
  };

  handleChange(event, infoKey) {
    this.setState({
      id: this.props.task.id,
      [infoKey]: event.target.value
    });

    this.props.editTask(this.props.task.id, event.target.value);
  }

  add() {
    this.props.dispatch({
      type: 'EDIT_PARTICIPANT',
      payload: this.state
    });
  }

  delete() {
    this.props.deleteTask(this.props.list.id, this.props.task.id);
  }

  render() {
    const { task, provided, innerRef } = this.props;

    return (
      <Card
        ref={innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <CardContent>
          <ContentEditable
            html={task.title}
            disabled={false}
            onChange={event => this.handleChange(event, 'parName')}
          />
        </CardContent>
        <CardContent style={{ marginBottom: '10px', backgroundColor: '#555' }}>
          <div style={{ display: 'flex' }}>
            <Button
              variant='contained'
              size='small'
              color='primary'
              style={{ flex: '1', margin: '3px' }}
              onClick={e => this.add(e)}
            >
              Add
            </Button>
            <Button
              variant='contained'
              size='small'
              color='secondary'
              style={{ flex: '1', margin: '3px' }}
              onClick={e => this.delete(e)}
            >
              X
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editTask: (id, value) => dispatch(editTask(id, value)),
  deleteTask: (listId, id) => dispatch(deleteTask(listId, id)),
  dispatch
});

export default connect(null, mapDispatchToProps)(Task);
