import React , {Component} from 'react';

class Search extends Component{
  constructor(props){
    super(props);
    this.search = this.search.bind(this);
  }
  search(){
    let username = this.refs.username.value;
    this.props.setName(username);
  }
  render(){
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref='username' type="text" placeholder="enter the name you search"/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

export default Search