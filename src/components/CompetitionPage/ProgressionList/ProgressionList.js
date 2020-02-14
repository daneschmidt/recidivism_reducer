import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Task from '../Task/Task';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const lists = this.props.store.progress.lists;
    const tasks = this.props.store.progress.tasks;
    console.log('--------', tasks);
    const taskArr = Object.keys(tasks).map((taskIndex, index) => {
      const task = tasks[taskIndex];
      return (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided, snapshot) => (
            <Task
              list={this.lists}
              task={task}
              innerRef={provided.innerRef}
              provided={provided}
            />
          )}
        </Draggable>
      );
    });
    return (
      <div ref={this.props.store.progress.innerRef}>
        <div>{lists.title}</div>
        {taskArr}
        {this.props.provided.placeholder}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(List);
