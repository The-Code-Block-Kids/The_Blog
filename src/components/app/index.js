import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Favicon from 'react-favicon';

import favicon from '../../assets/svgs/icomoon/infinite.svg';
import ScrollToTop from '../scroll-to-top';
import AuthRedirect from '../auth-redirect';
import Login from '../login';
import ArticleForm from '../article-form';
import Header from '../header';
import ROUTES from '../../routes';
import '../../style/main.scss';

// -------------------------------------------------------------------------------------------------
// COMPONENT IMPORTS
// -------------------------------------------------------------------------------------------------
import Landing from '../landing';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Favicon url={favicon}/>
          <Helmet>
            <meta charSet="utf-8"/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta property="og:title" content="Magnifico 7 Group Blog" />
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" content="" /> */}
            {/* <meta property="og:image" content="../../assets/site-preview.png" /> */}
          </Helmet>
          <Header/>
          <Route path='*' component={AuthRedirect}/>
          <Route exact path={ROUTES.LANDING} component={Landing}/>
          <Route exact path={ROUTES.LOGIN} component={Login}/>
          <Route exact path={ROUTES.CREATE} component={ArticleForm}/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
