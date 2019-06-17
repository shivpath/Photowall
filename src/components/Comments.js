import React, {Component} from 'react'

class Comments extends Component
{
  constructor()
  {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event)
  {
    event.preventDefault();
  const comment = event.target.elements.comment.value;
  this.props.onComment(comment, this.props.id);
  }
  render()
  {
    return ( <div>
      {
        this.props.comments.map((comment, index) => <p key={index} className="paragraph">{comment}</p>
      )
      }
      <form className="Comments" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="comment" name="comment"/>
      <input type="submit" hidden/>
      </form>
      </div>
    )
  }
}

export default Comments
