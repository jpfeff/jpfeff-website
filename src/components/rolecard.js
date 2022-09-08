import React from 'react';

function RoleCard(props) {
  const role = props.text;

  return (
    <div className="role-card">
      <h2 className="card-text">{role}</h2>
    </div>
  );
}

export default RoleCard;
