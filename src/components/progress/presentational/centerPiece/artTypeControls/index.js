import React from 'react'

import {
  StyledWrapper,
  MenuBg,
  CategoriesWrapper,
  Category,
  CategoryTitle
} from './styles'

// This will come from the DB in the future
const categories = [
  { name: 'Fundamentals' },
  { name: 'Sculpting' },
  { name: '3D Work' }
]
const ArtTypeControls = () => (
  <StyledWrapper>
    <MenuBg />
    <CategoriesWrapper>
      {categories.map(category => (
        <Category key={category.name}>
          <CategoryTitle>{category.name.toUpperCase()}</CategoryTitle>
        </Category>
      ))}
    </CategoriesWrapper>
  </StyledWrapper>
)

export default ArtTypeControls
