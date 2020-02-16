import React from 'react';
import { connect } from 'react-redux';
import ContentEditable from 'react-contenteditable';
import { editTask, deleteTask } from '../../../redux/reducers/actions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Task extends React.Component {
  handleChange(e) {
    this.props.editTask(this.props.task.id, e.target.value);
  }

  delete() {
    this.props.deleteTask(this.props.list.id, this.props.task.id);
  }

  render() {
    const { task, provided, innerRef } = this.props;
    console.log(task);

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
            onChange={e => this.handleChange(e)}
          />
        </CardContent>
        <CardContent style={{ marginBottom: '10px', backgroundColor: '#555' }}>
          <Button
            variant='contained'
            size='small'
            color='secondary'
            onClick={e => this.delete(e)}
          >
            X
          </Button>
        </CardContent>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editTask: (id, value) => dispatch(editTask(id, value)),
  deleteTask: (listId, id) => dispatch(deleteTask(listId, id))
});

export default connect(null, mapDispatchToProps)(Task);
