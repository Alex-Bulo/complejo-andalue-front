
import './Directions.css'


function Directions({video}) {

    return (
        <article className='Directions'>
                <h4 className='Directions-title'>{video.title}</h4>

                <video className='video'
                    controls={true}
                    width={'90%'}
                >
                    <source src={video.video} type="video/mp4"/>
                </video>
        </article>


    );
}



export default Directions;