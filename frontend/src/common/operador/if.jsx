import React from 'react'

export default props => {
    if(props.valor){
        return props.children
    }else{
        return false
    }
}