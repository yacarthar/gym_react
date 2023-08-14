import React from "react";

export const PageLoader = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div
      style={{
        height: "5rem",
        width: "5rem",
        margin: "auto",
        animation: "spin 2s infinite linear",
      }}
    >
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};
