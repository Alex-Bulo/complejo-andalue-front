
import { useEffect, useState } from 'react';
import Spinning from '../../../loaders/Spinning';
import './Survey.css'


function Survey({questions, errors, sendSurvey, sending}) {
    const [inputsControl, setInputControl] = useState(null)
    const [loading, setLoading] = useState(true)

    
    useEffect(()=>{
        questions.forEach(question => {
            
            setInputControl((inputs) => {
                
                if(question.choice){
                    return{...inputs, [question.id]:10}
                }else{
                    return{...inputs, [question.id]:''}
                }
            })
        })
        setLoading(false)
    },[questions])

    const submitHandler = (e) => {
        e.preventDefault()
        const toSend = inputsControl

        const textInputs = questions.filter(question => !question.choice)
        
        textInputs.map(input => {
            console.log(toSend);
            return toSend[input.id].length === 0 ? toSend[input.id] = 'No realizó comentarios' : ''
        })

        sendSurvey(toSend)
    }

    const changeHandler = (e) => {
        setInputControl((inputs) => {
            return{
                ...inputs,
                [e.target.name] : e.target.value
            }
        })

    }

    return (
        <section className='Survey'>
            <header className='Survey-header'>
                <h4 id='SurveyTitle' className='title'>Contanos tu experiencia en <span>Andalue</span>.</h4>
                <p className='Survey-subtitle'>Tu opinión nos ayuda!<br/>Dejanos tus comentarios y califica tu estadía del 1 al 10 (mayor grado de satisfacción).</p>
            </header>

            {!sending &&
            <form onSubmit={submitHandler} className='surveyContainer'>
            
                {questions.map(question=>{
                    return(
                        <label key={question.id} className='surveyLabel'>
                            <p className='question'>{question.question}</p>
                            <div className='answer'>
                                {(question.choice && !loading) && <>
                                    <div className='surveyInput'><h5 className='sliderN'>1</h5><input className='surveyRangeInput' type='range' min='1' max='10' value={inputsControl[question.id]} name={question.id}  onChange={changeHandler} onBlur={changeHandler}/><h5 className='sliderN'>10</h5></div>
                                    <p className='choice' style={inputsControl[question.id]>5 ? {color:'green'} : {color:'darkred'}}>{(question.choice) && inputsControl[question.id]}</p>
                                    <p className={`errorMsg ${errors[question.id].status ? 'show' : 'no-show'}`}>{errors[question.id].msg}</p>
                                    </>}
                                
                                {(!question.choice && !loading) && <>
                                        <textarea className='surveyTextInput' name={question.id} value={inputsControl[question.id]} onChange={changeHandler} onBlur={changeHandler}/>
                                        <p className={`errorMsg ${errors[question.id].status ? 'show' : 'no-show'}`}>{errors[question.id].msg}</p>
                                    </>
                                }
                            </div>
                        </label>
                    )
                })}    

                <button type='submit' id='surveySubmit' className='CTA-active'>Enviar</button>
            
            </form>     
            } 
            {sending && <Spinning/>} 
        
        </section>


    );
}



export default Survey;