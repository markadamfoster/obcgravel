import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";

import SidebarButton from "./SidebarButton";
import { rides } from "../Data/rides";
import RideEntry from "./RideEntry";

Sidebar.propTypes = {
  setShowSidebar: PropTypes.func,
};

export default function Sidebar({ selectedRide, setSelectedRide }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <AnimatePresence>
        {showSidebar ? (
          <SidebarWrapper
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            exit={{ width: 0 }}
          >
            <RideList>
              {rides.map((ride) => (
                <RideEntry
                  ride={ride}
                  selectRide={(id) => setSelectedRide(id)}
                />
              ))}
            </RideList>

            <CloseButton onClick={() => setShowSidebar(false)}>
              close
            </CloseButton>
          </SidebarWrapper>
        ) : null}
      </AnimatePresence>

      <SidebarButton
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
}

const SidebarWrapper = styled(motion.div)`
  /* position: absolute; */
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  flex-shrink: 0;
  background: var(--blue1);
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div``;

const RideList = styled.ul`
  flex: 1;
`;
