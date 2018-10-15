import React from 'react'

import {
  StyledWrapper,
  HorizontalStripe,
  VerticalStripe,
  MonthText
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
    <HorizontalStripe>
      {months.map(month => (
        <VerticalStripe key={month.name} />
      ))}
    </HorizontalStripe>
    {months.map(month => (
      <MonthText key={month.name}>{month.name}</MonthText>
    ))}
  </StyledWrapper>
)

export default TimeControls
