import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import { Link, Route } from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header class="header-color" title="PROJECTS by David A. Epps" scroll>
            <Navigation>
                <Route exact path={`/home`} render={ (routerProps) => < Main routerProps={routerProps} setUpGame={this.setUpGame} />} />
                <Link to="#introduction">Introduction</Link>
                <Link to="#services">Services</Link>

                <Link to="#contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Projects">
            <Navigation className="drawer-nav">
                <a href="/">
                  HTML/CSS/JavaScript</a>
                <a href="/">jQuery/Express/MongoDB</a>
                <a href="/">RESTful.CRUD/React/Django</a>
                <a href="/">Full Stack</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
