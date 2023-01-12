import { getApp, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getDatabase } from 'firebase-admin/database'
import { getFirestore } from 'firebase-admin/firestore'

if (!getApps().length) {
  process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
  process.env.FIREBASE_DATABASE_EMULATOR_HOST = 'localhost:9000'
  console.log('Initializing firebase app!')
  initializeApp({
    projectId: 'demo-admin-rtdb',
    databaseURL: `https://demo-admin-rtdb.firebase.io`,
  })
}

export const app = getApp()

export const auth = getAuth(app)

/* Firestore exports */
export const firestore = getFirestore(app)
export { FieldValue, Timestamp } from 'firebase-admin/firestore'

export const database = getDatabase(app)
