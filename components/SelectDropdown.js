import React, { useState } from 'react';
import Select from 'react-select';

const SelectDropdown = ({question, setQuestion}) => {

    const options = [
        { value: 'dairy-farm_ar2020pdf', label: 'Dairy Farm AR 2020 PDF' },
        { value: 'shell-tax-contribution-report-2020pdf', label: 'Shell Tax Contribution Report 2020 PDF' },
        { value: 'with-highlights-comments-barclays-country-snapshot-2021pdf', label: 'With Highlights Comments Barclays Country Snapshot 2021 PDF' },
    ];

    const handleSelectChange = (selectedQuestion) => {
        setQuestion(selectedQuestion.value)    
    };

    const handleOptionChange = (e) => {
        setQuestion(e.target.value);
    };

    return (
        <div>
            <Select
                value={options.find((option) => option.value === question)}
                onChange={handleSelectChange}
                options={options}
                isSearchable
                placeholder="Select a document"
            />
            {console.log("question", question, "value:")}
            {/*selectedQuestion && <p>Selected Question: {selectedQuestion.label}</p>*/}
        </div>
    );
};

export default SelectDropdown;