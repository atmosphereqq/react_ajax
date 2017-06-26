import React , {Component} from 'react';
import Search from '../Search/Search';
import List from '../List/List';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:''
    };
    this.setName = this.setName.bind(this);
  }
  setName(username){
    this.setState({username});
  }
  render(){
    return (
      <div className="container">
        <Search setName={this.setName}/>
        <List username={this.state.username}/>
      </div>
    )
  }
}

export default App