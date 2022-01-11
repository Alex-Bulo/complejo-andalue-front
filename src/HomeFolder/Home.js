// Home will just render the correct Components for Home page: Carrousel, Links, FeatureSection

import { Link } from 'react-router-dom';
import AvailFormContainer from '../GeneralFolder/AvailFormFolder/AvailFormContainer/AvailFormContainer';
import CarrrouselContainer from './CarrouselFolder/CarrouselContainer/CarrouselContainer';
import CommentSectionContainer from './CommentSectionFolder/CommentSectionContainer/CommentSectionContainer';
import FeatureSectionContainer from './FeatureSectionFolder/FeaturesSectionContainer/FeatureSectionContainer';
import './Home.css'
import AvailDetailContainer from '../GeneralFolder/AvailDetailContainer/AvailDetailContainer';


function Home() {    
    
    return (  
        
        <main className='Home'>
            
            <CarrrouselContainer />
            <AvailFormContainer />
            <AvailDetailContainer />

            <section className='welcomeContainer'>
                <header className='title'>¡Bienvenidos!</header>
                <p className='welcome-msg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, modi quod eius excepturi dolorum recusandae voluptate distinctio at, nesciunt tempora magni explicabo iusto quo ab ut laborum cupiditate expedita sint. <br/>
                    <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, modi quod eius excepturi dolorum recusandae voluptate distinctio at, nesciunt tempora magni explicabo iusto quo ab ut laborum cupiditate expedita sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, modi quod eius excepturi dolorum recusandae voluptate distinct. <br/> 
                    <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, modi quod eius excepturi dolorum. <br/>
                </p>
            </section>
            
            <FeatureSectionContainer />

            <Link to='/casas' className='cta-cabins CTA CTA-active'>NUESTRAS CABAÑAS</Link>

            <CommentSectionContainer />
        </main>


    );
}



export default Home;