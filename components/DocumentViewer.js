import React from 'react';

const DocumentViewer = ({ docName, text }) => {
  return (
    <div>
      <h2 className="text-lg text-gray-600 mb-2 font-bold">{docName}</h2>
      <p className="text-md text-gray-600 mb-2">{text}</p>
    </div>
  );
};

export default DocumentViewer;