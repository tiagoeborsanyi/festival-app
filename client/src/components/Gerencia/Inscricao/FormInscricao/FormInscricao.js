import React from 'react';

import './FormInscricao.css';
import Spinner from '../../../UI/Spinner/Spinner';

const FormInscricao = ({ 
                            forminscricaoTitle, 
                            forminscricaoSubmit, 
                            objInscricao, 
                            formInscricaoChanged,
                            selectedImage,
                            children, 
                            cancelFormInscricao,
                            imgpreview,
                            loadImage
                        }) => {
    let imgTemp = null;
    if (imgpreview && loadImage) {
        imgTemp = <Spinner />     
    }
    if (imgpreview && !loadImage) {
        imgTemp = (<img src={imgpreview} alt="festival" />);
    }
    return (
        <div className="row forminscricao_container">
            <div className="col s8 festival_col">
    <div className="login_title">{forminscricaoTitle}</div>
                <form onSubmit={forminscricaoSubmit}>
                    <div className="forminscricao_item_input">
                        <span>Titulo *</span>
                        <input 
                            placeholder="Titulo" 
                            name="title" 
                            type="text" 
                            value={objInscricao.title} 
                            onChange={e => formInscricaoChanged(e)}
                            required />
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="forminscricao_item_input">
                                <span>Sub-Titulo</span>
                                <input 
                                    placeholder="Sub Titulo" 
                                    name="subtitle" 
                                    type="text" 
                                    value={objInscricao.subtitle} 
                                    onChange={e => formInscricaoChanged(e)} />
                            </div>
                        </div>
                        <div className="col s6">
                        <div className="forminscricao_item_input">
                            <span>Tipo *</span>
                            <input 
                                placeholder="Tipo de inscrição: Geral, Full, Fids, etc" 
                                name="tipo" 
                                type="text" 
                                value={objInscricao.tipo} 
                                onChange={e => formInscricaoChanged(e)}
                                required />
                        </div>
                        </div>
                    </div>
                    <div className="forminscricao_item_input">
                        {imgTemp}
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Imagem</span>
                                <input type="file" accept="image/png, image/jpeg" onChange={selectedImage} />
                            </div>
                            <div className="file-path-wrapper">
                                <input 
                                    className="file-path validate"
                                    name="image"
                                    type="text"
                                    value={objInscricao.image}
                                    onChange={e => formInscricaoChanged(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <div className="forminscricao_item_input">
                                <span>Valor R$ *</span>
                                <input 
                                    placeholder="12.65" 
                                    name="value" 
                                    type="number" 
                                    value={objInscricao.value} 
                                    onChange={e => formInscricaoChanged(e)}
                                    required />
                            </div>
                        </div>
                        <div className="col s6">
                            <div className="forminscricao_item_input">
                                <span>Qtd de Inscrições *</span>
                                <input 
                                    placeholder="Numero total que será aceito para esta modalidade de inscrição" 
                                    name="qtdTotal" 
                                    type="number" 
                                    value={objInscricao.qtdTotal} 
                                    onChange={e => formInscricaoChanged(e)}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="forminscricao_item_input">
                        <span>Data final das inscrições *</span>
                        <input 
                            placeholder="Data final da inscrição" 
                            name="dateFinal" 
                            type="date" 
                            value={objInscricao.initiateInscricao} 
                            onChange={e => formInscricaoChanged(e)}
                            required />
                    </div>
                    <div className="forminscricao_item_input">
                        <span>Descrição *</span>
                        {children}
                    </div>
                    <button className="red darken-1 btn-flat left white-text" onClick={cancelFormInscricao}>
                        Cancelar
                        <i className="material-icons right">cancel</i>
                    </button>
                    <button type="submit" className="light-blue btn-flat right white-text">
                        Cadastrar
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        </div>
    );
}

FormInscricao.defaultProps = {
    forminscricaoTitle: 'Adicionar Tipo de Inscrição'
}

export default FormInscricao;