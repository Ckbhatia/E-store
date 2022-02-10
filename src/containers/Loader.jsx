import React from "react";
import styled from "styled-components";

const Loader = ({margin, color}) => {
  return (
    <StyledLoaderContainer margin={margin} color={color}>
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </StyledLoaderContainer>
  );
}

export default Loader;

const StyledLoaderContainer = styled.div`
  ${({margin}) => margin ? `margin: ${margin}` : ''};

  .text-center {
    color: ${({color}) => color || '#000'};
  }

  .spinner-border {
    width: 3rem;
    height: 3rem;
  }
`;