import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { convertObjToArr } from '../../../store/utils/reducers'
// import { getArtPieces } from '../../../store/api'

class ProgressContainer extends Component {
  // async componentDidMount () {
  //   const artPieces = await getArtPieces()
  // }

  render () {
    const { artPieces } = this.props
    return (
      <content>
        {artPieces && artPieces.map(piece => (
          <p key={piece.name}>{piece.name}</p>
        ))}
      </content>
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
