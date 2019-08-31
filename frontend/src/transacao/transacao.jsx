import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from  '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from  '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import TransacaoList from './transacaoList'
import TransacaoForm from './transacaoForm'
import { criar, atualizar, deletar } from './transacaoActions'

class Transacao extends Component {

    componentWillMount(){
        this.props.selectTab('tabListar')
        this.props.showTabs('tabListar','tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader titulo='Transações' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target='tabListar' icon='bars' label='Listar'/>
                            <TabHeader target='tabCreate' icon='plus' label='Incluir' />
                            <TabHeader target='tabUpdate' icon='pencil' label='Alterar' />
                            <TabHeader target='tabDelete' icon='trash-o' label='Excluir' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabListar'>
                                <TransacaoList/>
                            </TabContent>
                            
                            <TabContent id='tabCreate'>
                                <TransacaoForm btn_class='success' btn_label='Salvar'
                                               onSubmit={this.props.criar}></TransacaoForm>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <TransacaoForm btn_class='warning' btn_label='Salvar alteração' 
                                               onSubmit={this.props.atualizar}></TransacaoForm>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <TransacaoForm readOnly={true} btn_class='danger' btn_label='Deletar'
                                               onSubmit={this.props.deletar}></TransacaoForm>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

//redux
const mapDispatchToProps = dispatch => bindActionCreators({ 
    selectTab, showTabs, criar, atualizar, deletar
    }, dispatch )
export default connect(null, mapDispatchToProps)(Transacao)