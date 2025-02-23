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
import Blockchain6 from '../pages/Blockchain6'
import Career from '../pages/Career'
import ContactUs from '../pages/ContactUs'
import { NotFoundPage } from '../pages/Error/NotFoundPage'
import Home from '../pages/Home'
import Service from '../pages/Industry'
import Metaverse from '../pages/Metaverse'
// import Service from '../pages/Service'
import Service_1 from '../pages/Service_1'
import ServiceIOS from '../pages/ServiceIOS'
import TokenNFT from '../pages/Token'
import Wallet from '../pages/Wallet'
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
				path: 'blockchain-4',
				element: <Blockchain4 />,
				errorElement: <BubbleError />,
			},
			{
				path: 'blockchain_6',
				element: <Blockchain6 />,
				errorElement: <BubbleError />,
			},
			{
				path: 'web3',
				element: <Web3 />,
				errorElement: <BubbleError />,
			},
			{
				path: 'wallet',
				element: <Wallet />,
				errorElement: <BubbleError />,
			},
			{
				path: 'service-1',
				element: <Service_1 />,
				errorElement: <BubbleError />,
			},
			{
				path: 'service-ios',
				element: <ServiceIOS />,
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
	return (
		<RouterProvider router={router}>
			<div className=''></div>
			{children}
		</RouterProvider>
	)
}
