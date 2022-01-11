
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIDOMAIN } from '../../../helpers/helpers';
import Spinning from '../../../loaders/Spinning';
import CompletedSurvey from '../CompletedSurvey/CompletedSurvey';
import Survey from '../Survey/Survey';


function BookingFeedbackContainer() {
    const {code} = useParams()
    const [loading, setLoading] = useState(true)

    const [surveyDisplay, setSurveyDisplay] = useState(null)
    const [feedbackInfo, setFeedbackInfo] = useState(null)
    const [errors, setErrors] = useState(null)
    const [surveyStatus, setSurveyStatus] = useState({sending: false, success: false})
 
    
    const sendSurvey = (answers) => {
        // console.log('ANSWERS', answers);
        setSurveyStatus({sending: true, success: false})

        fetch(`${APIDOMAIN}/questions/onBooking/${code}`,{
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify({...answers,code:code})
        })
        .then(response => response.json())
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
    }
    
    useEffect(()=>{


        fetch(`${APIDOMAIN}/questions/onBooking/${code}`)
            .then(response => response.json())
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
            .catch(error => console.log(error)) 
    

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