import { database, firestore } from './admin.js'

const ref = database.ref('server/saving-data/fireblog')
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
const game = await firestore.doc('server/doc').create({
  status: 'waiting',
})
