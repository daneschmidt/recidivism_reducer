import React from 'react';
import { connect } from 'react-redux';
import ContentEditable from 'react-contenteditable';
import { editTask, deleteTask } from '../../../redux/reducers/actions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

import './Task.css';

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
    this.props.dispatch({
      type: 'DELETE_PARTICIPANT',
      payload: this.props.task.id
    });
  }

  render() {
    const { task, provided, innerRef } = this.props;

    return (
      <Card
        className='stacker'
        ref={innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <CardContent>
          <ContentEditable
            style={{
              borderBottom: '1px solid rgb(56, 73, 84, 0.4)',
              backgroundColor: 'rgb(56, 73, 84, 0.1)'
            }}
            html={task.title}
            disabled={false}
            onChange={event => this.handleChange(event, 'parName')}
          />
        </CardContent>
        <CardContent
          style={{
            padding: '3px'
          }}
        >
          <div style={{ display: 'flex', marginLeft: '30px' }}>
            {/* <Button
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
            </Button> */}
            <IconButton
              // style={{ color: '#384954', backgroundColor: '#cb3e4b' }}
              aria-label='save'
              color='primary'
              onClick={e => this.add(e)}
            >
              <SaveIcon fontSize='small' />
            </IconButton>
            <IconButton
              // style={{ color: '#384954', backgroundColor: '#cb3e4b' }}
              aria-label='delete'
              color='secondary'
              onClick={e => this.delete(e)}
            >
              <DeleteIcon fontSize='small' />
            </IconButton>
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
