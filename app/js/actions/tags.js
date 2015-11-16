'use strict';

import api from '../api'


export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const GET_TAGS_FAILURE = 'GET_TAGS_FAILURE';

function getTagsSuccess(tags) {
  return {
    type: GET_TAGS_SUCCESS,
    tags,
  };
}

function getTagsFailure(error) {
  return {
    type: GET_TAGS_FAILURE,
    error,
  };
}

export function getTags() {
  return dispatch => {
    return api.Tags.all({}, true)
      .then(body => dispatch(getTagsSuccess(body)))
      .catch(error => dispatch(getTagsFailure(error))); 
  };
}
