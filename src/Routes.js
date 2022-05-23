import {Router,Route,Routes} from './imports/Router';
import { Suspense } from 'react';
import {
  ClassComponents,
  Home,
  Hooks,
  Loading,
  UseState
} from './imports/Pages'

const AppRouter = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hooks' element={
          <Suspense fallback={<Loading/>}>
          <Hooks/>
        </Suspense>
        }/>
        <Route path='/classcomponent'  element={
          <Suspense fallback={<Loading/>}>
            <ClassComponents/>
          </Suspense>
        }/>
        <Route path='/hooks/usestate' element={
        <Suspense fallback={<Loading/>}>
        <UseState/>
      </Suspense>
        } />
      </Routes>
    </Router>
    </>
  )
}

export default AppRouter