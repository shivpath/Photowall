import React, {Component} from 'react';
import Photo from './photo'
import Comments from './Comments'

class SinglePhoto extends Component
{
  render()
{
    const {match, posts} = this.props;
    const id = Number(match.params.id);
    const post = posts.find((post) => post.id === id)
    console.log(post);
    const comment = this.props.comments[id] || [];
    const index = this.props.posts.findIndex((post) =>  post.id === id )
    return <div className="single-photo">
      <Photo post={post} {...this.props} index={index}/>
      <Comments onComment={this.props.addComment} comments={comment} id={id}/>
        </div>
  }



}

export default SinglePhoto
