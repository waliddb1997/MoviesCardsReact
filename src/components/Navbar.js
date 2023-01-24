import React from "react";

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="navbar">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Navbar;
