import React from 'react'
import { Row, Col, Divider, List } from 'antd'
import { LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';
const corporate = [
  'Hakkımızda',
  'Biz Kimiz',
  'Amacımız',
  'Ekibimiz',
  'Hizmetler',
];
const others = [
  'Hesaplamalar',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const more = [
  'Kişisel verilerin korunması',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
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
        <Row gutter={16} justify='center'>
          <Col className="gutter-row" span='auto'>
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
          <Col className="gutter-row" span='auto'>
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
          <Col className="gutter-row" span='auto'>
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
          <Col className="gutter-row" span='auto'>
            <div style={{width: '500px', height: '250px', backgroundColor: 'black'}}></div>
          </Col>
        </Row>
        <Divider style={{ 'background-color': '#9597A3' }} />
        <Row justify='space-between'>
          <Col span='auto'>
            <div>
              MEga Denetim
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