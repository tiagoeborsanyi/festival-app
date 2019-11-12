import React, { Component } from 'react';

import EditFestival from './EditFestival';
import ReviewFestival from './ReviewFestival';

class NewFestival extends Component {
    state = {
        showFestivalReview: false
    }

    renderComponent() {
        if (this.state.showFestivalReview) {
            return <ReviewFestival onCancel={() => this.setState({showFestivalReview: false})} />
        }
        return <EditFestival onFestivalSubmit={() => this.setState({showFestivalReview: true})} />
    }

    render() {
        return (
            <div>
                {this.renderComponent()}
            </div>
        )
    }
}

export default NewFestival;