import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from '../ProgressionList/ProgressionList';
import { moveTask } from '../../../redux/reducers/actions';
import AddTask from '../Task/AddTask';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
    const lists = this.props.store.progress.lists;
    const tasks = this.props.store.progress.tasks;
    console.log(this.props.store.progress.lists);

    return (
      <div>
        <Card style={{ backgroundColor: 'steelblue' }}>
          <CardContent>
            <h2 style={{ margin: '10px', display: 'inline-block' }}>
              Competition Progression Tracker
            </h2>
            <span style={{ margin: '10px', display: 'inline-block' }}>
              <AddTask />
            </span>
            <Grid container spacing={3}>
              <DragDropContext onDragEnd={this.onDragEnd}>
                {lists.map(list => (
                  <Droppable droppableId={list.id} key={list.id}>
                    {(provided, snapshot) => (
                      <Grid item xs={2}>
                        <Paper style={{ margin: '10px', padding: '10px' }}>
                          <List
                            style={{ flex: '1' }}
                            list={list}
                            tasks={this.getTasks(list, tasks)}
                            innerRef={provided.innerRef}
                            provided={provided}
                          />
                        </Paper>
                      </Grid>
                    )}
                  </Droppable>
                ))}
              </DragDropContext>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  moveTask: (fromListId, toListId, id) =>
    dispatch(moveTask(fromListId, toListId, id))
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProgressionTracker);
