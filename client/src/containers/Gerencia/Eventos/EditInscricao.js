import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FormInscricao from '../../../components/Gerencia/Inscricao/FormInscricao/FormInscricao';

class EditInscricao extends Component {
    state = {
        imagePreviewUrl: '',
        fileUpload: null,
        changeImagem: '',
        selectedfile: '',
        objInscricao: {
            title: '',
            subtitle: '',
            tipo: '',
            image: '',
            value: '',
            qtdTotal: 0,
            dateFinal: ''
        }
    }

    formInscricaoChanged = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let updateObj = { ...this.state.objInscricao };
        updateObj[name] = value;
        this.setState({ objInscricao: updateObj });
    }

    forminscricaoSubmit = async (event) => {
        event.preventDefault();
        const obj = {
            id: this.props.match.params.id,
            obj: this.state.objInscricao
        }
        // const res = await axios.post('/api/inscricao', obj, { headers: {"Authorization" : this.props.token}});
        // console.log(res);
        const { fileUpload } = this.state;
        if (fileUpload) {
            this.uploadImagem(fileUpload, fileUpload.name, res => {
                console.log(res);
            });
        }
    }

    selecionaImagem = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                selectedfile: file,
                imagePreviewURL: reader.result
            })
        }
        reader.readAsDataURL(file);
        this.setState({fileUpload: event.target.files[0]});
    }

    uploadImagem = (file, mame, callback) => {
        const data = new FormData();
        data.append('file', file, mame);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization' : this.props.token
            }
        };
        axios.post('/api/inscricao/upload', data, config)
            .then(res => callback(res))
            .catch(err => console.log(err.response));
    }

    render() {
        return <FormInscricao 
                    objInscricao={this.state.objInscricao}
                    formInscricaoChanged={this.formInscricaoChanged}
                    forminscricaoSubmit={this.forminscricaoSubmit}
                    selectedImage={(event) => this.selecionaImagem(event)}
                    imgpreview={this.state.imagePreviewURL}
                    imagem={this.state.objInscricao.image} />
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(EditInscricao);