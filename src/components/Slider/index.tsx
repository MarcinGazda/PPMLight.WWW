import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  slide: Array<React.ReactNode>;
  oneSlideToShow?: boolean;
};

const MySlider = (props: Props) => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: props.oneSlideToShow === undefined ? 3 : 1,
    slidesToScroll: 1,
    nautoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: props.oneSlideToShow === undefined ? 2 : 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
        },
      },
    ],
  };

  const slides = props.slide.map((data, index) => (
    <div key={index}>{data}</div>
  ));

  return <Slider {...settings}>{slides}</Slider>;
};

export default MySlider;
