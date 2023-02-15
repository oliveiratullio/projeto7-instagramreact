export default function sugestoes(){
  const sugestoes = [
    {name:"faragonda" , image:"assets/img/faragonda.jpg" , reason: "Segue você" },
    {name:"diasporo" , image:"assets/img/diasporo.jpg" , reason: "Novo no Istagram" },
    {name:"riven" , image:"assets/img/riven.jpg" , reason: "Segue você" },
    {name:"icy" , image:"assets/img/icy.jpg" , reason: "Segue você" },
    {name:"storm" , image:"assets/img/storm.jpg" , reason: "Segue você" }
  ];
    return(
        <div>
            <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/faragonda.jpg" alt="faragonda"/>
              <div class="texto">
                <div class="nome">faragonda</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/diasporo.jpg" alt="diasporo"/>
              <div class="texto">
                <div class="nome">diasporo</div>
                <div class="razao">Novo no Instagram</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/riven.jpg" alt="riven" />
              <div class="texto">
                <div class="nome">riven</div>
                <div class="razao">Novo no Instagram</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/icy.jpg" alt="icy"/>
              <div class="texto">
                <div class="nome">icy</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/storm.jpg" alt="storm"/>
              <div class="texto">
                <div class="nome">storm</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </div>
        </div>
    )
}