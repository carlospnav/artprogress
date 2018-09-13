import db from '../../firebase'

export const getArtPieces = (
  category = 'drawing',
  foundation = 'cubes'
) => db.collection('artpieces')
  .where('category', '==', category)
  .where('foundation', '==', foundation)
  .get()
  .then((querySnapshot) => querySnapshot.docs.map(doc => doc.data()))
  .catch((error) => {
    console.log('Error getting documents: ', error)
  })
