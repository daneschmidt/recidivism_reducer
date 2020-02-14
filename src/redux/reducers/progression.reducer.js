import _ from 'lodash';
import { combineReducers } from 'redux';
import { ADD_TASK, MOVE_TASK, EDIT_TASK, DELETE_TASK } from './actions';

const defaultState = [
  { id: 'step1', title: 'step 1', tasks: [1, 2] },
  { id: 'step2', title: 'step 2', tasks: [] },
  { id: 'step3', title: 'step 3', tasks: [] },
  { id: 'step4', title: 'step 4', tasks: [] },
  { id: 'step5', title: 'step 5', tasks: [] },
  { id: 'step6', title: 'step 6', tasks: [] }
];

function lists(state = defaultState, action) {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        step1: {
          ...state.step1,
          tasks: state.step1.tasks.concat(action.id)
        }
      };
    }
    case MOVE_TASK: {
      const from = state[action.fromListId];
      const to = state[action.toListId];
      return {
        ...state,
        [from.id]: { ...from, tasks: _.without(from.tasks, action.id) },
        [to.id]: { ...to, tasks: to.tasks.concat(action.id) }
      };
    }
    case DELETE_TASK: {
      const list = state[action.listId];
      return {
        ...state,
        [list.id]: { ...list, tasks: _.without(list.tasks, action.id) }
      };
    }
    default:
      return state;
  }
}

function tasks(state, action) {
  if (state === undefined) {
    return {
      1: { id: 1, title: 'Participant 1' },
      2: { id: 2, title: 'Participant 2' },
      3: { id: 3, title: 'Participant 3' },
      4: { id: 4, title: 'Participant 4' }
    };
  }

  let task;

  switch (action.type) {
    case ADD_TASK:
      task = { id: action.id, title: 'New Task' };
      return {
        ...state,
        [action.id]: task
      };
    case EDIT_TASK:
      task = state[action.id];
      return {
        ...state,
        [action.id]: { ...task, title: action.value }
      };
    case DELETE_TASK:
      return _.omit(state, action.id);
    default:
      return state;
  }
}

export default combineReducers({ lists, tasks });
