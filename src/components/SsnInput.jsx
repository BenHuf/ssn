import React, { useState } from 'react';

const SSNInput = () => {
  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [part3, setPart3] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePart1Change = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setPart1(value);
  };

  const handlePart2Change = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2);
    setPart2(value);
  };

  const handlePart3Change = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setPart3(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ssn = `${part1}-${part2}-${part3}`;
    // You can do something with the formatted SSN here
    console.log('Submitted SSN:', ssn);
    setSubmitted(true);
    document.body.style.backgroundColor = 'lightGreen'; // Change to your desired background color
  };

  return (
    <>
      {!submitted ? (
        <>
        <p>Please enter your SSN below to determine if it has been stolen or otherwise compromised.</p>
        <form onSubmit={handleSubmit}>
          <div style={containerStyle}>
            <label htmlFor="part1">SSN:</label>
            <input
              type="text"
              id="part1"
              name="part1"
              value={part1}
              onChange={handlePart1Change}
              maxLength="3"
              required
              style={part1Style}
            />
            <span>-</span>
            <input
              type="text"
              id="part2"
              name="part2"
              value={part2}
              onChange={handlePart2Change}
              maxLength="2"
              required
              style={part2Style}
            />
            <span>-</span>
            <input
              type="text"
              id="part3"
              name="part3"
              value={part3}
              onChange={handlePart3Change}
              maxLength="4"
              required
              style={part3Style}
            />
          </div>
          <button style={buttonStyle} type="submit">Submit</button>
      </form>
      </>
      ) : (
        <div style={yesDivStyle}>Yes</div>
      )}
    </>
  );
};

const yesDivStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
  paddingTop: '50px',
};

const buttonStyle = {
  marginTop: '10px',
}

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}

const part1Style = {
  textAlign: 'center',
  width: '50px'
}

const part2Style = {
  textAlign: 'center',
  width: '40px'
}

const part3Style = {
  textAlign: 'center',
  width: '60px'
}

export default SSNInput;
