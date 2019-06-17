import React, {Component} from 'react';
import Title from './title';
import Photowall from './photowall';
import AddPhoto from './addPhoto';
import {Route} from 'react-router-dom';
import {removePhoto} from '../redux/actions';
import SinglePhoto from './singlePhoto'

class Main extends Component{
  constructor()
  {
      super();
  }

 render()  {
   console.log(this.props);
    return  <div>
    <Title title="photowall"/>
    <Route exact path="/" render={()  => (
                  <div>
                    <Photowall {...this.props} />
                </div>
              )} />
              <Route  path="/AddPhoto"  render={({history})  => (
                  <AddPhoto  {...this.props} onHistory={history}/>
            )} />
            <Route  path="/Single/:id"  render={(params)  => (
                <SinglePhoto {...this.props} {...params}/>
          )} />
            </div>
  }
}
export default Main;
