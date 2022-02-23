export const APIDOMAIN = 'https://andalue-kou8a.ondigitalocean.app/api' 
// || 'http://localhost:3001/api'

export const links=[
    {name:'Cabañas',to:'/casas'},
    {name:'Ubicación',to:'/ubicacion'},
    {name:'Contacto',to:'/contacto'},
    {name:'Ingresar',to:'/login'}
]
export const getWppMsg = (cabin, startDate, endDate, adults, kids, pets) => {

    
    const intro = `Hola, \nQuisiera reservar la cabaña *${cabin}* desde *${startDate}* hasta *${endDate}*. \n\n`
    const cantidad = `La reserva sería para: ${Number(adults)+Number(kids)} persona(s) \nAdultos: ${adults}\n`
    const cantidad2 = kids===0 ? '': 'Niños: '+ kids + '\n'
    const cantidad3 = pets===0 ? '' :'Mascotas: '+ pets + '\n'
    const cierre =`\nHe leído las condiciones y revisado las fotos y comodidades de la cabaña y me gustaría contar con los datos bancarios para dejar efectiva la reserva. \n\nGracias.`


    return encodeURIComponent(intro+cantidad+cantidad2+cantidad3+cierre)    

}

export const getAverage = (feedback) => {
    
    const numericFb = feedback.filter( fb => fb.choice)
    
    const total = numericFb.length
    // console.log('total ', total);
    
    const sum = numericFb.reduce( (ac,value) => Number(value.feedback) + ac,0)
    console.log('AVERAGE  ', Math.round( (sum/total) * 100));
    return Math.round( (sum/total) * 100) / 100
}