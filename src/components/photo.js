import React from 'react';
import {Link} from 'react-router-dom';

function Photo(props)
{
  console.log(props)
  return  <figure className="figure">
  <Link to={`Single/${props.post.id}`} >
   <img className="photo" src={props.post.imageLink} alt={props.post.desc} ></img>
   </Link>
   <figcaption>
   <p> {props.post.desc} </p>
   </figcaption>
   <div className="button-container">
   <button onClick={() => {
      props.removePhoto(props.index)
      props.history.push("/")
    }
    } > Remove</button>
   </div>
   </figure>
}
export default Photo;
