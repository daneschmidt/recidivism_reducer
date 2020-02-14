import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Task from '../Task/Task';

class ProgressionList extends React.Component {
  render() {
    return (
      <div ref={this.props.innerRef}>
        <div>{this.props.list.title}</div>
        {this.props.tasks.map((task, index) => (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided, snapshot) => (
              <Task
                list={this.props.list}
                task={task}
                innerRef={provided.innerRef}
                provided={provided}
              />
            )}
          </Draggable>
        ))}
        {this.props.provided.placeholder}
      </div>
    );
  }
}

export default ProgressionList;