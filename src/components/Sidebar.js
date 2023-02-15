import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function Sidebar(){
    return(
        <div>
            <div class="sidebar">
                <Usuario name={"darkbloom"} image={"assets/img/darkbloom.jpg"}/>

                <Sugestoes />

        

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
        </div>
    )
}