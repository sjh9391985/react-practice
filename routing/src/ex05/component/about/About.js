import React from 'react';
import {Route} from 'react-router-dom';
import SiteLayout from '../../layout/SiteLayout';
import Navigation from './Navigation';
import Me from './Me';
import Location from './Location';

export default function About() {
    return (
        <SiteLayout>
            <Route component={Navigation} /> 
            <Route exact path={'/about/me'} component={Me}/>
            <Route path={'/about/loaction'} component={Location}/>
        </SiteLayout>
    )
}