import Image from "next/image"
const Hero = () => {
  return (
    
    <div className="flex-center  min-h-[274px] w-full  ml-52 space-x-4  pt-36 padding-x ">
        <div className="">
    <h1 className=" flex paddings text-5xl font-poppins font-bold">
        Gayamu mempengaruhi masa Depanmu ok
      </h1>

      {/* <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      /> */}
    </div>
    
    
    {/* <div className="hero__image-container">
      

      <div className="hero__image-overlay" />
    </div> */}
     <div className="flex flex-col min-h-[700] w-full ">
        <Image src="/ok.jpg" alt="hero" width={500} height={350} className="" />
      </div>
  </div>
  
  )
}

export default Hero
