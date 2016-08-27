import React, { Component } from 'react';
import { Card, Button, ButtonGroup, ButtonToolbar, Breadcrumb } from '../components/impression';
import { CommenTable, Highlight } from '../components';

export default class ButtonGroupView extends Component{
    //onSelect
    btnGroupSelectHandle(eventKey, event){
    }
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card>
                        <Card.Block>
                            <ButtonGroup theme="default" activeKey="left" onSelect={this.btnGroupSelectHandle.bind(this)}>
                                <Button eventKey="left">Left</Button>
                                <Button eventKey="middle">Middle</Button>
                                <Button eventKey="right">Right</Button>
                            </ButtonGroup>
                        </Card.Block>
                        <Highlight>
                            {`import { ButtonGroup } from 'impression-react';\n\n<ButtonGroup theme="default" activeKey="left">\n  <Button eventKey="left">Left</Button>\n  <Button eventKey="middle">Middle</Button>\n  <Button eventKey="right">Right</Button>\n</ButtonGroup>`}
                        </Highlight>
                    </Card>
                    <h3>Thems</h3>
                    <Card>
                        <Card.Block>
                            <ButtonToolbar>
                                <ButtonGroup theme="primary" onSelect={this.btnGroupSelectHandle.bind(this)} activeKey="right">
                                    <Button eventKey="left">Left</Button>
                                    <Button eventKey="middle">Middle</Button>
                                    <Button eventKey="right">Right</Button>
                                </ButtonGroup>
                                <ButtonGroup theme="secondary" activeKey="middle" onSelect={this.btnGroupSelectHandle.bind(this)}>
                                    <Button eventKey="left">Left</Button>
                                    <Button eventKey="middle">Middle</Button>
                                    <Button eventKey="right">Right</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Block>
                        <Highlight>
                            {`<ButtonGroup theme="primary" activeKey="right">...</ButtonGroup>\n<ButtonGroup theme="secondary" activeKey="middle">...</ButtonGroup>\n`}
                        </Highlight>
                    </Card>
                    <h3>Button toolbar</h3>
                    <Card>
                        <Card.Block>
                            <ButtonToolbar>
                                <ButtonGroup>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <Button>3</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button>4</Button>
                                    <Button>5</Button>
                                    <Button>6</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button>7</Button>
                                    <Button>8</Button>
                                    <Button>9</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Block>
                        <Highlight>
                            {`<ButtonToolbar>\n  <ButtonGroup><Button>1</Button>...</ButtonGroup>\n  <ButtonGroup><Button>4</Button>...</ButtonGroup>\n  <ButtonGroup><Button>7</Button>...</ButtonGroup>\n</ButtonToolbar>`}
                        </Highlight>
                    </Card>
                    <h3>Sizes</h3>
                    <Card>
                        <Card.Block>
                            <ButtonToolbar>
                                <ButtonGroup size="lg">
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <Button>3</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button>4</Button>
                                    <Button>5</Button>
                                    <Button>6</Button>
                                </ButtonGroup>
                                <ButtonGroup size="sm">
                                    <Button>7</Button>
                                    <Button>8</Button>
                                    <Button>9</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Block>
                        <Highlight>
                            {`<ButtonGroup size="lg"><Button>1</Button>...</ButtonGroup>\n<ButtonGroup><Button>4</Button>...</ButtonGroup>\n<ButtonGroup size="sm"><Button>7</Button>...</ButtonGroup>`}
                        </Highlight>
                    </Card>
                    <h3 className="text-secondary">API</h3>
                    <CommenTable
                        data = {[
                            ['size', '设置按钮组大小，可选值为 lg、sm', 'string', ''],
                            ['theme', '设置按钮组主题样式，可选值为 primary、secondary、default', 'string', 'default'],
                            ['activeKey', '激活索引，被选中按钮会额外添加选中样式，为空时不额外添加选中样式', 'any', ''],
                            ['onSelect', '设置按钮选中回调函数', 'function', ''],
                            ['className', '自定义样式', 'string', ''],
                        ]}
                    ></CommenTable>
                </Card>
            </div>
        );
    }
}

ButtonGroupView.title = 'ButtonGroup';
