/*
*View all tags on the QDB
*Pass the QDB tag a list of tag strings
*to display them.
* */

'use strict';

import React from 'react';
import { connect } from 'react-redux';

import TagsList from './tags-list';
import Quote from './quote';
import { getQuotes } from '../actions/quotes';

function mapStateToProps(state){
  return { quotes : state.quotes, };
}

class QuotesPage extends React.Component {

  componentDidMount(){
    this.props.dispatch(getQuotes());
  }

  render() {
    const quotesList = this.props.quotes;
    return(
      <div>
        <div className='container' id='qdb-content'>
          <div className='page-header'>
            <h1>Quotes</h1>
          </div>
          {quotesList.map(thisQuote => <Quote quoteText={thisQuote.body} smallText={thisQuote.description} tags={thisQuote.tags}  key={thisQuote.id} id={thisQuote.id}/> )}
        </div>
      </div>);
  }
}

export default connect(mapStateToProps)(QuotesPage);
