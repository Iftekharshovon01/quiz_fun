import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Stastics from './Components/Stastistic/Stastics';
import TopicDetail from './Components/TopicDeatil/TopicDetail';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          
          element: <Home></Home>
        },
        {
          path:'/topics',
          loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path:'/stastics',
          element: <Stastics></Stastics>
        }
        ,
        {
          path:'/blog',
          element: <Blog></Blog>
        }
        ,
        {
          path:'/topic/:topicId',
          loader: async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <TopicDetail ></TopicDetail>
        }
        ,
        {
          path:'/stastics',
          loader: async()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Stastics></Stastics>
        }
      ]
    },
    {
      path:'*',
      element: <div>This Route Not Found!</div>
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
