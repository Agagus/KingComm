import { useState } from "react";
import Spinner from "../../../../components/Spinner/Spinner";
import { BtnSlider } from "./BtnSlider";
import {
  Container,
  ContainerImage,
  Img,
  Miniatures,
  Thumbnails,
} from "./styled-components/Slider";

// images: array de imágenes pasado x parámetro
export const Slider = ({ images, loading }: any) => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  //mapeo el array para acceder a la propiedad en donde están las imágenes
  let productImages: any = images?.map((el: any, key: number) => el.url_image);
  // console.log(images);
  const nextSlide = () => {
    if (slideIndex < productImages.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === productImages.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(productImages.length);
    }
  };

  return (

    <Container >
  
        {loading ? (
          <Spinner />
        ) : productImages ? (
          <ContainerImage>
            <Img src={productImages[slideIndex - 1]} alt="" />
          </ContainerImage>
        ) : (
          <Img src={"imagen no encontrada"} alt="" />
        )}

        <div className="buttons">
          <BtnSlider
            className="boton"
            moveSlide={prevSlide}
            direction={"prev"}
          />
          <BtnSlider
            className="boton"
            moveSlide={nextSlide}
            direction={"next"}
          />
        </div>

        <Thumbnails>          
          {productImages?.map((el: any, key: number) => (
            <Miniatures key={el.id}>
              <img   
                key={el.id}             
                className={slideIndex - 1 === key ? "img active" : "img pasive"}
                src={el}
                alt='foto del producto'
              />
            </Miniatures>
          ))}
        </Thumbnails>
   
    </Container>

  );
};
