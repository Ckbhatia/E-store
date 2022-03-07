import React from "react";
import styled from "styled-components";

const Error = ({ resetErrorBoundary }) => {
  const handleClick = () => {
    if (window) {
      localStorage.clear();
      resetErrorBoundary();
      window.location = "/";
    }
  };

  return (
    <StyledMainContainer>
      <div>
        <h1>Something went wrong</h1>
        <div>
          <button onClick={handleClick} className="btn">
            Reload
          </button>
        </div>
      </div>
    </StyledMainContainer>
  );
};

export default Error;

const StyledMainContainer = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 200px;
  
  h1 {
    font-size: 2rem;
    color: var(--MainGreen);
  }
  
  > div {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font-size: 16px;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid var(--MainGreen);
    color: var(--MainGreen);
    width: 142px;
  }

  @media (max-width: 768px) {
    button {
      width: 100px;
      font-size: 14px;
    }

    h1 {
      font-size: 1.8rem;
    }
  }
`;
