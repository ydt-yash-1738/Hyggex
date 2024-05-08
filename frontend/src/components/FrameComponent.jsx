import roundarrow from '../assets/roundarrow.svg'
import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'
import fullscreen from '../assets/fullscreen.svg'
import bulb from '../assets/bulb.svg'
import volume from '../assets/volume.svg'

const FrameComponent = () => {
    return (
      <section className="w-[977px] flex flex-row items-start justify-start pt-0 px-[3px] pb-[16.8px] box-border max-w-full text-center text-13xl text-dimgray font-montserrat">
        <div className="flex-1 flex flex-col items-start justify-start gap-[56px] max-w-full mq675:gap-[28px]">
          <b className="relative inline-block text-transparent !bg-clip-text [background:linear-gradient(180deg,_#06286e,_#164ec0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full mq450:text-lg mq750:text-7xl text-4xl">
            Relations and Functions (Mathematics)
          </b>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xl font-med">
            <div className="w-[712px] flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[87px] pl-[79px] box-border max-w-full mq450:pr-5 mq450:box-border mq750:pl-[39px] mq750:pr-[43px] mq750:box-border">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
                  <div className="w-[82px] flex flex-col items-start justify-start gap-[14px] text-darkslateblue">
                    <div className="flex flex-row items-start justify-start py-0 px-3">
                      <b className="h-[15px] relative inline-block min-w-[58px] mq450:text-base ">
                        Study
                      </b>
                    </div>
                    <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-blue" />
                  </div>
                  <div className="w-[68px] flex flex-col items-start justify-start gap-[14px]">
                    <div className="flex flex-row items-start justify-start py-0 px-3">
                      <div className="h-[15px] relative font-medium inline-block min-w-[44px] mq450:text-base">
                        Quiz
                      </div>
                    </div>
                    <div className="self-stretch h-0.5 relative box-border border-solid border-whitesmoke" />
                  </div>
                  <div className="w-[66px] flex flex-col items-start justify-start gap-[14px]">
                    <div className="flex flex-row items-start justify-start py-0 px-3">
                      <div className="h-[15px] relative font-medium inline-block min-w-[42px] mq450:text-base">
                        Test
                      </div>
                    </div>
                    <div className="self-stretch h-0.5 relative box-border border-solid border-whitesmoke" />
                  </div>
                  <div className="w-20 flex flex-col items-start justify-start gap-[14px]">
                    <div className="flex flex-row items-start justify-start py-0 px-3">
                      <div className="h-[15px] relative font-medium inline-block min-w-[56px] mq450:text-base">
                        Game
                      </div>
                    </div>
                    <div className="self-stretch h-0.5 relative box-border border-solid border-whitesmoke" />
                  </div>
                  <div className="w-[90px] flex flex-col items-start justify-start gap-[14px]">
                    <div className="flex flex-row items-start justify-start py-0 px-3">
                      <div className="h-[15px] relative font-medium inline-block min-w-[66px] mq450:text-base">
                        Others
                      </div>
                    </div>
                    <div className="self-stretch h-0.5 relative box-border border-solid border-whitesmoke" />
                  </div>
                </div>
              </div>
              <div className='w-full flex mx-auto'>
              <div className="w-full flex flex-col px-12 pt-12 pb-24 rounded-[42.507px] mq750:pl-[25px] mq750:pr-[25px] bg-gradient-to-bl from-blue-900 via-blue-800 to-blue-400">
                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={bulb}
                    className="shrink-0 aspect-square w-[34px]"
                  />
                  <img
                    loading="lazy"
                    src={volume}
                    className="shrink-0 aspect-square w-[34px]"
                  />
                </div>
                <div className="self-center mt-28 pb-20 text-4xl font-bold tracking-wider text-center text-white max-md:mt-10">
                  9 + 6 + 7x - 2x - 3
                </div>
              </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[50px] box-border max-w-full text-5xl text-darkslategray-200 mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap mq675:justify-center">
                  <div className="flex flex-col items-start justify-start mx-auto pt-[15px] px-0 pb-0">
                    <img
                      className="w-[30px] h-[30px] relative"
                      loading="lazy"
                      alt=""
                      src={roundarrow}
                    />
                  </div>
                  <div className="w-[272px] flex flex-row items-start justify-start gap-[43px] mq450:gap-[21px]">
                    <img
                      className="h-[60px] w-[60px] relative object-contain min-h-[60px]"
                      alt=""
                      src={leftarrow}
                    />
                    <div className="flex flex-col items-start justify-start pt-[21.5px] px-0 pb-0">
                      <b className="h-[17px] relative inline-block min-w-[66px] mq450:text-lgi">
                        01/10
                      </b>
                    </div>
                    <img
                      className="h-[60px] w-[60px] relative min-h-[60px]"
                      alt=""
                      src={rightarrow}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mx-auto pt-[15px] px-0 pb-0">
                    <img
                      className="w-[30px] h-[30px] relative"
                      alt=""
                      src={fullscreen}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FrameComponent;
