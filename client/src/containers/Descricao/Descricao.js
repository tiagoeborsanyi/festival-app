import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Description from '../../components/Description/Description';
import Spinner from '../../components/UI/Spinner/Spinner';

class Descricao extends Component {
    async componentDidMount() {
        // aqui vou mandar a requisição para a store e depois pegar o objeto retorna da store
        if (this.props.obj === null) {
            this.props.onFestivalLoad(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.onFestivalUnmount();
    }

    render() {
        let spinner = <Spinner />
        if (this.props.obj) {
            spinner = <Description evento={this.props.obj} />
        }
        return (
            <div>
                {spinner}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        obj: state.inscricao.objFestival
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onFestivalLoad: (id) => dispatch(actions.festivalLoad(id)),
      onFestivalUnmount: () => dispatch(actions.festivalUnmount())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Descricao);