import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import bike from "Assets/bike.svg";

SidebarButton.propTypes = {
  showSidebar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
};

export default function SidebarButton({ showSidebar, setShowSidebar }) {
  if (showSidebar) return null;

  return (
    <Wrapper>
      <Button
        type="button"
        onClick={() => setShowSidebar(!showSidebar)}
        sidebarOpen={showSidebar}
      >
        <Icon src={bike} />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 1000 !important;
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 20px;
  bottom: 20px;
  background-color: ${({ sidebarOpen }) =>
    sidebarOpen ? "var(--white)" : "var(--dkBackground)"};

  box-shadow: -2px 2px 10px 2px rgba(0, 0, 0, 0.3);
  color: white;
  border-radius: 100%;
  height: 80px;
  width: 80px;
  border: none;
  z-index: 1000 !important;
`;

const Icon = styled.img`
  width: 70%;
`;
