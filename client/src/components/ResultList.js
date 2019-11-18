import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.sku}>
          <img alt={result.name} className="img-fluid" src={result.image} />
          <p id="name">{result.name}</p>
          <p id="price">Price: {result.salePrice}</p>
          <p id="price">Rating: {result.customerReviewAverage}</p>
          <button
              className="btn btn-danger mr-4"
            >
              Add
            </button>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
