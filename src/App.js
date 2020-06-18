import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import { Home, Favorites } from './Pages';
import { Header, Footer, Container } from './Layout';

const App = () => {
  const routes = (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/favorites' component={Favorites} />
    </Switch>
  );
  return (
    <Fragment>
      <Header />
      <Container>{routes}</Container>
      <Footer />
    </Fragment>
  );
};

export default App;
