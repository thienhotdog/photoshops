import { DotPosition } from "antd/es/carousel";
import { createRef, useState } from "react";
import { Carousel, Col, Row } from "antd";
import style from "./css/CarouselHiden.module.css";

import left from "./../assets/left.png";
import right from "./../assets/right.png";

import before_01806 from "./../assets/Photoediting/DSC01806_1.jpg";
import after_01806 from "./../assets/Photoediting/DSC01806.jpg";
import before_9065 from "./../assets/Photoediting/DSCF6290.jpg";
import after_9063 from "./../assets/Photoediting/DSCF6291.jpg";
import before_9085 from "./../assets/Photoediting/DSC_9085.jpg";
import after_9083 from "./../assets/Photoediting/DSC_9083.jpg";
import before_9182 from "./../assets/Photoediting/DSCF6035.jpg";
import after_9180 from "./../assets/Photoediting/DSCF6036.jpg";
import before_5594 from "./../assets/Photoediting/DSCF5994_1.jpg";
import after_5594 from "./../assets/Photoediting/DSCF5994.jpg";
import before_6056 from "./../assets/Photoediting/DSCF6056.jpg";
import after_6057 from "./../assets/Photoediting/DSCF6057.jpg";

import before_11245 from "./../assets/DaytoTwilight/11245 S Kingston Ave_TBAY-50.jpg";
import after_11245 from "./../assets/DaytoTwilight/11245 S Kingston Ave_TBAY-51 - day to dusk.jpg";
import before_0275 from "./../assets/DaytoTwilight/DSCF0275.jpg";
import after_0275 from "./../assets/DaytoTwilight/DSCF0276.jpg";
import before_0273 from "./../assets/DaytoTwilight/DSCF0273.jpg";
import after_0273 from "./../assets/DaytoTwilight/DSCF0274.jpg";
import before_0234 from "./../assets/DaytoTwilight/DSCF0234_1.jpg";
import after_0234 from "./../assets/DaytoTwilight/DSCF0234.jpg";
import before_0271 from "./../assets/DaytoTwilight/DSCF0271.jpg";
import after_0271 from "./../assets/DaytoTwilight/DSCF0272.jpg";
import before_1953 from "./../assets/DaytoTwilight/19151.jpg";
import after_1953 from "./../assets/DaytoTwilight/19153.jpg";

import before_58 from "./../assets/Retouching/Visuals.RealEstate 57.jpg";
import after_58 from "./../assets/Retouching/Visuals.RealEstate 58.jpg";
import before_54 from "./../assets/Retouching/Visuals.RealEstate 53.jpg";
import after_54 from "./../assets/Retouching/Visuals.RealEstate 54.jpg";
import before_52 from "./../assets/Retouching/Visuals.RealEstate 51.jpg";
import after_52 from "./../assets/Retouching/Visuals.RealEstate 52.jpg";
import before_4080 from "./../assets/Retouching/IMG_4080.jpg";
import after_4080 from "./../assets/Retouching/IMG_4080 (1).jpg";
import before_3911 from "./../assets/Retouching/IMG_3911.jpg";
import after_3911 from "./../assets/Retouching/IMG_3911 (1).jpg";
import before_4087 from "./../assets/Retouching/IMG_4087.jpg";
import after_4087 from "./../assets/Retouching/IMG_4087 (1).jpg";

import before_0838 from "./../assets/VirtualStaging/DSC00838.jpg";
import after_0838 from "./../assets/VirtualStaging/DSC00838 (1).jpg";
import before_0863 from "./../assets/VirtualStaging/DSC00863.jpg";
import after_0863 from "./../assets/VirtualStaging/DSC00863 (1).jpg";
import before_0923 from "./../assets/VirtualStaging/DSC00903.jpg";
import after_0923 from "./../assets/VirtualStaging/DSC00923 (1).jpg";
import before_0928 from "./../assets/VirtualStaging/DSC00928.jpg";
import after_0928 from "./../assets/VirtualStaging/DSC00928 (1).jpg";
import before_0953 from "./../assets/VirtualStaging/DSC00953.jpg";
import after_0953 from "./../assets/VirtualStaging/DSC00953 (1).jpg";
import before_04 from "./../assets/VirtualStaging/Virtual Staging 03.jpg";
import after_04 from "./../assets/VirtualStaging/Virtual Staging 04.jpg";

