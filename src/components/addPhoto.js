import React, {Component} from 'react';

class AddPhoto extends Component
{
  constructor()
  {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(event)
{
  event.preventDefault();
  const desc = event.target.elements.Description.value;
  const imageLink = event.target.elements.Link.value;
  if(desc && imageLink)
  {
      const post = {
        id: 0,
        desc: desc,
        imageLink: imageLink
        }
      this.props.onAddPhoto(post);
  }
}
  render()
  {
    return (
      <div>
      <h1> Photowall</h1>
      <div className="form">
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Link" name="Link"/>
      <input type="text" placeholder="Description" name="Description"/>
      <button>Post</button>
       </form>
      </div>
      </div>
    )
  }
}

export default  AddPhoto
