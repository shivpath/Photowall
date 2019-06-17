//This is the file where all actions (Like remove photo or add photo) written

export function removePhoto(index)
{
    return {
      type : 'REMOVE_POST',
      index: index
    }
}

export function addPost(post)
{
  return {
      type: 'ADD_POST',
      post
  }
}

export function showPhoto(props)
{
  return {
    type: 'SHOW_POST',
    post: props.post
  }
}

export function addComment(comment, postId)
{
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  }
}
