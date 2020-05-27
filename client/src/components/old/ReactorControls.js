import React from 'react';

const ReactorControls = (props) => {
    return (
        <div className="panel-control">
            <h2 className="panel-control__title">Reactor</h2>
            <button className="btn btn--lg btn--red">Shutdown Reactor</button>
        </div>
    )
}


export default ReactorControls;