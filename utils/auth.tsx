async function authCheck() {
  try {
    await fetch('/') // here add auth API call from Adam
    return 200
  } catch (error) {
    console.log('error: ', error)
    return -1
  }
}

function getAuthHeader() {
  const token = localStorage.getItem('token')
  return {
    Auth: `Bearer ${token}`,
  }
}

function logIn() {}

function logOut() {}

function errorHandler(error: ErrorCallback) {
  // switch(error)
  // install axios and notify
}

export { authCheck, logIn, logOut, getAuthHeader, errorHandler }
