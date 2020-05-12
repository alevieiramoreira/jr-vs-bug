import { createStore } from 'redux';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
