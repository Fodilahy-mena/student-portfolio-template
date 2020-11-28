import React from 'react';
import ReactDom from 'react-dom';
import Blog from './react/Blog';
import Gallery from './react/Gallery';
import PersonalDetails from './react/PersonalDetails';
import Proficiencies from './react/Proficiencies';

ReactDom.render(<PersonalDetails/>, document.getElementById('personal_details'));
ReactDom.render(<Gallery/>, document.getElementById('gallery'));
ReactDom.render(<Proficiencies/>, document.getElementById('proficiencies'));
ReactDom.render(<Blog/>,document.getElementById('blog'));





