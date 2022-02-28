import React from 'react'
import { Menu } from 'antd';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import logo from '../img/header_logo.png'
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
          <img className='logo' src={logo}/>
          </Col>
          <Col span={18}>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
              <Menu.Item key="mail">
              <Link to="/">ANASAYFA</Link>
              </Menu.Item>
              <SubMenu key="SubMenu1" title={<Link to="/about">HAKKIMIZDA</Link>}>
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:1"><Link to="/about">Biz Kimiz</Link></Menu.Item>
                  <Menu.Item key="setting:2">Amacımız</Menu.Item>
                  <Menu.Item key="setting:3">Ekibimiz</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu2" title={<Link to="/services">HİZMETLERİMİZ</Link>}>
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:4">Option 1</Menu.Item>
                  <Menu.Item key="setting:5">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu3" title="HESAPLAMALAR">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:6">Option 1</Menu.Item>
                  <Menu.Item key="setting:7">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu><SubMenu key="SubMenu4" title="VERGİ TAKVİMİ">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:8">Option 1</Menu.Item>
                  <Menu.Item key="setting:9">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu5" title="MEDYA">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:10">Option 1</Menu.Item>
                  <Menu.Item key="setting:11">Option 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="SubMenu6" title="İLETİŞİM">
                <Menu.ItemGroup title="">
                  <Menu.Item key="setting:12">Option 1</Menu.Item>
                  <Menu.Item key="setting:13">Option 2</Menu.Item>
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