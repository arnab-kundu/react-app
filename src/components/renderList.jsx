import React, { Component } from 'react';

class RenderList extends Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {/* unique key needed for list item, to identify item while updating in DOM. */}
                    {/* check the warning in chrome console without key in item */}
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}

export default RenderList;