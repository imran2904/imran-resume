import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Head>
        <title>Imran Khan - Resume</title>
      </Head>

      <div className="bg-white p-6 w-full max-w-3xl">
        {/* Header */}
        <div className="text-center border-b border-gray-300 pb-2">
          <h1 className="text-2xl font-bold text-fuchsia-600">IMRAN KHAN</h1>

          <p className="text-xs text-gray-600">
            Frontend Developer | Master Of Computer Application
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2 text-xs text-gray-700">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-1  w-3 h-3" />
              imarankhan9768@gmail.com
            </p>

            <span className="text-gray-400">|</span>

            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-1  w-3 h-3" />
              8003545085
            </p>

            <span className="text-gray-400">|</span>

            <Link
              href="https://www.linkedin.com/in/imran-khan-2a0711270"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-1  w-3 h-3" />
              LinkedIn
            </Link>

            <span className="text-gray-400">|</span>

            <Link
              href="https://github.com/imran2904"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-1  w-3 h-3" />
              GitHub
            </Link>
          </div>
        </div>

        {/* Objective */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
            Objective
          </h2>

          <p className="text-xs mt-2 leading-relaxed">
            Frontend Developer with <b>2 years of experience</b> building
            scalable, responsive web applications using <b>React.js, Next.js</b>,
            and <b>Tailwind CSS</b>. Skilled in performance optimization, UI/UX
            improvements, API integration, and building production-ready modules
            for fintech and analytics platforms. Seeking a role where I can
            contribute to impactful products while continuously improving my
            technical expertise.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
            Skills
          </h2>

          <div className="flex mt-2">
            {/* Left Side */}
            <div className="w-1/2 pr-4">
              <p className="text-xs font-bold">Languages</p>
              <p className="text-xs">JavaScript, TypeScript, Python, Java</p>

              <p className="text-xs font-bold mt-2">Frontend</p>
              <p className="text-xs">
                React.js, Next.js, Tailwind CSS, Bootstrap, SCSS, Responsive UI, SEO
                Basics
              </p>

              <p className="text-xs font-bold mt-2">Backend (Basic)</p>
              <p className="text-xs">Node.js, MongoDB, REST APIs</p>
            </div>

            {/* Right Side */}
            <div className="w-1/2 pl-4">
              <p className="text-xs font-bold">Soft Skills</p>
              <ul className="list-disc list-inside text-xs space-y-0.5">
                <li>Time Management</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Adaptability</li>
              </ul>

              {/* Tools (Soft Skills ke niche) */}
              <p className="text-xs font-bold mt-3">Tools</p>
              <p className="text-xs">
                Git, GitHub, Jira, Postman, Vercel, Microsoft Office
              </p>
            </div>
          </div>
        </div>


        {/* Work Experience */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
            Work Experience
          </h2>

          <div className="mt-2">
            <h3 className="text-sm font-medium">
              Now A Wave Technologies Pvt Ltd
              <span className="text-xs text-gray-600 float-right">
                August 2024 - Present
              </span>
            </h3>

            <p className="text-xs text-gray-700 italic">Frontend Developer</p>

            {/* 🔥 Tumhara original content SAME rakha */}
            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5 leading-relaxed">
              <li>
                Developed and maintained responsive web applications using Next.js and
                Tailwind CSS to improve user experience and engagement.
              </li>

              <li>
                Collaborated with a team of 5 to implement RESTful APIs, ensuring seamless data flow between frontend and backend.
              </li>

              <li>
                Optimized frontend performance by improving component rendering, reducing
                unnecessary re-renders, and enhancing overall page speed.
              </li>

              <li>
                Participated in code reviews and followed Agile methodologies to improve
                code quality and development efficiency.
              </li>

              <li>
                Single-handedly developed StockeZee, a stock analysis web application from
                scratch, enabling users to track stock prices and manage portfolios
                efficiently.
              </li>

              <li>
                Contributed to NiftyTrader, a financial platform for stock market trading,
                by developing multiple modules including user dashboards, data visualization
                tools, and Option Chain.
              </li>
            </ul>

          </div>
        </div>

        {/* Education */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
            Education
          </h2>

          <div className="mt-2">
            <div className="text-sm">Bikaner Technical University</div>
            <div className="text-[13px] text-gray-700 font-normal">
              Master of Computer Applications (MCA) - 8.5/10
              <span className="text-xs text-gray-600 float-right">
                2022 - 2024
              </span>
            </div>
          </div>

          <div className="mt-2">
            <div className="text-sm">Jai Narain Vyas University (JNVU)</div>
            <div className="text-[13px] text-gray-700 font-normal">
              Bachelor of Science (BSc) in Mathematics
              <span className="text-xs text-gray-600 float-right">
                2018 - 2021
              </span>
            </div>
          </div>
        </div>

        {/* Projects */}
        {/* Projects */}
        <div className="mt-3">
          <h2 className="text-base font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
            Projects
          </h2>

          {/* StockeZee */}
          <div className="mt-2">
            <h3 className="text-sm font-medium">
              <Link
                href="https://stockezee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <span className="text-black">
                  StockeZee{" "}
                  <span className="text-[11px] text-gray-500 font-normal">
                    (Next.js, React.js, Tailwind CSS, REST APIs, AWS)
                  </span>{" "}
                </span>
                <FontAwesomeIcon icon={faLink} className="w-3 h-3 ml-1" />
              </Link>

              <span className="text-xs font-medium text-gray-600 float-right">
                2024 - Present
              </span>
            </h3>

            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5 leading-relaxed">
              <li>
                Single-handedly developed StockeZee, a stock management web application
                from scratch, enabling users to track stock prices and manage portfolios
                efficiently.
              </li>
              <li>
                Designed a responsive UI using Next.js and Tailwind CSS, integrating
                real-time stock APIs for 1,000+ users, deployed on AWS.
              </li>
            </ul>
          </div>

          {/* NiftyTrader */}
          <div className="mt-3">
            <h3 className="text-sm font-medium">
              <Link
                href="https://www.niftytrader.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <span className="text-black">
                  NiftyTrader{" "}
                  <span className="text-[11px] text-gray-500 font-normal">
                    (Next.js, React.js, Tailwind CSS, REST APIs, Charts)
                  </span>{" "}
                </span>
                <FontAwesomeIcon icon={faLink} className="w-3 h-3 ml-1" />
              </Link>

              <span className="text-xs text-gray-600 float-right">2024 - Present</span>
            </h3>

            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5 leading-relaxed">
              <li>
                Contributed to NiftyTrader, a financial platform for stock market
                trading, by developing multiple modules including Option Chain, user
                dashboards, and data visualization tools.
              </li>
              <li>
                Enhanced user experience with real-time market data integration.
              </li>
            </ul>
          </div>

          {/* Logistic Solution */}
          <div className="mt-3">
            <h3 className="text-sm font-medium">
              <Link
                href="https://logistic-solution.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <span className="text-black">
                  Logistic Solution{" "}
                  <span className="text-[11px] text-gray-500 font-normal">
                    (Next.js, Bootstrap, Vercel)
                  </span>{" "}
                </span>
                <FontAwesomeIcon icon={faLink} className="w-3 h-3 ml-1" />
              </Link>

              <span className="text-xs text-gray-600 float-right">
                Jan 2024 - Jun 2024
              </span>
            </h3>

            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5 leading-relaxed">
              <li>
                Developed Logistic Solution as a college project in the final semester
                of MCA (Jan 2024 - Jun 2024) to streamline logistics and supply chain
                management.
              </li>
              <li>
                Built a responsive UI using Next.js and Bootstrap, deployed on Vercel for
                scalability.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
