import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';    
import Homepage from './Compoent/Navbar/Homepage.jsx';
import HDMovies from './Compoent/Navbar/HDMovies.jsx';
import NewMovies from './Compoent/Navbar/NewMovies';
import ContactUs from './Compoent/Navbar/ContactUs';
import RootLayout from './Compoent/Navbar/RootLayout.jsx';
import VideoPage from './Compoent/Main/VideoPage.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';  
import WebSeries from './Compoent/Navbar/WebSeries.jsx';


function App() { 
  const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, children: [
      {path: '/', element: <Homepage />},
      {path: '/hdmovies', element: <HDMovies />},
      {path: '/newmovies', element: <NewMovies />},
      {path: '/contactus', element: <ContactUs />},
      {path: '/webseries', element: <WebSeries />},
      {path: '/video', element: <VideoPage />}
    ]}
    
  ]);
  
  return (
    <RouterProvider router={router} className="App">  
        
    </RouterProvider>
  );
}

export default App;
