
import React, { useState } from 'react';

const RadioButtons = ({question, setQuestion}) => {
  
    const handleOptionChange = (e) => {
        setQuestion(e.target.value);
    };
  
    return (
      <div>
        <label>
          <input
            type="radio"
            value="dairy-farm_ar2020pdf"
            checked={question === 'dairy-farm_ar2020pdf'}
            onChange={handleOptionChange}
          />
          Dairy Farm AR 2020 PDF
        </label>
  
        <label>
          <input
            type="radio"
            value="shell-tax-contribution-report-2020pdf"
            checked={question === 'shell-tax-contribution-report-2020pdf'}
            onChange={handleOptionChange}
          />
          Shell Tax Contribution Report 2020 PDF
        </label>
  
        <label>
          <input
            type="radio"
            value="with-highlights-comments-barclays-country-snapshot-2021pdf"
            checked={
                question === 'with-highlights-comments-barclays-country-snapshot-2021pdf'
            }
            onChange={handleOptionChange}
          />
          With Highlights Comments Barclays Country Snapshot 2021 PDF
        </label>
  
        {/* You can access the selected option using selectedOption state */}
        <p>Selected Option: {question}</p>
      </div>
    );
  };

  export default RadioButtons;