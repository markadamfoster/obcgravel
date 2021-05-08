import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

RideEntry.propTypes = {
  ride: PropTypes.object,
};

export default function RideEntry({ ride, selectRide }) {
  const { name, time } = ride.features[0].properties;

  return (
    <Wrapper onClick={() => selectRide(ride.id)}>
      <Date>{time}</Date> {name}
    </Wrapper>
  );
}

const Wrapper = styled.li``;

const Date = styled.div`
  font-size: 12px;
`;
