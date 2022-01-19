// Home will just render the correct Components for Home page: Carrousel, Links, FeatureSection

import { Link } from 'react-router-dom';
import AvailFormContainer from '../GeneralFolder/AvailFormFolder/AvailFormContainer/AvailFormContainer';
import CarrrouselContainer from './CarrouselFolder/CarrouselContainer/CarrouselContainer';
import CommentSectionContainer from './CommentSectionFolder/CommentSectionContainer/CommentSectionContainer';
import FeatureSectionContainer from './FeatureSectionFolder/FeaturesSectionContainer/FeatureSectionContainer';
import './Home.css'
import AvailDetailContainer from '../GeneralFolder/AvailDetailContainer/AvailDetailContainer';
import { useInfo } from '../context/InfoContext';


function Home() {    
    const {info} = useInfo()
    return (  
        
        <main className='Home'>
            
            <CarrrouselContainer />
            <AvailFormContainer />
            <AvailDetailContainer />

            <section className='welcomeContainer'>
                <header className='title'>¡Bienvenidos!</header>
                <p className='welcome-msg' dangerouslySetInnerHTML={{__html: info.welcomeMsg}}/>
            </section>
            
            <FeatureSectionContainer />

            <Link to='/casas' className='cta-cabins CTA CTA-active'>NUESTRAS CABAÑAS</Link>

            <CommentSectionContainer />
        </main>


    );
}



export default Home;