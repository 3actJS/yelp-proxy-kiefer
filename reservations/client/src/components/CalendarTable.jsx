/* eslint-disable import/extensions */
import styled from 'styled-components';
import React from 'react';
import calendarHelpers from '../calendarHelpers.js';

const determineColor = (props) => {
  if (props.selected) {
    return '#fff';
  }
  if (props.past) {
    return '#cfced5';
  }
  return 'inherit';
};

const determineBorder = (props) => {
  if (props.selected) {
    return '1.5px solid white';
  }
  if (props.isToday) {
    return '1.5px solid #eeeeef';
  }
  return '1.5px solid white';
};

const CalendarDate = styled.td`
  width: 30px;
  height: 30px;
  min-height: 30px;
  border: ${determineBorder};
  border-radius: 50%;
  text-align: center;
  cursor: default;
  background: ${(props) => (props.selected ? '#f43939' : 'inherit')};
  color: ${determineColor};
  :hover {
    background: ${(props) => (props.selected ? '#f43939' : '#f0f3f8')};
    cursor: pointer;
  }
  pointer-events: ${(props) => (props.past ? 'none' : 'auto')}
`;

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const Table = styled.table`
  display: table;
  margin: 0 16px 16px;
  border-collapse: separate;
  border-spacing: 5px;
`;

const Wrapper = styled.div`
`;

const CalendarRow = styled.tr`
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  color: #2b273c;
`;
const WeekdayRow = styled.tr`
  line-height: 20px;
  font-size: 14px;
  font-weight: 400;
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  vertical-align: baseline;
  color: #333;
  font-weight: 600;
  text-align: center;
  padding-bottom: 2px;
`;

const CalendarTable = (props) => (
  <Wrapper>
    <Table>
      <tbody>
      <WeekdayRow>
      {weekdays.map((day) => <td>{day}</td>)}
      </WeekdayRow>
      {props.state.rowsOfSelectedMonth.map((row) => <CalendarRow>
        {row.map((dateId) => <CalendarDate
          onClick={props.reservationMethods.selectDate}
          id={dateId}
          past={props.calendarMethods.isPast(dateId)}
          isToday={props.calendarMethods.isToday(dateId)}
          selected={dateId === props.selectedId}>
          {calendarHelpers.dayNumFromId(dateId)}
        </CalendarDate>)}
      </CalendarRow>)}
      </tbody>
    </Table>
  </Wrapper>
);

export default CalendarTable;
