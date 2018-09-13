// import db from '../../../firebase'

// export const getArtPieces = (
//   category = 'drawing',
//   foundation = 'cubes'
// ) => db.collection('artpieces')
//   .where('category', '==', category)
//   .where('foundation', '==', foundation)
//   .get()
//   .then((querySnapshot) => querySnapshot.docs.map(doc => doc.data()))
//   .catch((error) => {
//     throw new Error(`Error getting the art pieces: ${error}.`)
//   })

export const getArtPieces = (
  category,
  foundation
) => {
  return [{
    name: 'trosoba',
    category: 'drawing',
    foundation: 'cubes'
  }]
}
