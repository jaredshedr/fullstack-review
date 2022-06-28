import React from 'react';
import Repo from './Repo.jsx'

const RepoList = (props) => (
  <div>
    <h4> Users Repos </h4>
    <h4> There are {props.changed} new imports</h4>
    <h4>There are {props.repos.length} repos.</h4>
    <div>
      {props.repos.map((repo, index) => <Repo repo={repo} key={index}/> )}
    </div>
  </div>
)

export default RepoList;