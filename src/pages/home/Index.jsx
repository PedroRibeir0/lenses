'use client'
import Carrousel from "./Carrousel"
import Menu from "./Menu"
import Shop from "./Shop"

export default function Index() {
  return (
    <div className="content">
      <Menu/>
      <Carrousel/>
      <Shop/>
    </div>
  )
}

