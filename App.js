import * as React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import placesReducer from './store/placesReducer';
import PlacesNavigator from './navigation/placesNavigator';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxThunk)
));

function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

export default App;