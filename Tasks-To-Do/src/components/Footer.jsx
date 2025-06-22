import React from "react";
const Footer = ({ setFilter, currentFilter }) => {
  return (
    <div className="footer">
      <button
        onClick={() => setFilter("ALL")}
        className={currentFilter === "ALL" ? "active" : " "}
      >
        ALL
      </button>
      <button
        onClick={() => setFilter("ACTIVE")}
        className={currentFilter === "ALL" ? "active" : " "}
      >
        ACTIVE
      </button>
      <button
        onClick={() => setFilter("COMPLETED")}
        className={currentFilter === "ALL" ? "active" : " "}
      >
        COMPLETED
      </button>
    </div>
  );
};
export default Footer;
