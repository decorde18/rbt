import styled from "styled-components";

// Page container
export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 2rem;
`;

// Card container
export const Card = styled.div`
  max-width: ${(props) => props.maxWidth || "1024px"};
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  border-radius: 0.375rem;
  padding: ${(props) => props.padding || "1.5rem"};
`;

// Card header
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.marginBottom || "1rem"};
`;

// Card title
export const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

// Alert/Toast messages
export const Alert = styled.div`
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;

  ${(props) =>
    props.variant === "success" &&
    `
    background-color: #dcfce7;
    border: 1px solid #86efac;
    color: #166534;
  `}

  ${(props) =>
    props.variant === "error" &&
    `
    background-color: #fee2e2;
    border: 1px solid #fca5a5;
    color: #991b1b;
  `}
  
  ${(props) =>
    props.variant === "info" &&
    `
    background-color: #dbeafe;
    border: 1px solid #93c5fd;
    color: #1e40af;
  `}
`;

// Empty state
export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

export const EmptyStateTitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const EmptyStateDescription = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
`;
