import { Carousel } from "react-bootstrap"
import publicidad from "../assets/img/publi.jpg"
import publicidad1 from "../assets/img/publi1.jpg"
import publicidad2 from "../assets/img/publi2.jpg"
import publicidad3 from "../assets/img/publi3.jpg"

const Carrousel = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={publicidad}
      alt="Imagen publicitaria"
    />
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={publicidad1}
      alt="Imagen publicitaria"
    />
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={publicidad2}
      alt="Imagen publicitaria"
    />
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={publicidad3}
      alt="Imagen publicitaria"
    />
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Carrousel