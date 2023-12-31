import React, { useState } from 'react';
import axios from 'axios';
import DocumentViewer from './DocumentViewer';

const Summarising = () => {
  const [question, setQuestion] = useState('');
  const [docName, setDocName] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async () => {
    try {
      setLoading(true);
      setDocName(question);
      const response = await axios.get(`http://localhost:8000/summarize/${question}`);
      setAnswer(response.data.summary);
    } catch (error) {
      console.error('Error fetching answer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Summary</h3>
      <label>
        Document Name:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <button onClick={handleQuestionSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {answer && (
        <div>
          <DocumentViewer docName={docName} text={answer} />
        </div>
      )}
    </div>
  );
};

export default Summarising;