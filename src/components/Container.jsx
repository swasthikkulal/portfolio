import React from "react";

const Container = () => {
  return (
    <>
      <div className="container">
        <div className="mongo">
          <img src="MongoDB.png" alt="MongoDB" style={{ width: "150px" }} />
        </div>
        <div className="express">
          <img src="ExpressJS.png" alt="Express" style={{ width: "120px" }} />
        </div>
        <div className="react">
          <img src="React.png" alt="React" style={{ width: "120px" }} />
        </div>
        <div className="next">
          <img src="n.png" alt="Next.js" style={{ width: "120px" }} />
        </div>
      </div>
    </>
  );
};

export default Container;