import before_001 from "./../assets/ClippingPath/20230207-DYConsultants-Entela-001 (1).jpg";
import after_001 from "./../assets/ClippingPath/20230207-DYConsultants-Entela-001.jpg";
import before_002 from "./../assets/ClippingPath/20230207-DYConsultants-Joanna-002.jpg";
import after_002 from "./../assets/ClippingPath/20230207-DYConsultants-Joanna-002 (1).jpg";
import before_003 from "./../assets/ClippingPath/20230207-DYConsultants-Regan-001.jpg";
import after_003 from "./../assets/ClippingPath/20230207-DYConsultants-Regan-001 (1).jpg";
import before_004 from "./../assets/ClippingPath/20230207-DYConsultants-Zheng-002.jpg";
import after_004 from "./../assets/ClippingPath/20230207-DYConsultants-Zheng-002 (1).jpg";
import before_11 from "./../assets/ClippingPath/PRODUCT SHOOTS11_1.jpg";
import after_11 from "./../assets/ClippingPath/PRODUCT SHOOTS11.jpg";
import before_13 from "./../assets/ClippingPath/PRODUCT SHOOTS13_1.jpg";
import after_13 from "./../assets/ClippingPath/PRODUCT SHOOTS13.jpg";
type Props = {
  title?: string;
};
const CarouselHiden = (props: Props) => {
  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: 2,
          left: 5,
          width: 50,
          height: 50
        }}
        onClick={onClick}
      >
        <img src={left} alt="" width={50} height={50} />
      </div>
    );
  };
  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: 5,
          width: 50,
          height: 50
        }}
        onClick={onClick}
      >
        <img src={right} alt="" />
      </div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <Row justify="center">
        <Col span={24}>
          {props.title == "photoediting" && (
            <Carousel autoplay draggable dotPosition="top">
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_01806} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_01806} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Real Estate Photo editing
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_9065} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_9063} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Convert Day To Twilight
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_9085} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_9083} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Product Retouching</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_9182} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_9180} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Virtual Staging</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_5594} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_5594} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Clipping Path</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_6056} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_6057} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>360 panarama</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          )}

          {props.title == "DaytoTwilight" && (
            <Carousel autoplay draggable dotPosition="top">
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_11245} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_11245} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Real Estate Photo editing
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0275} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0275} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Convert Day To Twilight
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0273} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0273} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Product Retouching</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0234} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0234} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Virtual Staging</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0271} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0271} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Clipping Path</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_1953} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_1953} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>360 panarama</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          )}

          {props.title == "Retouching" && (
            <Carousel autoplay draggable dotPosition="top">
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_58} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_58} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Real Estate Photo editing
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_54} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_54} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Convert Day To Twilight
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_52} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_52} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Product Retouching</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_4080} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_4080} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Virtual Staging</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_3911} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_3911} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Clipping Path</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_4087} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_4087} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>360 panarama</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          )}
          {props.title == "VirtuaStaging" && (
            <Carousel autoplay draggable dotPosition="top">
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0838} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0838} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Real Estate Photo editing
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0863} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0863} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Convert Day To Twilight
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0923} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0923} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Product Retouching</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0928} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0928} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Virtual Staging</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_0953} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_0953} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Clipping Path</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_04} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_04} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>360 panarama</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          )}
          {props.title == "ClippingPath" && (
            <Carousel autoplay draggable dotPosition="top">
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_001} alt="" className="w-full " />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_001} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Real Estate Photo editing
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_002} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_002} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>
                        Convert Day To Twilight
                      </p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_003} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_003} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Product Retouching</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:cursor-pointer">
                <div className="flex justify-between">
                  <div className="w-[49.85%]">
                    <img src={before_004} alt="" className="w-full" />
                    <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                      <p className={style.text_banner}>BEFORE</p>
                    </div>
                  </div>
                  <div className="w-[49.85%] ">
                    <img src={after_004} alt="" className="w-full" />
                    <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                      <p className={style.text_banner}>Virtual Staging</p>

                      <div className="flex ">
                        <p className={style.text_banner}>AFTER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CarouselHiden;
