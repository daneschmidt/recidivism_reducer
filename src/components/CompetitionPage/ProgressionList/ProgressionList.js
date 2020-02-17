import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Task from '../Task/Task';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { connect } from 'react-redux';

export default class List extends React.Component {
  render() {
    return (
      <div ref={this.props.innerRef}>
        <div>{this.props.list.title}</div>
        {this.props.tasks.map((task, index) => (
          <Draggable
            key={task.id.toString()}
            draggableId={task.id.toString()}
            index={index}
          >
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
