'use strict';

import api from '../api'


export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS';
export const GET_QUOTES_FAILURE = 'GET_QUOTES_FAILURE';

function getQuotesSuccess(quotes) {
  return {
    type: GET_QUOTES_SUCCESS,
    quotes,
  };
}

function getQuotesFailure(error) {
  return {
    type: GET_QUOTES_FAILURE,
    error,
  };
}

export function getQuotes() {
  return dispatch => {
    return api.Quotes.all({}, true)
      .then(body => dispatch(getQuotesSuccess(body)))
      .catch(error => dispatch(getQuotesFailure(error))); 
  };
}
