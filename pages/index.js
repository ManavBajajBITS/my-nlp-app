import React from 'react';
import DocumentViewer from '../components/DocumentViewer';
import Summarising from '../components/Summarising';
import '../styles.css';
import '../styles/tailwind.css';

const IndexPage = () => {
  // Replace these with actual document data

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">NLP Document Interaction</h1>
          <Summarising />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;