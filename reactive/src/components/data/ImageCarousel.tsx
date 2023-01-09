import { useState } from "react";
import { Box, IconButton, Image } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider, { Settings } from "react-slick";

type ImageCarouselProps = {
  images?: string[];
};

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  if (!images) return <></>;

  const [slider, setSlider] = useState<Slider | null>(null);
  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box position="relative" width="full" height="full" my={-4} p={6}>
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        outline="1px solid"
        outlineColor="base.text"
        size="sm"
        left="5px"
        top="50%"
        position="absolute"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        color="base.text"
        backgroundColor="base.background"
        _hover={{ backgroundColor: "base.grey" }}
        onClick={() => slider?.slickPrev()}>
        <FaArrowLeft size="15px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        outline="1px solid"
        outlineColor="base.text"
        size="sm"
        right="5px"
        top="50%"
        position="absolute"
        transform={"translate(0%, -50%)"}
        zIndex={2}
        color="base.text"
        backgroundColor="base.background"
        _hover={{ backgroundColor: "base.grey" }}
        onClick={() => slider?.slickNext()}>
        <FaArrowRight size="15px" />
      </IconButton>
      <Slider
        {...sliderSettings}
        ref={(slider: Slider | null) => setSlider(slider)}>
        {images.map((src, key) => (
          <Image
            key={key}
            height={{ base: "xs", md: "md" }}
            position="relative"
            src={src}
            fit="contain"
          />
        ))}
      </Slider>
    </Box>
  );
};
