import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount () {
    axios.get('/repos')
      .then((res) => {
        console.log('intial page load response', res.data)
        this.setState({
          repos: res.data
        })
      })
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    let userName = {username:term}
    $.ajax({
      type: "POST",
      url: "/repos",
      contentType: 'application/json',
      data: JSON.stringify(userName),
      success: (response) => {
        console.log('data returned', response);
        this.setState({
          repos: response
        })
      },
      error: () => {console.log('post request fail')}
    })

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));