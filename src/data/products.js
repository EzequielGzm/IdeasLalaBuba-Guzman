import nieve from "../assets/img/tocadorNieve.jpg"
import rosa from "../assets/img/tocadorRosa.jpg"

const productos = [
    { 
     id: "1",
     title: "Tocador Nieve",
     price: 6000,
     img: nieve
    },
    {
      id:"2",
      title:"Tocador Rosa",
      price:6000,
      img: rosa
    }
  ]

  export const getDetailById = (id) =>{
   return new Promise((resolve)=>{
     setTimeout(()=>{
       const param = id ? productos.find((prod)=> prod.id === id) : productos
       resolve(param)
     }, 2000)
   })
  }
export default productos