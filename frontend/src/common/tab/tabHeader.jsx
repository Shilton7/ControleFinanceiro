import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab } from '../tab/tabActions'

class TabHeader extends Component{
    render() {

        const selected = this.props.tab.selected == this.props.target

        return (
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;' data-toggle='tab'
                        onClick={ () => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}


//redux
const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)