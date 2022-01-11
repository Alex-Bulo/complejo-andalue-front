// CommentList will map the props and render Comment

import ClientComment from '../ClientComment/ClientComment';
import './CommentList.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CommentList({comments}) {
     
    
    return (  

        comments && <Carousel showThumbs={false} autoPlay={true} interval={3500} infiniteLoop={true} showStatus={false} showIndicators={false} showArrows={false} stopOnHover={false}>

            {comments.map( (comment,i) =>  <ClientComment key={i} comment={comment}/> ) }

        </Carousel>

    );
}



export default CommentList;