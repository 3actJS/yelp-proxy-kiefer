import React from 'react';
import styled from 'styled-components';
import calendarHelpers from '../calendarHelpers.js';
import DropdownContainer from './DropdownContainer.jsx';
import Calendar from './Calendar.jsx';

const CalendarDropdownBox = styled.div`
  width: 299px;
  border: thin solid black;
  display: inherit;
  padding: 13px 15px;
  border: 1px solid #bbbac0;
  border-radius: 4px;
  margin-bottom: 8px;
  position: relative;
  font-weight: 400;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  transition: border-color .2s ease-in-out;
  :hover {
    border-color: #757280;
  }
`;

const Svg = styled.svg`
  height: 18px;
  width: 18px;
  fill: #333;
`;

const SvgSpan = styled.span`
  position: absolute;
  right: 16px;
  top: 14px;
  pointer-events: none;
`;

const CalendarDropdownButton = (props) => (
  <CalendarDropdownBox onClick={props.showCalendar}>
    {calendarHelpers.idToLongDate(props.selectedDateId)}
    <SvgSpan>
      <Svg xmlns='http://www.w3.org/2000/svg'>
      <path d='M8 10.5a1 1 0 0 1-.7-.29l-3.06-3a1 1 0 1 1 1.41-1.42L8 8.1l2.35-2.31a1 1 0 0 1 1.41 1.42l-3.06 3a1 1 0 0 1-.7.29z'></path>
      </Svg>
    </SvgSpan>
  </CalendarDropdownBox>

);

const ReservationHeaderBox = styled.div`
  width: 329px;
  height: 26px;
  font-weight: 700;
  color: #2b273c;
  font-size: 20px;
  margin-bottom: 16px;
`;

const ReservationHeader = (props) => (
  <ReservationHeaderBox>Make a Reservation</ReservationHeaderBox>
);

const ReservationWrapper = styled.div`
  display: block;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  padding: 22px;
  border: 1px solid #eeeeef;
  border-radius: 4px;
  width: fit-content;
  position: relative;
`;

const FindTableButton = styled.div`
  color: #fff;
  width: 297px;
  padding: 8px 16px;
  border: thin solid black;
  text-align: center;
  font-weight: 500;
  border: 1px solid #f43939;
  border-radius: 4px;
  clear: left;
  background: #f43939;
  transition: box-shadow .8s;
  :hover {
    cursor: pointer;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.3);

  }
`;

const ReservationBox = (props) => (
  <ReservationWrapper>
    <Calendar topState={props.state} reservationMethods={props.reservationMethods}/>
    <ReservationHeader/>
    <CalendarDropdownButton showCalendar={props.reservationMethods.showCalendar}
    selectedDateId={props.state.selectedDateId}>
    </CalendarDropdownButton>
    <DropdownContainer
    timeslots={props.state.timeslots} selectedDateId={props.state.selectedDateId}/>
    <FindTableButton>Find a Table</FindTableButton>
  </ReservationWrapper>
);

export default ReservationBox;
