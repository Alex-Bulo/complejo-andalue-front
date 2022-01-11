
import Directions from './Directions';
import './DirectionsContainer.css'


function DirectionsContainer() {
    //fetch info from BdD
    const videos = [
        {video: 'http://localhost:3001/videos/DesdeSanRafael.mp4', title:'Desde San Rafael'},
        {video: 'http://localhost:3001/videos/DesdeGralAlvear.mp4', title:'Desde Gral Alvear'}
    ]
    return (
        <main className='DirectionsContainer'>
            <header>
                <h4 className='DirectionsContainerTitle'>¿Cómo llegar a <span>Andalue</span>?</h4>
                <h5 id='DirectionsDisclaimer' className='disclaimer'>Guarda nuestra ubicación y mira los videos para más detalles.</h5>
            </header>

            <section className='Directions-mapContainer'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9032.943733281178!2d-68.38597214477943!3d-34.722416226486516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc5a9d2a10e8f5404!2zMzTCsDQzJzI5LjciUyA2OMKwMjMnNDIuOCJX!5e0!3m2!1sen!2sar!4v1640868060294!5m2!1sen!2sar"
                        className='Directions-map' title='mapAndalue'
                        allowFullScreen="" loading="lazy">
                </iframe>
                <article className='Directions-mapInfo'>

                    <h4 className='mapInfo-title title'> Dónde estamos?</h4>

                    <ul className='mapInfo-infoContainer'>                        
                        <li className='mapInfo-infoItem' id='valleGrande'>
                            A 20km de Valle Grande
                        </li>
                        <li className='mapInfo-infoItem' id='city'>
                            A 25km de San Rafael ciudad
                        </li>
                        <li className='mapInfo-infoItem' id='plane'>
                            A 30km de Aeropuerto
                        </li>

                    </ul>
                </article>
            </section>
            
            <section className='videosContainer'>
                {videos.map((video,i) => <Directions key={i} video={video} />)}
            </section>
        
        </main>


    );
}



export default DirectionsContainer;