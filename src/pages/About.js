import React from 'react'
import { Row, Col, Breadcrumb } from 'antd'
class About extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "Mega"
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="container" style={{ height: "750px" }}>
                <Row justify='center'>
                    <Col span='24'>
                        <img src="https://cdnntr1.img.sputniknews.com/img/07e5/08/1f/1048476386_0:0:740:417_1920x0_80_0_0_e0a0e5516645d72631b8192440da132a.jpg" style={{width: '100%', height: '300px'}}></img>
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
                <Row justify='start'>
                    <Col span='auto'>
                        Mega
                    </Col>
                </Row>
            </div>
        )
    }

}

export default About