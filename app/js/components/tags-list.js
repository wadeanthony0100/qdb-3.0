'use strict';

import React, { Component } from 'react';
import Tag from './tag';

export default class TagList extends Component {
  render() {
    const tags = this.props.tags || [];
    tags.sort();
    const tagElements = tags.map(thisTag => <Tag key={thisTag.name}  tag={thisTag.name} /> );
    return(
      <div>
        {tagElements}
      </div>
    );
  }
}
