
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { APIDOMAIN } from '../../../helpers/helpers';
import Spinning from '../../../loaders/Spinning';
import CompletedSurvey from '../CompletedSurvey/CompletedSurvey';
import Survey from '../Survey/Survey';


function BookingFeedbackContainer() {
    const history = useHistory()
    const {code} = useParams()
    const [loading, setLoading] = useState(true)

    const [surveyDisplay, setSurveyDisplay] = useState(null)
    const [feedbackInfo, setFeedbackInfo] = useState(null)
    const [errors, setErrors] = useState(null)
    const [surveyStatus, setSurveyStatus] = useState({sending: false, success: false})
 
    
    const sendSurvey = (answers) => {
        
        setSurveyStatus({sending: true, success: false})

        fetch(`${APIDOMAIN}/questions/onBooking/${code}`,{
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify({...answers,code:code})
        })
        .then(response => {
            if(response.ok){
                return response.json() 
            }else{
                throw new Error (response.status)
            }
        })
        .then(dbInfo => {
            console.log(dbInfo);
            if(dbInfo.meta.status === 'error'){
                setErrors( (err) => {
                    return {...err, ...dbInfo.errors}
                })
                setSurveyStatus({sending: false, success: false})
                
            }else{
                setSurveyDisplay(false)
                setSurveyStatus({sending: false, success: true})
            }
            
        })
        .catch(error => {
            history.push('/404')
        })   
    }
    
    useEffect(()=>{


        fetch(`${APIDOMAIN}/questions/onBooking/${code}`)
            .then(response => {
                if(response.ok){
                    return response.json() 
                }else{
                    throw new Error (response.status)
                }
            })
            .then(dbInfo => {
                setFeedbackInfo(dbInfo.data)
                
                if(dbInfo.meta.status==='feedbackGiven'){
                    console.log('LOG FBGIVEN', dbInfo.data);
                    setSurveyDisplay(false)
                }else{                    
                    dbInfo.data.forEach (question => {
                        setErrors((errors) => {
                            return {...errors, [question.id] : {status:false}}
                        })
                    })
                    setSurveyDisplay(true)
                }
                setLoading(false)
                

            })
            .catch(error => {
                history.push('/404')
            })
    

    },[surveyStatus.success, code])
    
    return (
        <>
            {loading && <Spinning/>}
            { (!loading && surveyDisplay) && <Survey questions={feedbackInfo} sendSurvey={sendSurvey} errors={errors} sending={surveyStatus.sending} /> }
            { (!loading && !surveyDisplay) && <CompletedSurvey feedback={feedbackInfo} /> }
                   
        </>


    );
}



export default BookingFeedbackContainer;