// ClientComment will render the ClientComment

import './ClientComment.css'

function ClientComment({comment}) {
     
    
    return (  
        
        <article className='ClientComment'>
            <h4 className='comment-score'> {comment.score} </h4>
            <p className='comment-msg'>{comment.description}</p>
            <h4>{comment.name} | {comment.country}</h4>
        </article>

    );
}



export default ClientComment;