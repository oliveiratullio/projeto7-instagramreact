export default function Posts(){
  const posts =[
    {userName: "bloom",
    userImage: "assets/img/bloom.jpg",
    postImage: "assets/img/kiko.jpg",
    likedByImage: "assets/img/stella.jpg" ,
    likeByName: "stella",
    likes: 101523
    },
    {userName: "flora",
    userImage: "assets/img/flora.jpg",
    postImage: "assets/img/floresta.jpg",
    likedByImage: "assets/img/aysha.jpg" ,
    likeByName: "aysha",
    likes: 99159
    },
    {userName: "stella",
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
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/bloom.jpg" alt="kiko"/>
                bloom
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/kiko.jpg" alt="kiko"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/stella.jpg" alt="respondeai"/>
                <div class="texto">
                  Curtido por <strong>stella</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/flora.jpg" alt="floresta"/>
                flora
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/floresta.jpg" alt="floresta" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/aysha.jpg" alt="adorable_animals"/>
                <div class="texto">
                  Curtido por <strong>aysha</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/stella.jpg" alt="floresta"/>
                stella
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/stella-enchantix.jpg" alt="floresta" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/musa.jpg" alt="adorable_animals"/>
                <div class="texto">
                  Curtido por <strong>musa</strong> e <strong>outras 120.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}