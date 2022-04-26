import React, {Suspense} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import UserContextProvider from './context/UserContextProvider';

import Header from "./components/shared/header/Header";
import MainNavigation from './components/shared/main-navigation/MainNavigation';
import UserPage from './pages/user-page/UserPage';
import CoursePage from './pages/course-page/CoursePage';
import Footer from './components/shared/footer/Footer';
import Course from './pages/course-page/course-list/course/Course';
import StudyCourses from './components/shared/study-courses/StudyCourses';
import Page404 from './components/shared/page404/Page404';
import Loader from './components/shared/Loader/Loader';

const HomePage = React.lazy( ()=> import('./pages/home-page/HomePage') );

function App() {

  return (
    <BrowserRouter >
      <UserContextProvider>
        <Header />
          <MainNavigation />
          <Suspense fallback={ <Loader/> } >
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/user' element={ <UserPage/>} />
                <Route path='/user/courses' element={<CoursePage />} />
                <Route path='/user/courses/:name' element={ <Course />} />
                <Route path='/courses' element={ <StudyCourses />} />
                <Route path='/*' element={ <Page404 />} />
              </Routes>
          </Suspense>
          <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
