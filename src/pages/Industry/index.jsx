import designAIImage from '../../assets/image_17.png'
import softwareDevImage from '../../assets/image_2.png'
import itMaintenanceImage from '../../assets/image_3.png'
import networkingImage from '../../assets/image_5.png'
import socialMediaImage from '../../assets/image_8.png'
import googleMetaImage from '../../assets/image_9.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Section from '../../components/Industry/index'
import { CustomScroll } from '../../components/scroll/CustomScroll'
import transition from '../../pageTransition'
import './industry.scss'

const Industry = () => {
	return (
		<CustomScroll>
			<div className='industry-page'>
				<Header />
				<div className='header'>
					<h1>Meet Industries</h1>
					<p>we provide perfect it solutions for your business</p>
				</div>
				<Section
					title='Software Development'
					description='Our IT experts are delivering a range of IT services to our customers. We develop cross-platform apps, that upgrade your business to another level.'
					imageSrc={softwareDevImage}
					frameClassName='software-dev-frame'
				/>
				<Section
					title='Design and AI'
					description='We are specialized in design solutions such as: UX/UI, motion design & graphic design. Also meet our individually developed AI image generator.'
					imageSrc={designAIImage}
					frameClassName='design-ai-frame'
				/>
				<Section
					title='Networking'
					description='We take control of the performance of your product, as well as its support. We connect and configure the operation of your product.'
					imageSrc={networkingImage}
					frameClassName='networking-frame'
				/>
				<Section
					title='IT Maintenance'
					description='We check the performance of the server part so that your clients are always in touch with you.'
					imageSrc={itMaintenanceImage}
					frameClassName='it-maintenance-frame'
				/>
				<Section
					title='Social Media'
					description='Get more website traffic, more customers for your social channel. Let us take care of it.'
					imageSrc={socialMediaImage}
					frameClassName='social-media-frame'
				/>
				<Section
					title='Google & Meta Adds'
					description='Get more website traffic, more customers & more online visibility with powerful SEO services.'
					imageSrc={googleMetaImage}
					frameClassName='google-meta-frame'
				/>
				<Footer />
			</div>
		</CustomScroll>
	)
}

export default transition(Industry)
