import { database, firestore } from './admin.js'

// This works fine!
const createdDoc = await firestore.collection('server').add({
  status: 'waiting',
})

console.log('Added firestore doc, ', createdDoc.id)

const ref = database.ref('server/saving-data/fireblog')

console.log('Adding rtdb data....')
await ref.child('users').set({
  alanisawesome: {
    date_of_birth: 'June 23, 1912',
    full_name: 'Alan Turing',
  },
  gracehop: {
    date_of_birth: 'December 9, 1906',
    full_name: 'Grace Hopper',
  },
})

console.log('This will never be logged. :(')
