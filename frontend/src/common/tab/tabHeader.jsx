import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab } from '../tab/tabActions'
import If from '../operador/if'

class TabHeader extends Component{
    render() {

        const selected = this.props.tab.selected == this.props.target
        const visivel = this.props.tab.visivel[this.props.target]

        return (
            <If valor={visivel}>
                <li className={selected ? 'active' : '' }>
                    <a href='javascript:;' data-toggle='tab'
                            onClick={ () => this.props.selectTab(this.props.target)}
                            data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}


//redux
const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)