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
import Blockchain4 from '../pages/Blockchain4'
import Career from '../pages/Career'
import ContactUs from '../pages/ContactUs'
import { NotFoundPage } from '../pages/Error/NotFoundPage'
import Home from '../pages/Home'
import Industry from '../pages/Industry'
import Metaverse from '../pages/Metaverse'
import Service from '../pages/Service'
import TokenNFT from '../pages/Token'
import Web3 from '../pages/Web3'

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
				path: 'token',
				element: <TokenNFT />,
				errorElement: <BubbleError />,
			},
			{
				path: 'metaverse',
				element: <Metaverse />,
				errorElement: <BubbleError />,
			},
			{
				path: 'blockchain_4',
				element: <Blockchain4 />,
				errorElement: <BubbleError />,
			},
			{
				path: 'web3',
				element: <Web3 />,
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
