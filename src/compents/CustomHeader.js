import React from 'react'
import { Menu } from 'antd';
import { Row, Col } from 'antd';
const { SubMenu } = Menu;
class CustomHeader extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      current: 'app',
    }
  }

  componentDidMount() {
  }

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {

    const { current } = this.state;
    return (
      <div className='layout-padding header'>
        <Row justify='end'>
          <Col span={'auto'}>
            Burhan
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            Logo
          </Col>
          <Col span={18}>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
              <Menu.Item key="mail">
                ANASAYFA
              </Menu.Item>
              <SubMenu key="SubMenu" title="HAKKIMIZDA">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:1">Biz Kimiz</Menu.Item>
                  <Menu.Item key="setting:2">Amacımız</Menu.Item>
                  <Menu.Item key="setting:2">Ekibimiz</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu" title="HİZMETLERİMİZ">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu" title="HESAPLAMALAR">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu><SubMenu key="SubMenu" title="VERGİ TAKVİMİ">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu" title="MEDYA">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu" title="İLETİŞİM">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }

}

export default CustomHeader