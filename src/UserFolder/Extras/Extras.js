import { useRef } from 'react';

import './Extras.css'


function Extras() {
    const cat1 = useRef(null)
    const ic1 = useRef(null)
    const cat2 = useRef(null)
    const ic2 = useRef(null)
    const cat3 = useRef(null)
    const ic3 = useRef(null)
    const cat4 = useRef(null)
    const ic4 = useRef(null)
    const cat5 = useRef(null)
    const ic5 = useRef(null)

    return (  
        
        <main className='Extras'>
            <header>
                <h4 className='ExtrasTitle'>Compartimos información turística para tu estadía en <span>San Rafael</span>.</h4>
                <h5 className='disclaimer'>Complejo Andalue no mantiene ninguna relación comercial con los lugares mencionados.</h5>
            </header>

            <section ref={cat1} className='extra-category'  >
                <header className='extra-title' 
                        onClick={ () => {
                            if(cat1.current.classList.contains('shown')){
                                cat1.current.classList.remove('shown')
                                cat1.current.classList.add('notShown')
                                ic1.current.classList.add('fa-angle-down')
                                ic1.current.classList.remove('fa-angle-up')
                            }else{
                                cat1.current.classList.add('shown')
                                ic1.current.classList.add('fa-angle-up')
                                cat1.current.classList.remove('notShown')
                                ic1.current.classList.remove('fa-angle-down')
                            }
                        }}>
                    <h4 className='title ExtrasCat-title'>Empresas de Turismo</h4><i ref={ic1} className='ExtrasCat-icon fas fa-angle-down'/>
                </header>

                <article>
                    <table className='tableExtras Tturismo'>
                        <tbody>

                            <tr className='ExtrasRows Rturismo'>
                                <th className='ExtrasHeaders'>Risco Viajes</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://riscoviajes.negocio.site' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 443 6439</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. San Martín 261</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/mSW3sBHFRSoffJVo7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows Rturismo'>
                                <th className='ExtrasHeaders'>Joker Viajes</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://www.jokerviajes.com.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 467 5049</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Los Franceses 25</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/QsbJhka9UZwdGX1o8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows Rturismo'>
                                <th className='ExtrasHeaders'>Millanti Viajes</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://www.millantiviajes.com.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 444 6540</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Francia 56</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/mK1srvxPbEp7PYLbA' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rturismo'>
                                <th className='ExtrasHeaders'>Rent a Car Sur</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://rentacarsur.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 466 1203</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 797</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/TEqfNaFtVJNrHCTJ7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rturismo'>
                                <th className='ExtrasHeaders'>San Rafael Rent a Car</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.sanrafaelrentacar.com/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 404 8696</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 1771</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/GUJN6LBKkoAGdD3w7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rturismo'>
                                <th className='ExtrasHeaders'>Euro Rent a Car</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://eurorentacar.com.ar' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 457 4570</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 698</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/NtjgZxE3CHj9xHVC6' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rturismo'>
                                <th className='ExtrasHeaders'>Dirección de Turismo</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.sanrafaelturismo.gov.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 4217</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 1530</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/KLA9rnWj5qwA48c29' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                        </tbody>
                    </table>
                </article>
            </section>

            <section ref={cat2} className='extra-category'  >
                <header className='extra-title' 
                        onClick={ () => {
                            if(cat2.current.classList.contains('shown')){
                                cat2.current.classList.remove('shown')
                                cat2.current.classList.add('notShown')
                                ic2.current.classList.add('fa-angle-down')
                                ic2.current.classList.remove('fa-angle-up')
                            }else{
                                cat2.current.classList.add('shown')
                                ic2.current.classList.add('fa-angle-up')
                                cat2.current.classList.remove('notShown')
                                ic2.current.classList.remove('fa-angle-down')
                            }
                        }}>
                    <h4 className='title ExtrasCat-title'>Bodegas</h4><i ref={ic2} className='ExtrasCat-icon fas fa-angle-down'/>
                </header>

                <article>
                    <table className='tableExtras Tbodegas'>
                        <tbody>

                            <tr className='ExtrasRows Rbodegas'>
                                <th className='ExtrasHeaders'>Suter</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.bodegasuter.com.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 1076</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 2850</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/aYNfaw1DSGKuHAMbA' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows Rbodegas'>
                                <th className='ExtrasHeaders'>Goyenechea</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goyenechea.com/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 461 7294</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 1100</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/BrcPw2PNPq84ChB87' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows Rbodegas'>
                                <th className='ExtrasHeaders'>La Abeja</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.bodegalaabeja.com.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 467 1836</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 1900</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/ST22RYfLeCoHWpnx5' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rbodegas'>
                                <th className='ExtrasHeaders'>Bianchi</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.bodegasbianchi.com.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>0800 222 3500</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Ruta 143 y Valentín</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/69Wk3tQsaNxo162w6' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rbodegas'>
                                <th className='ExtrasHeaders'>Jean Rivier</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.jeanrivier.com/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 443 2676</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 2385</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/TJMbzSDrBGeBBWGt7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rbodegas'>
                                <th className='ExtrasHeaders'>Labiano</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.bodegalabiano.com/labiano/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 444 1034</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Cubillos 3850</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/dgv8HwmBgQscidcJ8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rbodegas'>
                                <th className='ExtrasHeaders'>Vieja Bodega Serra</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.bodegaserra.com/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 444 1499</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Cubillos 4500</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/zGv8P87gULEGvmwc8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rbodegas'>
                                <th className='ExtrasHeaders'>Finca El Nevado</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.fincaelnevado.com/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 405 1563</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Cubillos 2000</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/yJd4bFB5t6KFvwdt7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                        </tbody>
                    </table>
                </article>
            </section>

            <section ref={cat3} className='extra-category'  >
                <header className='extra-title' 
                        onClick={ () => {
                            if(cat3.current.classList.contains('shown')){
                                cat3.current.classList.remove('shown')
                                cat3.current.classList.add('notShown')
                                ic3.current.classList.add('fa-angle-down')
                                ic3.current.classList.remove('fa-angle-up')
                            }else{
                                cat3.current.classList.add('shown')
                                ic3.current.classList.add('fa-angle-up')
                                cat3.current.classList.remove('notShown')
                                ic3.current.classList.remove('fa-angle-down')
                            }
                        }}>
                    <h4 className='title ExtrasCat-title'>Turismo Aventura en Valle Grande</h4><i ref={ic3} className='ExtrasCat-icon fas fa-angle-down'/>
                </header>

                <article>
                    <table className='tableExtras Taventura'>
                        <tbody>

                            <tr className='ExtrasRows Raventura'>
                                <th className='ExtrasHeaders'>Kintun Expediciones</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.kintun.com/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 405 7755</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Ruta 173, km18</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/MLWcQgfGk6AkJQvo7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows Raventura'>
                                <th className='ExtrasHeaders'>Parque Aéreo EUCA</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.bosqueeuca.com/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 439 0192</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Ruta 173, km14</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/MyX6sf1Hx8xN1spr7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows Raventura'>
                                <th className='ExtrasHeaders'>Extremo Aventura</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://aventuraextremo.com/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 467 1197</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Ruta 173, km29</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/rrwa3GcuodFewP3s7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Raventura'>
                                <th className='ExtrasHeaders'>Alihuen Aventura</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.alihuenaventura.com.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 422 1104</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Ruta 173, km35</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/6H1rbkHkfizEymxd7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Raventura'>
                                <th className='ExtrasHeaders'>Raffeish Aventura</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.raffeish.com.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 440 9089</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Ruta 173, km29</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/L1Z5YWsawD5zwxqQ7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Raventura'>
                                <th className='ExtrasHeaders'>SanRaft</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><a className='Extras-web' href='http://www.sanraft.com.ar/' target='_blank' rel='noopener noreferrer'><i className='fas fa-globe-americas Extras-icon'/>Sitio Web</a></td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 404 5300</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Ruta 173, km22</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/5fVArzscwjchQ7ch7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                        </tbody>
                    </table>
                </article>
            </section>
            
            <section ref={cat4} className='extra-category'  >
                <header className='extra-title' 
                        onClick={ () => {
                            if(cat4.current.classList.contains('shown')){
                                cat4.current.classList.remove('shown')
                                cat4.current.classList.add('notShown')
                                ic4.current.classList.add('fa-angle-down')
                                ic4.current.classList.remove('fa-angle-up')
                            }else{
                                cat4.current.classList.add('shown')
                                ic4.current.classList.add('fa-angle-up')
                                cat4.current.classList.remove('notShown')
                                ic4.current.classList.remove('fa-angle-down')
                            }
                        }}>
                    <h4 className='title ExtrasCat-title'>Restaurantes</h4><i ref={ic4} className='ExtrasCat-icon fas fa-angle-down'/>
                </header>

                <article>
                    <table className='tableExtras Trestaurante'>
                        <tbody>

                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>El Antojo del Cocinero</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 261 333 7364</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. Ballofet 173</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/kyroRHTSrSNTJqAd8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>Ahora Pizza</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 435 5054</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Gral. Gutierrez 35</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/b6sN2AGmgFtSgr7E7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>Sr Dog's</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 423 8700</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. Sarmiento 561</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/5FDoQ1ChKuYB4Q9w7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>Aprobar</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 6397</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. Ballofet 901</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/1gn3TtABBBQLmoCB7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>La Granadina Artesanal</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 3737</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. Sarmiento 380</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/9nLXcTER5s4pMreX8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>Confiteria La Porteña</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 2673</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. B Mitre 191</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/sqaVbL1uiGaU3x7u8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>Comedor Doña Emilia</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 448 1211</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Cubillos 4680</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/huL4bHjtcJyy6R8t8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>La Gringa</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 443 6500</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Chile 26</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/Zmv5o5P6zJpmQRNW8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>La Máquina</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 444 5540</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. B Rivadavia 18</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/44VqDH7ZyPRuVmKW6' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows Rrestaurante'>
                                <th className='ExtrasHeaders'>El Campo</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 458 3613</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Ruta 173, km8</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/jEhZkhgquG8MDuNN7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                        </tbody>
                    </table>
                </article>
            </section>

            <section ref={cat5} className='extra-category'  >
                <header className='extra-title' 
                        onClick={ () => {
                            if(cat5.current.classList.contains('shown')){
                                cat5.current.classList.remove('shown')
                                cat5.current.classList.add('notShown')
                                ic5.current.classList.add('fa-angle-down')
                                ic5.current.classList.remove('fa-angle-up')
                            }else{
                                cat5.current.classList.add('shown')
                                ic5.current.classList.add('fa-angle-up')
                                cat5.current.classList.remove('notShown')
                                ic5.current.classList.remove('fa-angle-down')
                            }
                        }}>
                    <h4 className='title ExtrasCat-title'>Emergencias</h4><i ref={ic5} className='ExtrasCat-icon fas fa-angle-down'/>
                </header>

                <article>
                    <table className='tableExtras Temergencias'>
                        <tbody>

                        <tr className='ExtrasRows Remergencia'>
                                <th className='ExtrasHeaders'>Emergencia Médica</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>107</td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Bomberos</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>100</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Independencia 351</td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 424 4417 </td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Policía</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>911</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Barcala 484</td>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 5483</td>
                                </div>
                            </tr>

                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Policlínica San Rafael</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 443 3333</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Irigoyen 985</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/vsui5iWufsFfRjUz8' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Hospital Schestakow</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 2580</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Comandante Torre 150</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/nfoKys6LEVsyUjCc9' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Hospital Español (Privado)</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 3960</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Libertador 950</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/zCKtRRZayKs2MQddA' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Farmacia Balloffet</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 5930</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. Balloffet 2525</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/PJSmdxpownskLHxs7' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Farmacia Ballofet II</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 3167</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. Balloffet 1835</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/qLdHJqeA3ULDyuSA9' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Farmacia Avenida</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>+54 260 442 2200</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Av. H Yrigoyen 25</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/U42xQxNHXzQHqrJFA' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                            <tr className='ExtrasRows'>
                                <th className='ExtrasHeaders'>Municipalidad</th>
                                <div className='ExtrasDataContainer'>
                                    <td className='ExtrasData'><i className='fas fa-phone Extras-icon'/>0800-222-2333</td>
                                    <td className='ExtrasData'><i id='mapIcon' className='fas fa-map-marker-alt Extras-icon'/>Cte. Salas y Belgrano</td>
                                    <td className='ExtrasData'><a className='Extras-web' href='https://goo.gl/maps/y4DJvrEagQpCXe2fA' target='_blank' rel='noopener noreferrer'><i className='fas fa-directions Extras-icon'/>Cómo llego?</a></td>
                                </div>
                            </tr>
                        
                        </tbody>
                    </table>
                </article>
            </section>
        </main>
    

    );
}



export default Extras;