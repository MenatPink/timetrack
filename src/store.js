import { createStore } from 'redux';
import { setTimeFrame } from './reducers';

const store = createStore(setTimeFrame);

export default store;