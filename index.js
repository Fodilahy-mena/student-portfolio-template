import React from 'react';
import ReactDom from 'react-dom';
import Blog from './react/Blog';
import FormFilter from './react/FormFilter';
import Gallery from './react/Gallery';
import PersonalDetails from './react/PersonalDetails';
import Proficiencies from './react/Proficiencies';
import Projects from './react/Projects';

ReactDom.render(<PersonalDetails/>, document.getElementById('personal_details'));
ReactDom.render(<Gallery/>, document.getElementById('gallery'));
ReactDom.render(<Proficiencies/>, document.getElementById('proficiencies'));
ReactDom.render(<Blog/>,document.getElementById('blog'));
ReactDom.render(<FormFilter/>,document.getElementById('filter'));
ReactDom.render(<Projects/>,document.getElementById('projects'));






