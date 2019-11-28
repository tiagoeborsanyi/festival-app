import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../../UI/Spinner/Spinner';

import './ListEvents.css';

const ListEvents = props => {
    return (
        <div className="list_events">
            <div className="row">
                <h5>LIstagem de eventos</h5>
            </div>
            <div className="row">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Solicitação</th>
                            <th>Status</th>
                            <th>Ativar/Desativar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dados.map(evt => (
                            <tr key={evt._id}>
                                <td><Link to={`/gerencia/evento/${evt._id}`}>{evt.name}</Link></td>
                                <td>{evt.date}</td>
                                <td>{evt.active ? 'Ativo' : 'Pendente'}</td>
                                <td>
                                {(props.load && evt._id === props.idLoad) 
                                    ?
                                    <div className="preloader-wrapper small active">
                                        <div className="spinner-layer spinner-green-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"></div>
                                        </div><div className="gap-patch">
                                            <div className="circle"></div>
                                        </div><div className="circle-clipper right">
                                            <div className="circle"></div>
                                        </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="switch">
                                    <label>
                                        Pendente
                                    <input type="checkbox" name={evt._id} checked={evt.active} onChange={e => props.changeCheck(e)} />
                                    <span className="lever"></span>
                                        Ativo
                                    </label>
                                    </div>
                                }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEvents;