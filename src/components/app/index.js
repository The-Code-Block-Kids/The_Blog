import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Favicon from 'react-favicon';

import ScrollToTop from '../scroll-to-top';
import AuthRedirect from '../auth-redirect';
import AuthLanding from '../auth-landing';
import ArticleForm from '../article-form';
import AuthorProfile from '../author-profile';
import Header from '../header';
import Footer from '../footer';
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
          {/* <Favicon url={}/> */}
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
          <Route exact path={ROUTES.LOGIN} component={AuthLanding}/>
          <Route exact path={ROUTES.SIGNUP} component={AuthLanding}/>
          <Route exact path={ROUTES.CREATE} component={ArticleForm}/>
          <Route path={ROUTES.PROFILE} component={AuthorProfile}/>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
