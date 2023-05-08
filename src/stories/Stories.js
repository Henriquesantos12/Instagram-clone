import './Stories.css'
import imagem_01 from "../stories/img/imagem_01.jpg";
import Story from './comps/Story'

export default function Stories() {
    return (
     <div className="Stories">
        <Story imagem_exemplo={imagem_01} nome="Henrique"/>
        <Story imagem_exemplo={imagem_01} nome="Henrique"/>
        <Story imagem_exemplo={imagem_01} nome="Henrique"/>
        <Story imagem_exemplo={imagem_01} nome="Henrique"/>
        <Story imagem_exemplo={imagem_01} nome="Henrique"/>
        <Story imagem_exemplo={imagem_01} nome="Henrique"/>
        <Story imagem_exemplo={imagem_01} nome="Henrique"/>
     </div> 
    )
}