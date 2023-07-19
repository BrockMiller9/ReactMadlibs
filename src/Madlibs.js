import React, { useState } from "react";

const Madlib = () => {
  const [noun1, setNoun1] = useState("");
  const [noun2, setNoun2] = useState("");
  const [adjective, setAdjective] = useState("");
  const [color, setColor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setNoun1("");
    setNoun2("");
    setAdjective("");
    setColor("");
    setSubmitted(false);
  };

  return (
    <div>
      <h1>Madlibs!</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Noun 1:
            <input
              type="text"
              value={noun1}
              onChange={(e) => setNoun1(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Noun 2:
            <input
              type="text"
              value={noun2}
              onChange={(e) => setNoun2(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Adjective:
            <input
              type="text"
              value={adjective}
              onChange={(e) => setAdjective(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Color:
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <div>
          <p>
            MadLibs are everyone's {adjective} way of passing {noun1} on a{" "}
            {color} {noun2}.{" "}
          </p>
          <button onClick={resetForm}>Try Again</button>
        </div>
      )}
    </div>
  );
};

export default Madlib;
