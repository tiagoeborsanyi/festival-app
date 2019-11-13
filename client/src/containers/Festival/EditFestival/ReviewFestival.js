import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import ViewReviewAddFestival from '../../../components/ViewReviewAddFestival/ViewReviewAddFestival';

class ReviewFestival extends Component {

    recordFestival = () => {
        this.props.onFestivalSubmit(this.props.onObjFestival);
    }

    render() {
        return (
            <ViewReviewAddFestival
                onObjFestival={this.props.onObjFestival}
                onCancel={this.props.onCancel}
                recordFestival={this.recordFestival} />
        )
    }
}

const mapStateToProps = state => {
    return {
        onObjFestival: state.festival.objFestival
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFestivalSubmit: (value) => dispatch(actions.festivalSubmit(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFestival);