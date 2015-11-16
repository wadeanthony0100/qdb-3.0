'use strict';
import { combineReducers } from 'redux';
import tags from './tags';
import quotes from './quotes';

export default combineReducers({
  tags,
  quotes,
});
