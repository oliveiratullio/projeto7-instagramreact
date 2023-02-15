export default function Stories(){
  const stories = [
    {nome:"bloom", image: "assets/img/bloom.jpg"},
    {nome:"stella", image: "assets/img/stella.jpg"},
    {nome:"flora", image: "assets/img/flora.jpg"},
    {nome:"musa", image: "assets/img/musa.jpg"},
    {nome:"aysha", image: "assets/img/aysha.jpg"},
    {nome:"tecna", image: "assets/img/tecna.jpg"},
    {nome:"sky", image: "assets/img/sky.jpg"},
    {nome:"roxy", image: "assets/img/roxy.jpg"}
  ];
    return(
        

        <div>
            <div class="stories">
          <div class="story">
            <div class="imagem">
              <img src="assets/img/bloom.jpg" alt="bloom"/>
            </div>
            <div class="usuario">
              bloom
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/stella.jpg" alt="stella"/>
            </div>
            <div class="usuario">
              stella
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/flora.jpg" alt="flora"/>
            </div>
            <div class="usuario">
              flora
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/musa.jpg" alt="musa"/>
            </div>
            <div class="usuario">
              musa
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/aysha.jpg" alt="aysha"/>
            </div>
            <div class="usuario">
              aysha
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/tecna.jpg" alt="tecna"/>
            </div>
            <div class="usuario">
              tecna
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/sky.jpg" alt="sky"/>
            </div>
            <div class="usuario">
              sky
            </div>
          </div>

          <div class="story">
            <div class="imagem">
              <img src="assets/img/roxy.jpg" alt="roxy"/>
            </div>
            <div class="usuario">
              roxy
            </div>
          </div>

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
        </div>
    )
}