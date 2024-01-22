import { Col, Row } from "antd";
import style from "./css/ThisWhatWeDo.module.css";
import { Link } from "react-router-dom";
import CtaBox from "./CtaBox";
import before_9045 from "./../assets/Photoediting/DSC_9045.jpg";
import after_9046 from "./../assets/Photoediting/DSC_9046.jpg";

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
import before_038 from "./../assets/Photoediting/DSCF6038.jpg";
import after_039 from "./../assets/Photoediting/DSCF6039.jpg";

import before_0208 from "./../assets/DaytoTwilight/DSCF0208_1.jpg";
import after_0208 from "./../assets/DaytoTwilight/DSCF0208.jpg";

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

import before_55 from "./../assets/Retouching/Visuals.RealEstate 55.jpg";
import after_56 from "./../assets/Retouching/Visuals.RealEstate 56.jpg";

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

import before_02 from "./../assets/VirtualStaging/Virtual Staging 02.jpg";
import after_01 from "./../assets/VirtualStaging/Virtual Staging 01.jpg";

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

import before_174 from "./../assets/ClippingPath/4 day-174_1.jpg";
import after_174 from "./../assets/ClippingPath/4 day-174.jpg";

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
  showMenus?: () => void;
  title?: string;
  home?: string;
};
const ThisWhatWeDo = (props: Props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for smoothly scrolling
    });
  };
  console.log(props?.showMenus, "asg");
  return (
    <div>
      {/* <h3 className="pt-[60px] text-center  text-[40px] font-bold">
        {props?.title == "photoEditing"
          ? "Real Estate Photo editing"
          : "This what we do"}
      </h3> */}
      {props?.title == "photoEditing" && (
        <h3 className={style.h3}>Real Estate Photo editing</h3>
      )}
      {props?.title == "DaytoTwilight" && (
        <h3 className={style.h3}>Convert Day to Twilight</h3>
      )}
      {props?.title == "ClippingPath" && (
        <h3 className={style.h3}>Clipping Path</h3>
      )}
      {props?.title == "Panarama" && <h3 className={style.h3}>360 panarama</h3>}

      {props?.title == "Retouching" && (
        <h3 className={style.h3}>Product Retouching</h3>
      )}
      {props?.title == "VideoEditing" && (
        <h3 className={style.h3}>Video Editing</h3>
      )}
      {props?.title == "VirtuaStaging" && (
        <h3 className={style.h3}>Virtual Staging</h3>
      )}
      {!props?.title && <h3 className={style.h3}>This What We Do</h3>}
      <div className={style.container}>
        <Row gutter={32}>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="max-w-[1344px] py-3"
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/photoediting" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%]">
                        <img src={before_9045} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_9046} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Real Estate Photo editing</p>
                  <p className={style.text_title_p}>
                    Perfect for real estate photo editing so you can present
                    your listing with top-notch, retouched professional-looking
                    photos.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    {props.title == "photoEditing" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_01806} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_01806} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "DaytoTwilight" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_11245} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_11245} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "Retouching" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_58} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_58} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "VirtuaStaging" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0838} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0838} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "ClippingPath" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_001} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_001} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="cursor-pointer py-3  "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/day_to_twilight" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%] max-h-[500px]">
                        <img src={before_0208} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_0208} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Convert Day to Twilight</p>
                  <p className={style.text_title_p}>
                    Our photo retouching service will take your exterior
                    property photo from drab to fab by replacing your sky with a
                    beautiful dusk setting.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    {props?.title == "photoEditing" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_9065} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_9063} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "DaytoTwilight" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0275} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0275} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "Retouching" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_54} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_54} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "VirtuaStaging" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0863} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0863} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "ClippingPath" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_002} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_002} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className=" cursor-pointer py-3 "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/retouching" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%] max-h-[500px]">
                        <img src={before_55} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_56} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Product Retouching</p>
                  <p className={style.text_title_p}>
                    Perfect for real estate photo editing so you can present
                    your listing with top-notch, retouched professional-looking
                    photos.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    {props?.title == "photoEditing" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_9085} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_9083} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "DaytoTwilight" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0273} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0273} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "Retouching" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_52} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_52} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "VirtuaStaging" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0923} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0923} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "ClippingPath" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_003} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_003} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="cursor-pointer py-3 "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/virtual_staging" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%] max-h-[500px]">
                        <img src={before_02} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_01} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Virtual Staging</p>
                  <p className={style.text_title_p}>
                    Our team can add furniture to real estate photography to
                    show potential buyers just how versatile the space is.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    {props?.title == "photoEditing" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_9182} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_9180} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "DaytoTwilight" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0234} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0234} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "Retouching" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_4080} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_4080} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "VirtuaStaging" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0928} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0928} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "ClippingPath" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_004} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_004} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="cursor-pointer py-3 "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/clipping_path" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%] max-h-[500px]">
                        <img src={before_174} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_174} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Clipping Path</p>
                  <p className={style.text_title_p}>
                    Perfect for real estate photo editing so you can present
                    your listing with top-notch, retouched professional-looking
                    photos.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    {props?.title == "photoEditing" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_5594} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_5594} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "DaytoTwilight" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0271} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0271} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "Retouching" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_3911} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_3911} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "VirtuaStaging" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_0953} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_0953} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "ClippingPath" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_11} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_11} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="cursor-pointer py-3 "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/720_panarama" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%] max-h-[500px]">
                        <img src={before_038} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_039} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>360 panarama</p>
                  <p className={style.text_title_p}>
                    Perfect for real estate photo editing so you can present
                    your listing with top-notch, retouched professional-looking
                    photos.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    {props?.title == "photoEditing" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_6056} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_6057} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "DaytoTwilight" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_1953} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_1953} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "Retouching" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_4087} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_4087} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "VirtuaStaging" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_04} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_04} alt="" />
                        </div>
                      </>
                    )}
                    {props.title == "ClippingPath" && (
                      <>
                        <div className="max-w-[49.85%] max-h-[500px]">
                          <img src={before_13} alt="" />
                        </div>
                        <div className="max-w-[49.85%] ">
                          <img src={after_13} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
      {props?.home != "home" && <CtaBox />}
    </div>
  );
};
export default ThisWhatWeDo;
