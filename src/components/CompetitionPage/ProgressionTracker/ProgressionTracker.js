import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import List from '../components/List';
import List from '../ProgressionList/ProgressionList';
// import { moveTask } from '../redux/actions';
import { moveTask } from '../../../redux/reducers/actions';
// import AddTask from '../containers/AddTask';
import AddTask from '../Task/AddTask';

class ProgressionTracker extends React.Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  getTasks(list, tasks) {
    return _.map(list.tasks, taskId => tasks[taskId]);
  }

  onDragEnd({ source, destination, draggableId }) {
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      this.props.moveTask(
        source.droppableId,
        destination.droppableId,
        draggableId
      );
    }
  }

  render() {
    const lists = this.props.lists;
    const tasks = this.props.tasks;

    return (
      <div
        className='card'
        style={{
          height: '500px',
          margin: '10px',
          backgroundColor: 'steelblue'
        }}
      >
        <h2 style={{ margin: '10px' }}>Competition Progression Tracker</h2>
        <span style={{ width: '20%', margin: '20px' }}>
          <AddTask />
        </span>

        <div className='row mt-5'>
          <DragDropContext onDragEnd={this.onDragEnd}>
            {lists.map(list => (
              <Droppable droppableId={list.id} key={list.id}>
                {(provided, snapshot) => (
                  <List
                    list={list}
                    tasks={this.getTasks(list, tasks)}
                    innerRef={provided.innerRef}
                    provided={provided}
                  />
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: _.values(state.lists),
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  moveTask: (fromListId, toListId, id) =>
    dispatch(moveTask(fromListId, toListId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressionTracker);
