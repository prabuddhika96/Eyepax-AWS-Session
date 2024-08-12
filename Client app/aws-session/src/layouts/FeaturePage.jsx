import React from "react";

function FeaturePage({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default FeaturePage;
