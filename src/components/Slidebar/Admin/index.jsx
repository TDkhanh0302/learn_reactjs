import React from 'react';
import PropTypes from 'prop-types';

Admin.propTypes = {};

function Admin(props) {
  return (
    <div className="admin">
      <div className="admin__avt"></div>
      <span className="admin__name">Mr. Owen Brady</span>
      <span className="position">Admin</span>
    </div>
  );
}

export default Admin;
