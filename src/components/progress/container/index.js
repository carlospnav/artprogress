import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { convertObjToArr } from '../../../store/utils/reducers'
import { requestArtPieces } from '../../../store/actions/artPieces'

import { StyledContainer } from './styles'
import BgStripes from '../presentational/bgStripes'
import IntroText from '../presentational/IntroText'
import BlogLink from '../presentational/blogLink'
import CenterPiece from '../presentational/centerPiece'

class ProgressContainer extends Component {
  async componentDidMount () {
    const { dispatch } = this.props
    dispatch(requestArtPieces())
  }

  render () {
    // const { artPieces } = this.props

    return (
      <StyledContainer>
        <BgStripes />
        <IntroText />
        {/* {artPieces && artPieces.map(piece => (
          <p key={piece.name}>{piece.name}</p>
        ))} */}
        <CenterPiece />
        <BlogLink />
      </StyledContainer>
    )
  }
}

ProgressContainer.propTypes = {
  artPieces: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }))
}

const mapStateToProps = (state) => ({
  artPieces: convertObjToArr(state.artPieces)
})

export default connect(mapStateToProps)(ProgressContainer)
