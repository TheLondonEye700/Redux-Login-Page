import { takeLatest, select } from 'redux-saga/effects'

function* saveToLocalStorage(): any {
  const state = yield select()
  yield localStorage.setItem('user', JSON.stringify(state))
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [takeLatest('*', saveToLocalStorage)]