// CommentSectionContainer will get the info from DB and render CommentList (info via props)

import CommentList from '../CommentList/CommentList';
import './CommentSectionContainer.css'

function CommentSectionContainer() {
    const comments = [
        {name: 'Victoria', country: 'Argentina', score: '9.0', description:'La atención fue excelente desde el primer momento. El personal fue muy atento y amable. En general, está bien ubicado y es un lugar muy lindo para disfrutar de San Rafael.'},
        {name: 'Martin', country: 'Argentina', score:'10.0', description: 'La tranquilidad y la relación con el personal. Desde el principio hubo una muy buena comunicación y muy atentos todos. La pasamos muy bien y seguro volveremos.'},
        {name: 'Andrés', country:'Perú', score: '8.0', description:'La atención de los Anfitriones (Griselda y el señor de mantenimiento).'},
    ] 
    
    return (  
        
        <section className='CommentSectionContainer'>
            <h3>Nuestros huéspedes dicen...</h3>
            {comments && <CommentList comments={comments}/> }
        </section>

    );
}



export default CommentSectionContainer;