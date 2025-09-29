"use client";

import styled from "styled-components";
import { Search } from "lucide-react";
import { format } from "date-fns";

const StyledHeader = styled.header`
  background: white;
  padding: 16px 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: between;
  gap: 24px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  background: #f8fafc;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

function Header() {
  const formattedDate = format(new Date(), "EEEE, MMMM d, yyyy");

  return (
    <StyledHeader>
      <HeaderLeft>
        {/* <MobileMenuButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton> */}

        <SearchContainer>
          <SearchIcon>
            <Search size={20} />
          </SearchIcon>
          <SearchInput placeholder='Search clients, forms, or sessions...' />
        </SearchContainer>
      </HeaderLeft>

      <HeaderRight>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ fontSize: "14px", color: "#64748b" }}>
            {formattedDate}
          </div>
        </div>
      </HeaderRight>
    </StyledHeader>
  );
}

export default Header;
