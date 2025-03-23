import Head from 'next/head';
import Link from 'next/link'; // Import Link from next/link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Head>
        <title>Imran Khan - Resume</title>
      </Head>
      <div className="bg-white p-6 w-full max-w-3xl">
        {/* Header */}
        <div className="text-center border-b border-gray-300 pb-2">
          <h1 className="text-2xl font-bold text-blue-800">IMRAN KHAN</h1>
          <p className="text-xs text-gray-600">
            Frontend Developer | Master Of Computer Application
          </p>
          <div className="flex justify-center space-x-3 mt-1 text-xs text-gray-700">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-[10px]" />
              imarankhan9768@gmail.com
            </p>
            <span>|</span>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-1 text-[10px]" />
              8003545085
            </p>
            <span>|</span>
            <p>
              <Link
                href="https://www.linkedin.com/in/imran-khan-2a0711270"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-1 text-[10px]" />
                LinkedIn
              </Link>
            </p>
            <span>|</span>
            <p>
              <Link
                href="https://github.com/imran2904"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-1 text-[10px]" />
                GitHub
              </Link>
            </p>
          </div>
        </div>

        {/* Objective */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-blue-800">
            Objective
          </h2>
          <p className="text-xs mt-2">
            Frontend Developer with 1 year of experience in scalable web applications using React.js, Next.js, StoryBook, Bootstrap and Tailwind CSS, specializing in performance, mentoring, and user-focused solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-blue-800">
            Skills
          </h2>
          <div className="flex mt-2">
            {/* Left Side: Languages, Technical Skills, Tools */}
            <div className="w-1/2">
              <p className="text-xs font-bold">Languages</p>
              <p className="text-xs">JavaScript, TypeScript, Python, Java</p>
              <p className="text-xs font-bold mt-1">Technical Skills</p>
              <p className="text-xs">Next.js, React.js, Node.js, Tailwind CSS, Bootstrap, MongoDB, Vercel, Node.js (Basic)</p>
              <p className="text-xs font-bold mt-1">Tools</p>
              <p className="text-xs">Jira, Postman, Git, GitHub, Microsoft Office</p>
            </div>
            {/* Right Side: Soft Skills */}
            <div className="w-1/2 pl-4">
              <p className="text-xs font-bold">Soft Skills</p>
              <ul className="list-disc list-inside text-xs space-y-0.5">
                <li>Time Management</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-blue-800">
            Work Experience
          </h2>
          <div className="mt-2">
            <h3 className="text-sm font-medium">
              Now a Wave Technologies
              <span className="text-xs text-gray-600 float-right">
                August 2024 - Present
              </span>
            </h3>
            <p className="text-xs text-gray-700 italic">Frontend Developer</p>
            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5">
              <li>
                Developed and maintained responsive web applications using Next.js and Tailwind CSS, enhancing user engagement by 20%.
              </li>
              <li>
                Collaborated with a team of 5 to implement RESTful APIs, ensuring seamless data flow between frontend and backend.
              </li>
              <li>
                Optimized frontend performance, reducing page load times by 15%.
              </li>
              <li>
                Participated in code reviews and followed Agile methodologies, improving code quality and development efficiency.
              </li>
              <li>
                Single-handedly developed StockeZee, a stock management web application from scratch, enabling users to track stock prices and manage portfolios efficiently.
              </li>
              <li>
                Contributed to NiftyTrader, a financial platform for stock market trading, by developing multiple modules including user dashboards, data visualization tools, and Option Chain, improving trader decision-making efficiency by 20%.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-blue-800">
            Education
          </h2>
          <div className="mt-2">
            <div className="text-sm">
              Bikaner Technical University
            </div>
            <div className="text-[13px] text-gray-700 font-normal">
              Master of Computer Applications (MCA) - 8.2/10
              <span className="text-xs text-gray-600 float-right">
                2022 - 2024
              </span>
            </div>
          </div>
          <div className="mt-2">
            <div className="text-sm">
              Jai Narain Vyas University (JNVU)
            </div>
            <div className="text-[13px] text-gray-700 font-medium">
              Bachelor of Science (BSc) in Mathematics
              <span className="text-xs text-gray-600 float-right">
                2018 - 2021
              </span>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-blue-800">
            Projects
          </h2>
          <div className="mt-2">
            <h3 className="text-sm font-medium">
              <Link
                href="https://stockezee.com"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <span className="text-black">StockeZee{' '}</span>
                <FontAwesomeIcon icon={faLink} className="text-[10px]" />
              </Link>
              <span className="text-xs font-medium text-gray-600 float-right">
                2024 - Present
              </span>
            </h3>
            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5">
              <li>
                Single-handedly developed StockeZee, a stock management web application from scratch, enabling users to track stock prices and manage portfolios efficiently.
              </li>
              <li>
                Designed a responsive UI using Next.js and Tailwind CSS, integrating real-time stock APIs for 1,000+ users, deployed on AWS.
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <h3 className="text-sm font-medium">
              <Link
                href="https://www.niftytrader.in"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <span className="text-black">
                  NiftyTrader{' '}
                </span>
                <FontAwesomeIcon icon={faLink} className="text-[10px]" />
              </Link>
              <span className="text-xs text-gray-600 float-right">
                2024 - Present
              </span>
            </h3>
            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5">
              <li>
                Contributed to NiftyTrader, a financial platform for stock market trading, by developing multiple modules including Option Chain, user dashboards, and data visualization tools.
              </li>
              <li>
                Enhanced user experience with real-time market data integration, improving trader decision-making efficiency by 20%.
              </li>
            </ul>
          </div>
          <div className="mt-3">
            <h3 className="text-sm font-medium">
              <Link
                href="https://logistic-solution.vercel.app/"
                passHref
                className="text-blue-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-black">
                  Logistic Solution{' '}
                </span>
                <FontAwesomeIcon icon={faLink} className="text-[10px]" />
              </Link>
            </h3>
            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5">
              <li>
                Developed Logistic Solution as a college project in the final semester of MCA (Jan 2024 - Jun 2024) to streamline logistics and supply chain management.
              </li>
              <li>
                Built a responsive UI using Next.js and Bootstrap, deployed on Vercel for scalability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}