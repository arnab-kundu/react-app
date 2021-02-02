import React, { Component } from 'react';

class RenderList extends Component {
    state = {
        //make tags empty [] and test
        tags: ['tag1', 'tag2', 'tag3']
    }

    // Conditional rendering
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;

        //unique key needed for list item, to identify item while updating in DOM.
        //check the warning in chrome console without key in item
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() {
        return (
            <React.Fragment>
                {/* test following in chrome console 
                 true && false
                 true && 'hi'
                 true && 'hi' && 1 */}
                {this.state.tags.length === 0 && <p>Please create a tag</p>}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}

export default RenderList;