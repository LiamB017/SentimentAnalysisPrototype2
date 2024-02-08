import React, { useState } from "react";

const TopComments = ({ responseData }) => {
  // Remove the useState for responseData here
  console.log(responseData, "TopComments has responseData");

  return (
    <div>
      {responseData && (
        <div>
          <h1>Top Comments</h1>
          <div>
            <h3>Comment 1</h3>
            <p>{responseData.top3comments[0]}</p>
          </div>
          <div>
            <h3>Comment 2</h3>
            <p>{responseData.top3comments[1]}</p>
          </div>
          <div>
            <h3>Comment 3</h3>
            <p>{responseData.top3comments[2]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopComments;
