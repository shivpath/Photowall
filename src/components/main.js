import React, {Component} from 'react';
import Title from './title';
import Photowall from './photowall';
import AddPhoto from './addPhoto';
import {Route} from 'react-router-dom'

class Main extends Component{
  constructor()
  {
      super();
      this.state = {
        posts: [{id: '1', desc:'Sample Image',  imageLink:'https://www.w3schools.com/images/picture.jpg'}, {id: '2', desc:'Sample Image',  imageLink:'https://www.w3schools.com/images/picture.jpg'}, {id: '3', desc:'Sample Image',  imageLink:'https://www.w3schools.com/images/picture.jpg'}
      ],
      screen : 'photos'
      }
      this.removePhoto = this.removePhoto.bind(this);
  }

  removePhoto(removeposts)
  {
    this.setState((state) => ({
      posts : this.state.posts.filter(post => post !== removeposts.value)
    }));
  }

  AddPhoto(postsubmitted)
  {
    console.log("Entered in AddPhoto");
    this.setState((state) => ({posts: this.state.posts.concat([postsubmitted])}));
  }

 render()  {
    return  <div>
                <Route exact path="/" render={()  => (
                  <div>
                    <Title title="photowall"/>
                    <Photowall posts={this.state.posts} onRemove={this.removePhoto} />
                </div>
              )} />
              <Route  path="/AddPhoto"  render={({history})  => (
                  <AddPhoto onAddPhoto={(post) => {
                      this.AddPhoto(post);
                      history.push('/')
                  }} />
            )} />
          </div>
  }
}
export default Main;
