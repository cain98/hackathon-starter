import axios from 'axios'
let options = {}
if (process.SERVER_BUILD) {
  options.baseURL = `http://localhost:3000`
}
let ax = {
 options,
 create: (token) => {
  options.headers = {
   Cookie: token
  }
  return axios.create(ax.options)
 }
}

export default ax
