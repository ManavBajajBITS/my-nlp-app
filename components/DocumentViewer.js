import React from 'react';

const DocumentViewer = ({ docName, text }) => {
  return (
    <div>
      <h2>{docName}</h2>
      <p>{text}</p>
    </div>
  );
};

export default DocumentViewer;