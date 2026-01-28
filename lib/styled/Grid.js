import styled from "styled-components";

// 12-column grid system
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${(props) => props.gap || "1rem"};
  width: 100%;
`;

// Grid column with dynamic span
export const GridColumn = styled.div`
  grid-column: span ${(props) => props.span || 12};

  @media (max-width: 768px) {
    grid-column: span ${(props) => props.spanMobile || 12};
  }
`;

// Simple 2-column grid
export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.gap || "1rem"};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Simple 3-column grid
export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.gap || "1rem"};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Simple 4-column grid
export const GridFour = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.gap || "1rem"};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Flex container
export const Flex = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "0.5rem"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "flex-start"};
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;
