import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from  '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
class Transacao extends Component {
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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default Transacao