import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({content, type}) =>
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-6">
                <div className="card mt-4 mb-2 shadow">
                    <div className="card-body">
                    <p className="card-text">
                    {content}
                    </p>
                    <hr/>
                    <span className="badge badge-primary">{type}</span>
                    <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-edit"></i> Editar</button>
                    <button className="btn btn-link"><i className="fas fa-trash-alt"></i> Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

Messages.prototype = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
export default Messages;