import React from 'react';
import Repo from './Repo.jsx'

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      {props.repos.map((repo, index) => <Repo repo={repo} key={index}/> )}
    </div>
  </div>
)

export default RepoList;