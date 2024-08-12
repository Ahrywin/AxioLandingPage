import React from 'react'
import './EducacionVal.css'
import ImgVio from '../../assets/images/ImgVio.png'
import ImgAdi from '../../assets/images/ImgAdi.png'
import ImgDes from '../../assets/images/ImgDes.png'
import ImgEmb from '../../assets/images/ImgEmb.png'
import ImgSui from '../../assets/images/ImgSui.png'
import ImgBaj from '../../assets/images/ImgBaj.png'
import { LottieAnim } from '../LottieComp/LottieAnim'
import animacioncertif1 from '../LottieComp/animations/animationcertif1.json'
import animacioncertif2 from '../LottieComp/animations/animationcertif2.json'
 
const EducacionVal = () => {
  return (
    <div>
        <section className="certif-section-a">
            <p>En la educación descansan las esperanzas de un mundo mejor. 
             Un mundo libre del cáncer de la corrupción, del azote de la violencia 
             y de la tragedia de las desigualdades sociales.</p>
        </section>
        <section className="certif-section-b">
            <p>Múltiples y variados diagnósticos develan que los esfuerzos de los sistemas educativos 
                no están siendo suficientes para hacer frente a los complejos fenómenos sociales que 
                lastiman a nuestra sociedad, pero principalmente la evidente realidad nos demanda una 
                transformación de la educación y una revisión de los paradigmas que sostienen los modelos 
                educativos actuales. En otras palabras, <span className="certif-distinction">no existe mejor 
                evaluación de la educación que la cruda realidad social y no tenemos buenos resultados</span>. Altos índices de</p>
            <ul className="list-certif"> 
                <li><img src={ImgVio} alt="" className="img-list" /> Violencia Escolar</li>
                <li><img src={ImgSui} alt="" className="img-list"/> Suicidios</li>
                <li><img src={ImgEmb} alt="" className="img-list"/> Embarazos Prematuros</li>
                <li><img src={ImgDes} alt="" className="img-list"/> Deserción Escolar</li>
                <li><img src={ImgAdi} alt="" className="img-list"/> Adicciones</li>
                <li><img src={ImgBaj} alt="" className="img-list"/> Bajo Rendimiento</li>
            </ul>
            <p>encabezan la lista de prioridades de la mayoría de las comunidades educativas.</p>
        </section>
        <section className="certif-section-c">
            <LottieAnim animacion={animacioncertif1} ancho={"391.21"} alto={"356px"}/>
            <div className="certif-container-a">
                <p>Las visiones pragmáticas y utilitaristas de la educación no han dado 
                    respuesta a estos desafíos y muchas de las políticas educativas apenas rozan 
                    la superficialidad del fenómeno, dejando al descubierto un gran vacío educativo, 
                    un vacío que solo puede llenarse con los valores que son inherentes y universales 
                    a la naturaleza humana. Valores que nos permiten vivir en armonía, en prosperidad y 
                    en la plenitud de nuestras potencialidades. Es necesario reconocer que los valores 
                    universales son la respuesta a los desafíos sociales de todos los tiempos</p>
                <p>Es fundamental también reconocer que a la importancia de la formación axiológica 
                    se ha sumado un sentido de urgencia y de acción inmediata. 
                    <span className="certif-distinction-blue"> ¡No hay tiempo que perder!</span></p>
            </div>
        </section>
        <section className="certif-section-d">
            <p>El desafío no es menor. Más allá de reconocer que es necesario fortalecer la formación 
                en valores en los hogares y escuelas, se necesitan acciones coordinadas que tengan un 
                sólido fundamento científico alejado de cualquier ideología religiosa o política. Se requiere 
                certeza en el rumbo y la convicción de mantenerse en la ruta trazada.</p>
            <LottieAnim animacion={animacioncertif2} ancho={"432px"} alto={"432px"} />
        </section>
        <section className="certif-section-e">
            <p>La certificación <span className="certif-distinction-blue"> “Educación con valores” </span> busca ser un motor que contribuya a la suma de voluntades 
                y a la coordinación de las acciones bajo la implementación de una metodología de gestión escolar 
                que logra el esfuerzo coordinado de padres, directivos y docentes para que en la escuela se hagan 
                vida los valores en la cotidianidad.</p>
            <p><span className="certif-distinction"> ¡Certifica a tu institución educativa! </span> </p>
        </section>
    </div>
  )
}

export default EducacionVal
