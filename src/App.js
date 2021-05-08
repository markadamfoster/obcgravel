import React, { useState } from "react";
import styled from "styled-components";

import Map from "./Map";
import Sidebar from "./Sidebar";

function App() {
  const [selectedRide, setSelectedRide] = useState(null);

  return (
    <Wrapper>
      <Sidebar selectedRide={selectedRide} setSelectedRide={setSelectedRide} />

      <Map selectedRide={selectedRide} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;
