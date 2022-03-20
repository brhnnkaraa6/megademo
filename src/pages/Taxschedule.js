import React from 'react'
import { Row, Col, Breadcrumb, Typography } from 'antd'
import logo2 from '../img/vergitakvimilogo.png'

class Taxschedule extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "Mega"
        }
    }

    componentDidMount() {
    }

    render() {

        const { Title } = Typography;

        return (
            <div className="container">
                <Row justify='center'>
                    <Col span='24' className='outer'>
                        <img className='inner' src={logo2} style={{ width: '100%', height: "100%", objectFit: "cover" }}></img>
                    </Col>
                </Row>
                <Row justify='start'>
                    <Col span='auto'>
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">Application Center</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">Application List</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>An Application</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <div>
                    <Title>Vergi Takvimi</Title>
                    <table>
                        <tr>
                            <th>Beyanname adı</th>
                            <th>Beyanname verme zamanı*</th>
                            <th>Ödeme zamanı</th>
                        </tr>
                        <tr>
                            <td>Yıllık gelir vergisi(Basit usul)</td>
                            <td>Şubat ayının son günü</td>
                            <td>Şubat ve Haziran aylarının son günleri</td>
                        </tr>
                        <tr>
                            <td>Yıllık gelir vergisi</td>
                            <td>Mart ayının son günü</td>
                            <td>Mart ve Temmuz aylarının son günleri</td>
                        </tr>
                        <tr>
                            <td>Kurumlar vergisi</td>
                            <td>Nisan ayının son günü</td>
                            <td>Nisan ayının son günü</td>
                        </tr>
                        <tr>
                            <td>Geçici vergi 1. dönem</td>
                            <td>17 Mayıs</td>
                            <td>17 Mayıs</td>
                        </tr>
                        <tr>
                            <td>Geçici vergi 2. dönem</td>
                            <td>17 Ağustos</td>
                            <td>17 Ağustos</td>
                        </tr>
                        <tr>
                            <td>Geçici vergi 3. dönem</td>
                            <td>17 Kasım</td>
                            <td>17 Kasım</td>
                        </tr>
                        <tr>
                            <td>Geçici vergi 4. dönem</td>
                            <td>17 Şubat</td>
                            <td>17 Şubat</td>
                        </tr>
                        <tr>
                            <td>Muhtasar**</td>
                            <td>Takip eden ayın 26'sı</td>
                            <td>Beyanname verme süresi içinde</td>
                        </tr>
                        <tr>
                            <td>Damga vergisi</td>
                            <td>Takip eden ayın 26'sı</td>
                            <td>Beyanname verme süresi içinde</td>
                        </tr>
                        <tr>
                            <td>Katma değer vergisi</td>
                            <td>Takip eden ayın 26'sı</td>
                            <td>Beyanname verme süresi içinde</td>
                        </tr>
                        <tr>
                            <td>Banka ve sigorta muameleleri vergisi</td>
                            <td>Takip eden ayın 15'i</td>
                            <td>Beyanname verme süresi içinde</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }

}

export default Taxschedule