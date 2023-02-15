import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar"
export default function Corpo(){
        return(
            <div>
                <div class="corpo">
      <div class="esquerda">
        <Stories />


        <Posts />

      </div>

      <Sidebar />

    </div>
            </div>
        )
}