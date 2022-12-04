import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './index.css';

import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';

const App = observer(() => {
  // const {user} = useContext(Context)
  // const [loading, setLoading] = useState(true)
  // const loadText = 'Подождите, идет загрузка...'

  // useEffect(()=> {
  //     check().then(data => {
  //       user.setUser(data)
  //       user.setIsAuth(true)
  //     }).finally(()=> setLoading(false))
  // }, [])

  // if(loading){
  //   return loadText
  // }
  
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
