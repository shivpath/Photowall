import React from 'react';
import stylesheet from '../css/stylesheet.css'
import Photo from './photo';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
function Photowall (props)
{
  return <div>
          <Link className="addIcon" to='/AddPhoto'></Link>
          <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} removePhoto={props.onRemove} value={post}/>)}
          </div>
        </div>
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemove:  PropTypes.func.isRequired
}

export default Photowall;
