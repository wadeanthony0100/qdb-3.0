'use strict';

import { GET_QUOTES_SUCCESS, } from '../actions/quotes';

export default function quotes(state = [], action){
  switch (action.type) {
  case GET_QUOTES_SUCCESS:
    return action.quotes;
  default:
    return state;
  }
}
