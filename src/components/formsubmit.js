import React from 'react';
import PropTypes from 'prop-types'

class FormSubmit extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            type: 'amigos'
        }
    }

    changeValue = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render () {
        const {addPost} = this.props
        return(
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <div className="card mt-4">
                            <form className="card-body" >
                                <div className="form-group" >
                                    <textarea
                                    value={this.state.content}
                                    onChange={this.changeValue}
                                    name="content" 
                                    className="form-control" 
                                    rows="4" 
                                    placeholder="Escribe aquí tu post"/>
                                </div>
                            </form>
                            <form className="card-footer">
                                <div className="row align-content-md-right">
                                    <div className="col-3">
                                        <div className="form-group">
                                        <select 
                                            value={this.state.type}
                                            onChange={this.changeValue}
                                            name="type"
                                            className="form-control form-control-sm" 
                                            >
                                            <option value="amigos" >Amigos</option>
                                            <option value="publico">Publico</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <button type="button" className="btn btn-primary btn-sm" onClick={ () => addPost(this.state)} ><i className="fas fa-paper-plane"></i> Publicar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}

FormSubmit.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default FormSubmit