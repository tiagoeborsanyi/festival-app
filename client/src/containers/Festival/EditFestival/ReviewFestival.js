import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import ViewReviewAddFestival from '../../../components/ViewReviewAddFestival/ViewReviewAddFestival';
import Modal from '../../../components/UI/Modal/Modal';

class ReviewFestival extends Component {

    recordFestival = () => {
        this.props.onFestivalSubmit(this.props.onObjFestival);
    }

    onRedirect = () => {
        console.log('redirect')
        this.props.onRedirect.push('/');
    }

    render() {
        return (
            <div>
                <Modal show={this.props.onRecordStatus}>
                    <p>STATUS DE GRAVAÇÂO</p>
                    <button onClick={() => this.onRedirect()}>OK</button>
                </Modal>
                <ViewReviewAddFestival
                    onObjFestival={this.props.onObjFestival}
                    onCancel={this.props.onCancel}
                    recordFestival={this.recordFestival} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        onObjFestival: state.festival.objFestival,
        onRecordStatus: state.festival.recordStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFestivalSubmit: (value) => dispatch(actions.festivalSubmit(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFestival);