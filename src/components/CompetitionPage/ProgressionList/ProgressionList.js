import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
// import Task from '../containers/Task';
import Task from '../Task/Task';

class ProgressionList extends React.Component {
  render() {
    return (
      <div className='col-2 mb-5, card-body' ref={this.props.innerRef}>
        <div className='card'>
          <div className='card-header'>{this.props.list.title}</div>
          <div className='card-body'>
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
        </div>
      </div>
    );
  }
}

export default ProgressionList;
