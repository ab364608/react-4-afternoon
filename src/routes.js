import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import About from './components/About/About';
import Home from './components/Home/Home';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
<Switch>
    <Route component={Home} exact path='/' />
    <Route component={About} path='/about' />
    <Route component={ClassList} path='/classlist/:class' />
    <Route component={Student} path='/student/:id' />
</Switch>
)