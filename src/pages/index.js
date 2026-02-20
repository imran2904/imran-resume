import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Imran Khan - Resume</title>
      </Head>

      <div className="bg-white p-6 !pt-4 w-full max-w-[840px]">

        {/* Header */}
        <div className="text-center pb-2">
          <h1 className="text-2xl font-bold text-fuchsia-600">
            IMRAN KHAN
          </h1>

          <p className="text-xs text-gray-600">
            Frontend Developer | Master Of Computer Application
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2 text-xs text-gray-700">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-1 w-3 h-3" />
              imarankhan9768@gmail.com
            </p>

            <span>|</span>

            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-1 w-3 h-3" />
              8003545085
            </p>

            <span>|</span>

            <p>
              <FontAwesomeIcon icon={faLocationDot} className="mr-1 w-3 h-3" />
              Jodhpur, Rajasthan
            </p>

            <span>|</span>

            <Link
              href="https://www.linkedin.com/in/imran-khan-2a0711270"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-1 w-3 h-3" />
              LinkedIn
            </Link>

            <span>|</span>

            <Link
              href="https://github.com/imran2904"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-1 w-3 h-3" />
              GitHub
            </Link>
          </div>
        </div>

        {/* Objective */}
        <div className="mt-3">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
            Summary
          </h2>

          <p className="text-xs mt-2 leading-relaxed">
            Frontend Developer with <b>2 years of experience</b> building scalable web
            applications using <b>React.js</b> and <b>Next.js</b>. Experienced in
            <b className="ms-1">Redux Toolkit</b> and <b>Context API</b> for state management, performance
            optimization, and REST API integration. Hands-on experience developing fintech dashboards,
            real-time stock analytics platforms, and data visualization systems serving
             <b className="ms-1">1,000+ users</b>.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-2">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
            Skills
          </h2>

          <div className="flex mt-2">
            <div className="w-1/2 pr-4">
              <p className="text-xs font-bold">Languages</p>
              <p className="text-xs">JavaScript, TypeScript, Python, Java</p>

              <p className="text-xs font-bold mt-2">Frontend</p>
              <p className="text-xs">
                React.js, Next.js, Tailwind CSS, Bootstrap, SCSS,
                Highcharts, Recharts, Responsive UI, SEO Basics
              </p>

              <p className="text-xs font-bold mt-2">State Management</p>
              <p className="text-xs">React Redux, React Context API</p>

              <p className="text-xs font-bold mt-2">Backend (Basic)</p>
              <p className="text-xs">Node.js, MongoDB, SQL, REST APIs</p>
            </div>

            <div className="w-1/2 pl-4">
              <p className="text-xs font-bold">Tools</p>
              <p className="text-xs">
                Git, GitHub, Jira, Postman, Vercel, AWS
              </p>

              <p className="text-xs font-bold mt-3">Soft Skills</p>
              <ul className="list-disc list-inside text-xs space-y-0.5">
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Team Collaboration</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>



        {/* Work Experience */}
        <div className="mt-3">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
            Work Experience
          </h2>

          <div className="mt-2">
            <h3 className="text-sm font-medium">
              Now A Wave Technologies Pvt Ltd | Jodhpur, Rajasthan
              <span className="text-xs text-gray-600 float-right">
             Frontend Developer | August 2024 – Present
              </span>
            </h3>


            {/* 🔥 Tumhara original content SAME rakha */}
            <ul className="list-disc list-inside text-xs mt-1 space-y-0.5 leading-relaxed">
              <li>
                Developed and maintained responsive web applications using Next.js and
                Tailwind CSS to improve user experience and engagement.
              </li>

              <li>
                Collaborated with team to implement RESTful APIs, ensuring seamless data flow between frontend and backend.
              </li>

              <li>
                Optimized frontend performance by reducing unnecessary re-renders,
                improving load time by <b>25%</b> and increasing PageSpeed score from <b>50% to 80%</b>.
              </li>
              <li>
                Played a key role in developing and scaling StockeZee, focusing on performance optimization and real-time data workflows.
              </li>

              <li>
                Contributed to NiftyTrader, a financial platform for stock market trading,
                by developing multiple modules including user dashboards, data visualization
                tools, and Option Chain.
              </li>
            </ul>

          </div>
        </div>



        {/* Projects */}
        <div className="mt-3">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
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
                <span className="text-black font-[500]">
                  StockeZee{" "}
                  <span className="text-[11px] text-gray-500 font-normal">
                    (Next.js, React.js, Tailwind CSS, REST APIs, AWS, Highcharts)
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
                Developed StockeZee from scratch, a stock analysis web application enabling users to track stock prices and manage portfolios efficiently.
              </li>

              <li>
                Designed a responsive UI using Next.js and Tailwind CSS, integrating
                real-time stock APIs for <b>1,000+ users</b>,
              </li>

              <li>
                Implemented interactive stock data visualization using <b>Highcharts</b> and <b>Recharts</b> for
                price trends, volume, and key metrics.
              </li>
            </ul>
          </div>

          {/* NiftyTrader */}
          <div className="mt-2">
            <h3 className="text-sm font-medium">
              <Link
                href="https://www.niftytrader.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                <span className="text-black font-[500]">
                  NiftyTrader{" "}
                  <span className="text-[11px] text-gray-500 font-normal">
                    (Next.js, React.js, Tailwind CSS, REST APIs, Recharts)
                  </span>{" "}
                </span>
                <FontAwesomeIcon icon={faLink} className="w-3 h-3 ml-1" />
              </Link>

              <span className="text-xs text-gray-600 float-right">
                2024 - Present
              </span>
            </h3>

            <ul className="list-disc max-w-[700px] list-inside text-xs mt-1 space-y-0.5 leading-relaxed">
              <li>
                Contributed to NiftyTrader, a financial platform for stock market
                trading, by developing multiple modules including Option Chain, user
                dashboards, and data visualization tools.
              </li>

              <li>
                Developed interactive charts and visualizations using <b>Recharts</b>{" "}
                and improved UX for data-heavy pages.
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-3">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 text-purple-500">
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
      </div>
    </div>
  );
}



