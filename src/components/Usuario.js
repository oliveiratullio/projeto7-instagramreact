import {useState} from "react"
export default function Usuario(props){
    const [userName, setUserName] = useState(props.name)
    const [userImage, setUserImage] = useState(props.image)
    function trocarNome(){
      const nome = prompt("Qual o novo usuário?")
      if (nome !== "" && nome !== null & nome !== undefined){
        setUserName(nome)
      }
    }
    function trocarImagem(){
      
      const imagem = prompt("Qual a nova imagem?")
      if (imagem !== "" && imagem !== null && imagem !== undefined){
        setUserImage(imagem)
      }
    }
  return(
        <div>
            <div class="usuario">
          <img onClick={trocarImagem} src={userImage} alt="imagem de perfil"data-test="profile-image"/>
          <div class="texto">
            <span>
              <strong data-test="name">{userName}</strong>
              <ion-icon onClick={trocarNome} name="pencil" data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>
        </div>
    )
}