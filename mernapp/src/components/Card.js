import React from "react";

export const Card = () => {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F36%2F123536-050-95CB0C6E%2FVariety-fruits-vegetables.jpg&tbnid=rMZ8I5b2kc3W3M&vet=12ahUKEwi1mLHSna7_AhVT2XMBHVxYBI4QMygBegUIARDmAQ..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Ffood&docid=DJp6ra_owrcaaM&w=1600&h=1068&itg=1&q=food&hl=en&ved=2ahUKEwi1mLHSna7_AhVT2XMBHVxYBI4QMygBegUIARDmAQ" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100  bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
