import React from "react";

export default function GenAnswers({ storedAnswers, answers, renderAnswers }) {
  return (
    <div className="game-screen">
      <table className="table">
        <tr>
          <th>Your Answers</th>
          <th className="rightpad">Correct Answers</th>
        </tr>
      </table>
      <table className="table">
        {storedAnswers.map((answer, i) => {
          return ((
            <tr key={i}>
              <td className={answer === answers[i] ? "green" : "red"}>
                {answer}
              </td>
              <td>{answers[i]}</td>
              <td>
                {answer === answers[i] ? (
                  <img
                    className="correct"
                    alt="tick"
                    src={require("../Images/tick.png")}
                  ></img>
                ) : (
                  <span role="img" aria-label="cross emoji">
                    ❌
                  </span>
                )}
              </td>
            </tr>
          ): null);
        })}
      </table>
      <p className="score">
        {
          storedAnswers.filter((answer, i) => {
            return answer === answers[i];
          }).length
        }{" "}
        / 10
      </p>
      <button
        onClick={() => {
          renderAnswers();
        }}
      >
        Back
      </button>
    </div>
  );
}
