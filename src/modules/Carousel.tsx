import { DotPosition } from "antd/es/carousel";
import { createRef, useState } from "react";
import { Carousel, Col, Row } from "antd";
import style from "./css/Carousel.module.css";
import before_1791 from "./../assets/Photoediting/DSC01791_1.jpg";
import after_1791 from "./../assets/Photoediting/DSC01791.jpg";
import before_199 from "./../assets/DaytoTwilight/DSCF0199_1.jpg";
import after_199 from "./../assets/DaytoTwilight/DSCF0199.jpg";
import before_61 from "./../assets/Retouching/Visuals.RealEstate 61.jpg";
import after_62 from "./../assets/Retouching/Visuals.RealEstate 62.jpg";
import before_08 from "./../assets/VirtualStaging/Virtual Staging 08.jpg";
import after_07 from "./../assets/VirtualStaging/Virtual Staging 07.jpg";
import before_264 from "./../assets/ClippingPath/2 day-264_1.jpg";
import after_264 from "./../assets/ClippingPath/2 day-264.jpg";
import before_038 from "./../assets/Photoediting/DSCF6038.jpg";
import after_039 from "./../assets/Photoediting/DSCF6039.jpg";
import left from "./../assets/left.png";
import right from "./../assets/right.png";

const Carousels = () => {
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
      <Row justify="center" className={style.carousel}>
        <Col span={24}>
          <Carousel autoplay draggable dotPosition="top">
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_1791} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_1791} alt="" className="w-full" />
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

            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_199} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_199} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>Convert Day To Twilight</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_61} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_62} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>Product Retouching</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_08} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_07} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>Virtual Staging</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_264} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_264} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>Clipping Path</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_038} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_039} alt="" className="w-full" />
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
        </Col>
      </Row>
    </div>
  );
};

export default Carousels;
