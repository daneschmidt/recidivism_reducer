import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Task from '../Task/Task';
// import mapStoreToProps from '../../../redux/mapStoreToProps';
// import { connect } from 'react-redux';

export default class List extends React.Component {
  render() {
    return (
      <div
        ref={this.props.innerRef}
        style={{ minHeight: '100px', padding: '10px' }}
      >
        <div
          style={{
            padding: '0 0 6px 0',
            textAlign: 'center',
            color: '#b6c1cb',
            borderBottom: '1px solid #b6c1cb',
            marginBottom: '10px'
          }}
        >
          {this.props.list.title}
        </div>
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
