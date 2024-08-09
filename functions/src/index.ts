'use strict';
const loadFunctions = require('firebase-function-tools')
const admin = require('firebase-admin')

admin.initializeApp()
loadFunctions(__dirname, exports)

export { generateUploadUrl } from './generateUploadUrl';

export { onUserCreate } from './onUserCreate';
