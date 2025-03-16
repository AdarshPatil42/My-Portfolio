import { skillsData } from "../utils/constants.ts";
import { skillsImage } from "../utils/skill-images.ts";
import Marquee from "react-fast-marquee";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative h-[70vh] z-5 bg-gradient-to-br from-[#0b0f32] to-[#211944]"
    >
      <div className="h-[100%] w-[90%] m-auto">
        {/* Center Gradient Line */}
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold text-fuchsia-400 inline-block relative after:content-[''] after:block after:w-[calc(100%+2px)] after:h-1 after:bg-gradient-to-r after:from-fuchsia-400 after:to-transparent after:mt-2 after:rounded-full">
            Skills
          </h2>
        </div>

        {/* Marquee Skill Cards */}
        <div className="w-full py-24">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill: string) => (
              <div
                key={skill}
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-110 cursor-pointer"
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-md group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <img
                        src={skillsImage(skill) || ""}
                        alt={skill}
                        className="h-[40px] w-[40px]"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
