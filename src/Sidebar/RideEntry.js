import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import dateformat from "dateformat";

RideEntry.propTypes = {
  ride: PropTypes.object,
};

export default function RideEntry({ ride, selectRide }) {
  const { name, time } = ride.features[0].properties;
  const displayDate = dateformat(time, "ddd, mmm d, yyyy");

  return (
    <Wrapper onClick={() => selectRide(ride.id)}>
      <Date>{displayDate}</Date> {name}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  color: var(--white);
  padding: 10px 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Date = styled.div`
  font-size: 13px;
  opacity: 0.7;
`;
