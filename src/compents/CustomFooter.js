import React from 'react'
import { Row, Col, Divider, List } from 'antd'
import { LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
import logo from '../img/footer_logo.png'
const corporate = [
  'Hakkımızda',
  'Biz Kimiz',
  'Amacımız',
  'Ekibimiz',
  'Hizmetler',
];
const others = [
  'Hesaplamalar',
  'Vergi Takvimi',
  'Güncel Bilgiler',
  'Medya',
  'İletişim',
];
const more = [
  'Kişisel verilerin',
  'Korunması',
  'Kullanım',
  'Koşulları ve',
  'Gizlilik Politikası',
];
class CustomFooter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="layout-padding">
        <Divider style={{ 'background-color': '#9597A3' }} />
        <Row gutter={16} justify='center' style={{margin:'0 6rem'}}>
          <Col className="gutter-row" span='6'>
            <List
              header={<div class="footer-header">KURUMSAL</div>}
              bordered={false}
              dataSource={corporate}
              renderItem={item => (
                <List.Item>
                  {item}
                </List.Item>
              )}
            />
          </Col>
          <Col className="gutter-row" span='6'>
            <List
              header={<div class="footer-header">DİĞER</div>}
              bordered={false}
              dataSource={others}
              renderItem={item => (
                <List.Item>
                  {item}
                </List.Item>
              )}
            /></Col>
          <Col className="gutter-row" span='6'>
            <List
              header={<div class="footer-header">DAHA FAZLA</div>}
              bordered={false}
              dataSource={more}
              renderItem={item => (
                <List.Item>
                  {item}
                </List.Item>
              )}
            /></Col>
          <Col className="gutter-row" span='6'>
            <img className='logo' src={logo}/>
          </Col>
        </Row>
        <Divider style={{ 'background-color': '#9597A3' }} />
        <Row justify='space-between'>
          <Col span='auto'>
            <div>
              <p style={{'font-weight': 'bold'}}>©2021 Mega Denetim Tüm Hakları Saklıdır.</p>
            </div>
          </Col>
          <Col span='auto'>
            <Row gutter={16}>
              <Col className="gutter-row" span={'auto'}>
                <div className='footer-icon-wrapper'>
                  <LinkedinOutlined style={{fontSize: '18px', color: '#EFEFEF'}} />
                </div>
              </Col>
              <Col className="gutter-row" span={'auto'}>
                <div className='footer-icon-wrapper'>
                  <YoutubeOutlined style={{fontSize: '18px', color: '#EFEFEF'}} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }

}

export default CustomFooter