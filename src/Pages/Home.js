import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Carousel, Row, Col } from 'antd';
import '../Component/css/style.css';

const { Header, Content, Footer } = Layout;

export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px', float:'right' }}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">About</Menu.Item>
                    <Menu.Item key="3">Profil</Menu.Item>   
                </Menu>
            </Header>
            <Content>
                <Carousel autoplay>
                    <div className="slider" >
                        <h3></h3>
                    </div>
                    <div className="slider" >
                        <h3></h3>
                    </div>
                    <div className="slider" >
                        <h3></h3>
                    </div>
                </Carousel>
                <div className="pageSambutan">
                <Row>
                    <Col md={6} className="txtJudul">
                        <span><b>Presiden</b></span><br/>
                        <span><b>dan</b></span><br/>
                        <span><b>Wakil Presiden</b></span>
                        <div style={{marginTop:'10px',marginLeft:'5px' ,width:'100px',height:'10px',backgroundColor:'#F5AA39'}}></div>
                    </Col>
                    <Col md={8} className="imgSambutan">
                        
                    </Col>
                    <Col md={6} className="txtSambutan">
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span><br/>
                        <span style={{float:'right'}}><i><b>#ATMABARA</b></i></span>
                    </Col>
                </Row>
                </div>
                <div className="pageBph">

                </div>
                <div className="page">

                </div>
            </Content>
        </Layout>
      </div>
    )
  }
}
