import React from 'react'

import {
  StyledWrapper,
  MonthControl,
  MonthText,
  MonthVerticalStripe
} from './styles'

const months = [
  { id: 1, name: 'JAN' },
  { id: 2, name: 'FEB' },
  { id: 3, name: 'MAR' },
  { id: 4, name: 'APR' },
  { id: 5, name: 'MAY' },
  { id: 6, name: 'JUN' },
  { id: 7, name: 'JUL' },
  { id: 8, name: 'AUG' },
  { id: 9, name: 'SEP' },
  { id: 10, name: 'OCT' },
  { id: 11, name: 'NOV' },
  { id: 12, name: 'DEC' }
]

const TimeControls = () => (
  <StyledWrapper>
    {months.map(month => (
      <MonthControl key={month.name}>
        <MonthVerticalStripe />
        <MonthText>{month.name}</MonthText>
      </MonthControl>
    ))}
  </StyledWrapper>
)

export default TimeControls
