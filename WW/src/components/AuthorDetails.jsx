import React from 'react';
import '../index.css';

const AuthorDetails = ({ name, bio }) => {
  return (
    <div className="author-details">
      <h3>Автор: {name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default AuthorDetails;