import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="w-full bg-grat100">
      <div className="max-w-screen-lg mx-[5%] md:mx-[20%] bg-grat100">
        <div className="grid md:grid-cols-2 gap-4 items-center py-10">
          <div className="md:order-2 mb-4">
            <div className="flex justify-between bg-white p-4">
              <h4 className="font-medium text-title-sm text-start text-gray">
                CONTACTS
              </h4>
              <Image
                src={"/assets/social-media.png"}
                alt="profile"
                className="object-cover w-[200px] h-auto"
                width={100}
                height={100}
              />
            </div>
            <div className="text-black text-lg mt-[2px] mb-0 xl:h-auto sm:h-[270px] ">
              <Image
                src={"/assets/map.png"}
                alt="profile"
                className="object-cover w-full h-full"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="md:order-1">
            <div className="flex justify-between bg-white p-4">
              <h4 className="font-medium text-title-sm text-start text-gray">
                ABOUT ME
              </h4>
              <span className="font-normal text-md text-gray">Model</span>
            </div>
            <p className="text-black font-extralight mb-4 bg-white px-4 pb-[6.40rem] mt-[2px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              odit delectus quas sed id officiis ipsa? Blanditiis eum expedita
              qui ipsum aperiam, exercitationem impedit eaque asperiores quo,
              natus aut ad?
            </p>
          </div>
          <div className="md:col-span-2 md:order-3 flex justify-center -mt-4">
            <button className="flex border-2 items-center justify-center border-gray300 w-full py-4 px-4">
              <span className="font-bold text-sm text-gray700">
                Show more information...
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
