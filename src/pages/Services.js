import React from 'react'
import { Row, Col, Breadcrumb, Typography} from 'antd'

class Services extends React.Component {

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
                        <img className='inner' src="https://cdnntr1.img.sputniknews.com/img/07e5/08/1f/1048476386_0:0:740:417_1920x0_80_0_0_e0a0e5516645d72631b8192440da132a.jpg" style={{width: '100%',height:"100%",objectFit:"cover"}}></img>
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
                <Title>Hizmetlerimiz</Title>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        )
    }

}

export default Services