export default function Stories(){
  const stories = [
    {name:"bloom", image: "assets/img/bloom.jpg"},
    {name:"stella", image: "assets/img/stella.jpg"},
    {name:"flora", image: "assets/img/flora.jpg"},
    {name:"musa", image: "assets/img/musa.jpg"},
    {name:"aysha", image: "assets/img/aysha.jpg"},
    {name:"tecna", image: "assets/img/tecna.jpg"},
    {name:"sky", image: "assets/img/sky.jpg"},
    {name:"roxy", image: "assets/img/roxy.jpg"}
  ];
    return(
        
          <div class="stories">
              {stories.map((s) => <Story key = {s.name} name ={s.name} image={s.image}/>)}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}
function Story(props){
  return(
      <div class="story">
          <div class="imagem">
            <img src={props.image} alt={props.name}/>
          </div>
          <div class="usuario">
            {props.name}
          </div>
      </div>
  )
}