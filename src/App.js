import React, { useState, useEffect } from "react";
import { Typography } from "antd"; // Import Typography component from Ant Design
import "./App.css";
import "./styles.scss";

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLogo(false);
    }, 3500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {showLogo ? (
        <div className="mainPageContainer">
          {/* Display the image using an <img> element */}

          <div className="logo">
            <img
              src={`/images/myLogo.png`}
              alt="myLogo"
              style={{ height: "150px", width: "350px" }}
            />
            <Typography.Title
              level={1}
              style={{
                fontFamily: "'Cherry Cream Soda', cursive",
                fontWeight: 300,
                color: "#767A57",
              }}
            >
              Discover creativity in my Portfolio
            </Typography.Title>
          </div>
        </div>
      ) : (
        <div className="mainPageContainer">
          <Typography.Title
            level={1}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Landing Page
          </Typography.Title>
        </div>
      )}
    </div>
  );
}

export default App;
