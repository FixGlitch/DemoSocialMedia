import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="bg-gray100">
      <div className="max-w-screen mx-[5%] md:mx-[20%] bg-gray100">
        <div className="grid md:grid-cols-2 gap-4 items-stretch py-10">
          <div className="md:order-1 bg-white p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between border-b-2 border-gray100 pb-2">
                <h4 className="font-medium text-title-sm text-start text-gray">
                  ABOUT ME
                </h4>
                <span className="font-normal text-md text-gray">Model</span>
              </div>
              <p className="text-black font-extralight mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci odit delectus quas sed id officiis ipsa? Blanditiis eum
                expedita qui ipsum aperiam, exercitationem impedit eaque
                asperiores quo, natus aut ad?
              </p>
            </div>
          </div>
          <div className="md:order-2 bg-white p-4 flex flex-col justify-between">
            <div className="flex justify-between border-b-2 border-gray100 pb-2">
              <h4 className="font-medium text-title-sm text-start text-gray">
                CONTACTS
              </h4>
              <Image
                src={"/assets/social-media.png"}
                alt="Social Media Icons"
                width={150}
                height={50}
              />
            </div>
            <div className="mt-4 relative w-full h-56">
              <Image
                src={"/assets/map.png"}
                alt="Map"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:col-span-2 md:order-3 flex justify-center mt-1">
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
