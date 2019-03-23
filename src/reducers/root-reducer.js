import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import advertReducer from './advert-reducer';
import authReducer from './auth-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  advert: advertReducer,
  auth: authReducer,
  user: userReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
