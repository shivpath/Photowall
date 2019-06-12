import React from 'react';



function Photo(props)
{
  return  <figure className="figure">
   <img className="photo" src={props.value.imageLink} alt={props.value.desc} ></img>
   <figcaption>
   <p> {props.value.desc} </p>
   </figcaption>
   <div className="button-container">
   <button onClick={()=> props.removePhoto(props)} > Remove</button>
   </div>
   </figure>
}

//
// class Photo extends Component
// {
//   render(){
//     return  <figure className="figure">
//      <img className="photo" src={this.props.value.imageLink} alt={this.props.value.desc} ></img>
//      <figcaption>
//      <p> {this.props.value.desc} </p>
//      </figcaption>
//      <div className="button-container">
//      <button className="remove-button"> Remove</button>
//      </div>
//      </figure>
//     }
// }
export default Photo;
