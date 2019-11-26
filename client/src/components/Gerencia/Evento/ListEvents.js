import React from 'react';
import { Link } from 'react-router-dom';

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
                        </tr>
                    </thead>
                    <tbody>
                        {props.dados.map(evt => (
                            <tr key={evt._id}>
                                <td><Link className="" to={`/gerencia/${evt._id}`}>{evt.name}</Link></td>
                                <td>{evt.date}</td>
                                <td>{evt.active ? 'Ativo' : 'Pendente'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEvents;