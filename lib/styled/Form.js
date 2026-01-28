import styled from "styled-components";

// Form container
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.spacing === "compact" ? "0.75rem" : "1.5rem")};
`;

// Form row (for inline fields)
export const FormRow = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "1rem"};
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Form group (label + input wrapper)
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${(props) => props.flex || "1"};
`;

// Form label
export const FormLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;

  ${(props) =>
    props.required &&
    `
    &::after {
      content: ' *';
      color: #ef4444;
    }
  `}
`;

// Form actions (buttons at bottom)
export const FormActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: ${(props) => props.marginTop || "1.5rem"};
  justify-content: ${(props) => props.justify || "flex-start"};
`;

// Helper text
export const HelperText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

// Error text
export const ErrorText = styled.p`
  font-size: 0.875rem;
  color: #ef4444;
  font-weight: 500;
  margin: 0;
`;
