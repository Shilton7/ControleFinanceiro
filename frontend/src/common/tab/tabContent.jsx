import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../operador/if'

class TabContent extends Component {
    render() {

        const selected = this.props.tab.selected == this.props.id
        const visivel = this.props.tab.visivel[this.props.id]


        return (
            <If valor={visivel}>
                <div className={`tab-pane ${selected ? 'active' : '' }`}
                    id={this.props.id}>

                    {this.props.children}
                    
                </div>
            </If>
        )
    }
}

//redux
const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)