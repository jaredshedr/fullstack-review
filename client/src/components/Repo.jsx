import React from 'react';

const Repo = (props) => (
  <div>
    <div className='repo'>
      <a href={props.repo.url}>Repo Username - {props.repo.username}</a>
      <div>Repo Name - {props.repo.name}</div>
      <div>Repo URL - {props.repo.url}</div>
      <div>Fork Quant. - {props.repo.forks}</div>
    </div>
  </div>
)

export default Repo;