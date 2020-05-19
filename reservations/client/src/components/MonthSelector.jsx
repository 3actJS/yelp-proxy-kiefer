import styled from 'styled-components';
import React from 'react';
import calendarHelpers from '../calendarHelpers.js';

const PreviousMonthArrow = styled.svg`
   height: 24px;
   width: 24px;
   fill: ${(props) => (props.disabled ? '#cfced5' : 'inherit')};
`;

const PreviousMonthSpan = styled.span`
  position: absolute;
  left: 12px;
  top: 18px;
  :hover {
    cursor: pointer;
  }
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const PreviousMonthButton = (props) => (
  <PreviousMonthSpan id='previousButton' disabled={props.disabled}>
    <PreviousMonthArrow disabled={props.disabled} onClick={props.onClick} xmlns='http://www.w3.org/2000/svg'>
      <path d='M14.475 18.364l1.414-1.414L10.94 12l4.95-4.95-1.415-1.414L8.11 12l6.365 6.364z'></path>
    </PreviousMonthArrow>
  </PreviousMonthSpan>
);

const NextMonthArrow = styled.svg`
   height: 24px;
   width: 24px;
   fill: ${(props) => (props.disabled ? '#cfced5' : 'inherit')};
`;

const NextMonthSpan = styled.span`
  position: absolute;
  right: 12px;
  top: 18px;
  :hover {
    cursor: pointer;
  };
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const NextMonthButton = (props) => (
  <NextMonthSpan id='nextButton' disabled={props.disabled}>
    <NextMonthArrow disabled={props.disabled} onClick={props.onClick} xmlns='http://www.w3.org/2000/svg'>
      <path d="M9.525 5.636L8.11 7.05 13.06 12l-4.95 4.95 1.415 1.414L15.89 12 9.524 5.636z"></path>
    </NextMonthArrow>
  </NextMonthSpan>
);

const MonthSelectorContainer = styled.div`
  text-align: center;
  line-height: 28px;
  font-weight: 700;
  font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #2b273c;
  padding-top: 16px;
  margin-bottom: 16px;
  vertical-align: baseline;
  position: relative;
  user-select: none;
`;

const MonthSelector = (props) => (
  <MonthSelectorContainer id='monthSelector'>
    <PreviousMonthButton onClick={props.calendarMethods.getPreviousMonth}
      disabled={new Date().getMonth() === props.state.selectedMonthNumber} />
    {calendarHelpers.monthNumToName(props.state.selectedMonthNumber)} {props.state.selectedYear}
    <NextMonthButton onClick={props.calendarMethods.getNextMonth}
      disabled={props.state.selectedMonthNumber === props.latestMonth} />
  </MonthSelectorContainer>
);

export default MonthSelector;
