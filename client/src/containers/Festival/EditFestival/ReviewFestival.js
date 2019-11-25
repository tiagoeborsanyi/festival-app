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
        let contentModal = null;
        if (this.props.onRecordStatus === 200) {
            contentModal = (
                <div>
                    <p>Seu evento foi enviado para nossa equipe.</p>
                    <p>Um email será enviado para você, contendo mais informações.</p>
                    <p>Obrigado, equipe climb festival.</p>
                </div>
            )
        } else {
            contentModal = (
                <div>
                    <p>Houve um erro para enviar os dados a nossa equipe.</p>
                    <p>Entre em contato com nossa equipe.</p>
                    <p>Desculpe pelo inconveniente.</p>
                </div>
            )
        }
        return (
            <div>
                <Modal show={this.props.onRecordStatus}>
                    {contentModal}
                    <button className="blue white-text btn-flat" onClick={() => this.onRedirect()}>OK</button>
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