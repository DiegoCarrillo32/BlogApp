
import { Outlet } from 'react-router-dom'

import { Home } from '../pages/Home';

export const PrivateRoute = ({Authenticated}:any) => {
  console.log(Authenticated);
  

  return Authenticated ? <Outlet/> : <Home/>
}
