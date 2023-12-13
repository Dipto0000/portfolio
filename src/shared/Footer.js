import React from "react";

const footer = () => {
  return (
    <footer className="footer p-4 bg-base-300">
      <aside>
        <h4>Follow: </h4>
        <p>&copy; {new Date().getFullYear()} - Shafiqul Islam Sohan</p>
      </aside>
    </footer>
  );
};

export default footer;
