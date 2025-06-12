import { BrowserRouter, Route, Routes } from 'react-router'

import Body from './Body'
import Login from './Login'
import axios from 'axios'
import { Provider } from 'react-redux'
import appStore from './utilis/appstore'
import Profile from './Profile'
import Feed from './Feed'



axios.defaults.withCredentials = true;
function App() {
 

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
     <Routes>
      <Route path='/'  element={<Body />}>
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/profile' element={<Profile />} />
       </Route>
     </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App