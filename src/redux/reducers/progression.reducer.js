import _ from 'lodash';
import { combineReducers } from 'redux';
import { ADD_TASK, MOVE_TASK, EDIT_TASK, DELETE_TASK } from './actions';

function lists(state, action) {
  if (state === undefined) {
    return {
      step1: {
        id: 'step1',
        title: 'step 1',
        tasks: []
      },
      step2: { id: 'step2', title: 'step 2', tasks: [] },
      step3: { id: 'step3', title: 'step 3', tasks: [] },
      step4: { id: 'step4', title: 'step 4', tasks: [] },
      step5: { id: 'step5', title: 'step 5', tasks: [] },
      step6: { id: 'step6', title: 'step 6', tasks: [] }
    };
  }

  switch (action.type) {
    case 'INIT_LIST': {
      let result = _.cloneDeep(state);

      for (let item of action.payload) {
        if (result[item.status].tasks.includes(item.id)) {
          continue;
        }
        result[item.status].tasks.push(item.id);
      }
      return result;
    }

    case 'SET_STATUS': {
      return {
        ...state,
        step1: {
          ...state.step1,
          title: action.payload.step1
        },
        step2: {
          ...state.step2,
          title: action.payload.step2
        },
        step3: {
          ...state.step3,
          title: action.payload.step3
        },
        step4: {
          ...state.step4,
          title: action.payload.step4
        },
        step5: {
          ...state.step5,
          title: action.payload.step5
        },
        step6: {
          ...state.step6,
          title: action.payload.step6
        }
      };
    }

    // case ADD_TASK: {
    //   return {
    //     ...state,
    //     step1: {
    //       ...state.step1,
    //       tasks: state.step1.tasks.concat(action.id)
    //     }
    //   };
    // }

    case ADD_TASK: {
      let tasks = [...state.step1.tasks];
      if (tasks.includes(action.id)) {
        // do nothing
      } else {
        tasks.push(action.id);
      }

      return {
        ...state,
        step1: {
          ...state.step1,
          tasks: tasks
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

const defaultTasks = {};

function tasks(state = defaultTasks, action) {
  let task;
  switch (action.type) {
    case 'SET_PARTICIPANTS': {
      let result = {};
      for (let item of action.payload) {
        result[item.id] = {
          id: item.id,
          title: item.parName,
          status: item.status
        };
      }

      return result;
    }

    case ADD_TASK:
      task = { id: action.id, title: 'New Participant' };
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
