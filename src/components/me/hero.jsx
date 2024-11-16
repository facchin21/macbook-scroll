import documentCv from '../../assets/cv/CV- Fermin Facchin Quiroga.pdf';
import { useInView } from 'react-intersection-observer';
import ImageMe from "../../assets/Fermin.webp";
import { useText } from "../../hooks/useText";
import { aboutMe } from "../../data/aboutMe";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Hero = () => {
    const { displayedText: displayName } = useText(aboutMe.name);
    const { displayedText: displayRole } = useText(aboutMe.role);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            className='flex flex-col justify-center items-center
            object-cover object-left-top absolute rounded-lg 
            inset-0 h-full w-full'
            initial={{ opacity: 0, y: -100, x: -100 }}
            animate={{
                opacity: inView ? 1 : 0, y: inView ? 0 : 100,
                x: inView ? 0 : -100
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className='w-full h-full flex flex-col justify-center items-center mt-12'>
                <picture className="w-32 h-32 rounded-full overflow-hidden">
                    <source srcSet={ImageMe} type="image/webp" />
                    <img
                        src="/assets/Fermin.jpeg"
                        alt="Imagen de Fermin Facchin Quiroga"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </picture>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center flex flex-col justify-center items-center'>
                    <h1 className='text-xl text-white font-black'>
                        {displayName}
                    </h1>
                    <h2 className='text-stone-200 text-md font-medium'>
                        {displayRole}
                    </h2>
                    <p className='text-white text-sm font-normal py-2 w-3/4'>
                        {aboutMe.description}
                    </p>
                </div>
                <div className='flex justify-center items-center gap-2 mb-8'>
                    <a
                        className='bg-primary py-2 px-6
                        flex gap-1 items-center rounded-md border-2
                        cursor-pointer transition-all duration-300 hover:scale-105'
                        download
                        target="_blank"
                        rel="prefetch"
                        href={documentCv}
                    >
                        <span className='text-white transition-all duration-300 hover:text-violet-200'>
                            Curriculum
                        </span>
                    </a>

                    <div className='flex gap-2 py-8'>
                        <a
                            href={aboutMe.linkLinkedin}
                            target='_blank'
                            className='border-2 px-6 rounded-md
                            flex items-center justify-center py-2
                            transition-all duration-300 hover:scale-105'
                            aria-label="Button click to LinkedIn of Fermin Facchin Quiroga"
                        >
                            <FaLinkedin className="text-white text-2xl transition-all 
                            duration-300 hover:text-violet-200" />
                        </a>
                        <a
                            href={aboutMe.linkGit}
                            target='_blank'
                            className='px-7 rounded-md flex justify-center
                             items-center border-2 text-white
                             transition-all duration-300 hover:scale-105'
                            aria-label="Button click to GitHub of Facchin21"
                        >
                            <FaGithub className="text-2xl transition-all duration-300 hover:text-violet-200" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};