import React , {Component} from 'react';
import axios from 'axios';

//https://api.github.com/search/users?q=${searchName}
class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      startView :true,
      loading:false,
      users:null,
      errMsg:null
    }
  }
  componentWillReceiveProps(nextprops){
    let {username} = nextprops;
    let url = `https://api.github.com/search/users?q=${username}`;
    this.setState({
      startView:false,
      loading:true
    });
    axios.get(url)
      .then((res)=>{
      this.setState({
        loading:false,
        users:res.data.items
      });
      })
      .catch((err)=>{
        this.setState({
          loading:false,
          errMsg:err
        })
      })
  }
  render(){
    let {startView, loading, users, errMsg} = this.state;
    if(startView){
      return <div>enter something</div>
    }else if(loading){
      return <div>loading...</div>
    }else if(users){
      return (
        <div className="row">
          {
            users.map((user,index)=>{
              return (
                <div className="card" key={index}>
                  <a href={user.html_url} target="_blank">
                    <img src={user.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              )
            })
          }
        </div>
      )
    }else{
      return <div>something wrong</div>
    }
  }
}

export default List