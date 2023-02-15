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
          {sugestoes.map((s) => <Sugestao key = {s.name} name ={s.name} image={s.image}/>)}
          
        </div>
        </div>
    )
}

function Sugestao(props){
  return(
    <div class="sugestao">
            <div class="usuario">
              <img src={props.image} alt={props.name}/>
              <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.reason}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
  )
}