'use strict';

import React, { Component } from 'react';
import TagsList from './tags-list';

export default class Quote extends Component {
    render() {
      const tags = this.props.tags;
      return(
        <div className='well well-lg'>
            <a href='#'>{this.props.id}</a>
            <blockquote className='qdb-quote-text'>
                {this.props.quoteText}
            </blockquote>
            <small id='qdb-small-text'>
                {this.props.smallText}
            </small>
            <hr />
            <TagsList tags={tags} />
        </div>
        );
    }
}
