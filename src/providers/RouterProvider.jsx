/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
	createBrowserRouter,
	RouterProvider,
	useRouteError,
} from 'react-router-dom'
import App from '../App'
import About from '../pages/About'
import Blockchain from '../pages/Blockchain'
import Career from '../pages/Career'
import ContactUs from '../pages/ContactUs'
import { NotFoundPage } from '../pages/Error/NotFoundPage'
import Home from '../pages/Home'
import Industry from '../pages/Industry'
import Service from '../pages/Service'

const BubbleError = () => {
	const error = useRouteError()
	if (error) throw error
	return null
}

const router = createBrowserRouter([
	{
		path: '/*',
		element: <App />,
		errorElement: <BubbleError />,
		children: [
			{
				path: 'home',
				element: <Home />,
				errorElement: <BubbleError />,
			},
			{
				path: 'contactus',
				element: <ContactUs />,
				errorElement: <BubbleError />,
			},
			{
				path: 'career',
				element: <Career />,
				errorElement: <BubbleError />,
			},
			{
				path: 'industry',
				element: <Industry />,
				errorElement: <BubbleError />,
			},
			{
				path: 'aboutus',
				element: <About />,
				errorElement: <BubbleError />,
			},
			{
				path: 'service',
				element: <Service />,
				errorElement: <BubbleError />,
			},
			{
				path: 'blockchain',
				element: <Blockchain />,
				errorElement: <BubbleError />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
			{
				path: '',
				element: <NotFoundPage />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
])

export const BrowserRouter = ({ children }) => {
	return <RouterProvider router={router}>{children}</RouterProvider>
}
