
import { Link } from 'react-router-dom';
import { getAverage } from '../../../helpers/helpers';
import './CompletedSurvey.css'


function CompletedSurvey({feedback}) {
console.log(feedback);
    
    return (
        <section className='CompletedSurvey'>
            <header className='Survey-header'>
                <h4 id='SurveyTitle' className='title'>Gracias <span>por valorar tu estadía</span>.</h4>
                <p className='Survey-subtitle'>Tu opinión nos ayuda a seguir mejorando!</p>
            </header>
        
            

            {feedback && 
                <article className='surveyContainer'>
                    <div className='overallContainer'>
                        <p className='question completed-overall'>Calificación Total</p>
                        <div className='overallBox'>
                            <p className='overall' style={getAverage(feedback)>5 ? {color:'darkgreen'} : {color:'darkred'}}>{getAverage(feedback)}</p>
                        </div>
                    </div>
                    {feedback.map(question=>{
                        return(
                            <div key={question.id} className='surveyLabel'>
                                <p className='question completed-question'>{question.question}</p>
                                <div className={`answer ${question.choice ? 'completed-answer' : 'completed-textAnswer'}`}>
                                    <p className='answerContent'>{question.feedback}</p>                            
                                </div>
                            </div>
                        )
                    })}                    
                </article> 
            }   
            <article>Click <Link to='/contacto' id='contactUsLink'>aquí</Link> para realizar una consulta.</article> 
        </section>


    );
}



export default CompletedSurvey;