import React from 'react';

const Loader = () =>
<div className="container mt-4">
    <div className="d-flex justify-content-center">
        <div className="loader spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    <br/>
    <h2 className="text-center">Cargando componentes</h2>
</div>


export default Loader