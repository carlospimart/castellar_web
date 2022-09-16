import PropTypes from 'prop-types'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/LogeIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   export default loginUser;