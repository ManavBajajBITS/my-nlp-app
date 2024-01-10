import React, { useState } from 'react';
import axios from 'axios';
import DocumentViewer from './DocumentViewer';
import SelectDropdown from './SelectDropdown';

const Summarising = () => {
  const [question, setQuestion] = useState('');
  const [docName, setDocName] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async () => {
    try {
      setLoading(true);
      setDocName(question);
      console.log("question123", question)
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
      <h3 className="text-lg text-gray-600 mb-2 font-bold">Summary Generator</h3>
      <label className="text-lg text-gray-600 mb-8">
        Document Name:
        {/* <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} /> */}
        {/*<RadioButtons setQuestion={setQuestion} question={question}/>  */}
        <SelectDropdown setQuestion={setQuestion} question={question}/>  
        {console.log("question222", question)}      
      </label>
      {/*<button onClick={handleQuestionSubmit} disabled={loading}>*/}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-2" onClick={handleQuestionSubmit} disabled={loading}>
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