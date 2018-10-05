import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { convertObjToArr } from '../../../store/utils/reducers'
import { requestArtPieces } from '../../../store/actions/artPieces'

import { StyledContainer } from './styles'
import IntroText from '../presentational/IntroText'

class ProgressContainer extends Component {
  async componentDidMount () {
    const { dispatch } = this.props
    dispatch(requestArtPieces())
  }

  render () {
    // const { artPieces } = this.props

    return (
      <StyledContainer>
        <IntroText />
        {/* {artPieces && artPieces.map(piece => (
          <p key={piece.name}>{piece.name}</p>
        ))} */}
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
