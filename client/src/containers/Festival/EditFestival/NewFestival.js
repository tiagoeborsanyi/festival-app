import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import EditFestival from './EditFestival';
import ReviewFestival from './ReviewFestival';

class NewFestival extends Component {
    state = {
        showFestivalReview: false
    }

    componentWillUnmount() {
        // tem que destruir os dados nesse ciclo de vida
        console.log('willUnmount')
        this.props.onFestivalFinish();
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

const mapDispatchToProps = dispatch => {
    return {
        onFestivalFinish: () => dispatch(actions.festivalFinish())
    }
}

export default connect(null, mapDispatchToProps)(NewFestival);