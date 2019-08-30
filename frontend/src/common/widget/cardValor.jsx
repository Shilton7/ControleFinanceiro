import React from  'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.colunas}>
        <div className={`small-box bg-${props.cor}`}>
            <div className='inner'>
                <h3>{props.valor}</h3>
                <p>{props.texto}</p>
            </div>
            <div className='icon'>
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </div>

    </Grid>
)