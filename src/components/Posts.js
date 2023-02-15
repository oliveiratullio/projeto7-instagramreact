import { useState } from "react";

export default function Posts(){
  const posts =[
    {key: 1,
    userName: "bloom",
    userImage: "assets/img/bloom.jpg",
    postImage: "assets/img/kiko.jpg",
    likedByImage: "assets/img/stella.jpg" ,
    likeByName: "stella",
    likes: 101523
    },
    {key: 2,
    userName: "flora",
    userImage: "assets/img/flora.jpg",
    postImage: "assets/img/floresta.jpg",
    likedByImage: "assets/img/aysha.jpg" ,
    likeByName: "aysha",
    likes: 99159
    },
    {key: 3,
    userName: "stella",
    userImage: "assets/img/stella.jpg",
    postImage: "assets/img/stella-enchantix.jpg",
    likedByImage: "assets/img/musa.jpg" ,
    likeByName: "musa",
    likes: 120159
    }
  ];
    return(
        <div>
            <div class="posts">
            {posts.map((p) => <Post key = {p.key} userName ={p.userName} userImage={p.userImage} postImage ={p.postImage} likedByImage ={p.likedByImage}
            likeByName = {p.likeByName} likes = {p.likes} />)}
            </div>
        </div>
    )
}
function Post(props){
  const [salvar, setSalvar] = useState(false)
  const [curtir, setCurtir] = useState(false)
  const [qtdCurtidas, setQtdCurtidas] = useState(props.likes)
  function salvarDessalvar(){
    if(salvar === true){
      setSalvar(false)
    }else {
      setSalvar(true);
    }
  }
  function curtirDescurtir(){
    if(curtir === false){
      setCurtir(true)
      setQtdCurtidas(qtdCurtidas + 1)
    }else{
      setCurtir(false)
      setQtdCurtidas(qtdCurtidas - 1)
    }
  }
  function curtirImagem(){
    if(curtir === false ){
      setCurtir(true)
      setQtdCurtidas(qtdCurtidas +1)
    }
  }
  return(   <div data-test="post" class="post">
            <div class="topo">
              <div class="usuario">
                <img data-test="post-image" src={props.userImage} alt={props.userName}/>
                {props.userName}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img onClick={curtirImagem} src={props.postImage} alt={props.userName}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon class={curtir ? "vermelho" : "  "} onClick={curtirDescurtir} name={curtir ? "heart" : "heart-outline"}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" name={salvar ? "bookmark" : "bookmark-outline"} onClick={salvarDessalvar}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.likedByImage} alt="respondeai"/>
                <div class="texto">
                  Curtido por <strong>{props.likeByName}</strong> e <strong  data-test="likes-number" >outras {qtdCurtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
           )
}