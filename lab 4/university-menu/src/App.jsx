import React, { useState } from "react";
import "./App.css";

function App() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="App">

      {/* ================= HEADER ================= */}

      <header className="header">

        <div className="logo">
          <h2>ABC University</h2>
          <span>Excellence in Education & Research</span>
        </div>

        <nav className="navbar">

          <a href="#about">About Us</a>

          {/* Academics */}
          <div className="dropdown">

            <button
              className="dropbtn"
              onClick={() => toggleMenu("academics")}
            >
              Academics ▾
            </button>

            {openMenu === "academics" && (
              <div className="dropdown-content">
                <a href="#undergraduate">Undergraduate</a>
                <a href="#postgraduate">Postgraduate</a>
                <a href="#phd">PhD</a>
              </div>
            )}

          </div>


          {/* Admissions */}
          <div className="dropdown">

            <button
              className="dropbtn"
              onClick={() => toggleMenu("admissions")}
            >
              Admissions ▾
            </button>

            {openMenu === "admissions" && (
              <div className="dropdown-content">
                <a href="#eligibility">Eligibility</a>
                <a href="#application">Application Process</a>
                <a href="#dates">Important Dates</a>
              </div>
            )}

          </div>


          {/* Research */}
          <div className="dropdown">

            <button
              className="dropbtn"
              onClick={() => toggleMenu("research")}
            >
              Research ▾
            </button>

            {openMenu === "research" && (
              <div className="dropdown-content">
                <a href="#research-areas">Research Areas</a>
                <a href="#publications">Publications</a>
              </div>
            )}

          </div>


          <a href="#campus">Campus Life</a>

          <a href="#placements">Placements</a>

          <a href="#contact">Contact Us</a>

        </nav>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <h1>Welcome to ABC University</h1>

          <p>
            Shaping future leaders through quality education,
            innovation, research and global opportunities.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Programs
            </button>

            <button className="secondary-btn">
              Apply Now
            </button>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="content-section">

        <h2>About Us</h2>

        <p className="section-intro">
          ABC University is a premier institution dedicated to
          academic excellence, research and innovation. Our
          university provides students with a supportive environment
          to develop technical knowledge, leadership skills and
          professional expertise.
        </p>

        <div className="info-cards">

          <div className="info-card">
            <h3>Academic Excellence</h3>
            <p>
              Industry-oriented programs designed to prepare
              students for successful careers.
            </p>
          </div>

          <div className="info-card">
            <h3>Innovation</h3>
            <p>
              Encouraging students to solve real-world problems
              through innovation and technology.
            </p>
          </div>

          <div className="info-card">
            <h3>Global Exposure</h3>
            <p>
              Opportunities to participate in international
              programs, conferences and collaborations.
            </p>
          </div>

        </div>

      </section>


      {/* ================= ACADEMICS ================= */}

      <section id="academics" className="content-section light-section">

        <h2>Academic Programs</h2>

        <p className="section-intro">
          Choose from a wide range of undergraduate, postgraduate
          and doctoral programs.
        </p>


        <div className="program-grid">

          <div className="program-card" id="undergraduate">

            <h3>Undergraduate Programs</h3>

            <p>
              Four-year bachelor's degree programs designed to
              provide strong foundations in engineering, science,
              technology and management.
            </p>

            <ul>
              <li>B.Tech in Computer Science</li>
              <li>B.Tech in Artificial Intelligence</li>
              <li>B.Tech in Electronics</li>
              <li>B.Tech in Mechanical Engineering</li>
            </ul>

          </div>


          <div className="program-card" id="postgraduate">

            <h3>Postgraduate Programs</h3>

            <p>
              Advanced programs focused on specialization,
              research and professional development.
            </p>

            <ul>
              <li>M.Tech in Computer Science</li>
              <li>M.Tech in Artificial Intelligence</li>
              <li>MBA</li>
              <li>M.Sc in Data Science</li>
            </ul>

          </div>


          <div className="program-card" id="phd">

            <h3>PhD Programs</h3>

            <p>
              Research-oriented doctoral programs under the
              guidance of experienced faculty members.
            </p>

            <ul>
              <li>Computer Science</li>
              <li>Artificial Intelligence</li>
              <li>Engineering</li>
              <li>Management Studies</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= ADMISSIONS ================= */}

      <section id="admissions" className="content-section">

        <h2>Admissions</h2>

        <p className="section-intro">
          Begin your academic journey with ABC University.
          Review the eligibility requirements and admission process.
        </p>


        <div className="admission-grid">

          {/* Eligibility */}

          <div className="admission-card" id="eligibility">

            <h3>Eligibility Criteria</h3>

            <h4>Undergraduate Programs</h4>

            <ul>
              <li>
                Passed 10+2 or equivalent examination from a
                recognized board.
              </li>

              <li>
                Physics and Mathematics should be studied as
                compulsory subjects.
              </li>

              <li>
                Minimum 60% aggregate in the qualifying examination.
              </li>

              <li>
                Candidates must satisfy the applicable entrance
                examination requirements.
              </li>
            </ul>


            <h4>Postgraduate Programs</h4>

            <ul>
              <li>
                Bachelor's degree in a relevant discipline.
              </li>

              <li>
                Minimum 55% aggregate or equivalent CGPA.
              </li>

              <li>
                Valid entrance examination score where applicable.
              </li>
            </ul>


            <h4>PhD Programs</h4>

            <ul>
              <li>
                Master's degree in a relevant discipline.
              </li>

              <li>
                Minimum 55% aggregate or equivalent CGPA.
              </li>

              <li>
                Candidates may be required to qualify for an
                entrance test and interview.
              </li>
            </ul>

          </div>


          {/* Application Process */}

          <div className="admission-card" id="application">

            <h3>Application Process</h3>

            <ol>
              <li>Register on the university admission portal.</li>

              <li>
                Fill in the application form with accurate
                academic and personal details.
              </li>

              <li>
                Upload the required documents.
              </li>

              <li>
                Pay the applicable application fee.
              </li>

              <li>
                Submit the application before the deadline.
              </li>

              <li>
                Attend the entrance examination/interview
                if applicable.
              </li>
            </ol>

          </div>


          {/* Important Dates */}

          <div className="admission-card" id="dates">

            <h3>Important Dates</h3>

            <div className="date-item">
              <strong>Application Opens</strong>
              <span>01 January 2026</span>
            </div>

            <div className="date-item">
              <strong>Application Deadline</strong>
              <span>30 April 2026</span>
            </div>

            <div className="date-item">
              <strong>Entrance Examination</strong>
              <span>May 2026</span>
            </div>

            <div className="date-item">
              <strong>Admission Results</strong>
              <span>June 2026</span>
            </div>

            <div className="date-item">
              <strong>Academic Session Begins</strong>
              <span>August 2026</span>
            </div>

            <p className="note">
              * Dates shown are illustrative for the demo website.
            </p>

          </div>

        </div>

      </section>


      {/* ================= RESEARCH ================= */}

      <section id="research" className="content-section light-section">

        <h2>Research & Innovation</h2>

        <p className="section-intro">
          Our researchers work on interdisciplinary problems
          with a focus on creating meaningful societal impact.
        </p>


        <div className="research-grid">

          <div className="research-card" id="research-areas">

            <h3>Research Areas</h3>

            <ul>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Data Science & Big Data</li>
              <li>Cybersecurity</li>
              <li>Robotics & Automation</li>
              <li>Renewable Energy</li>
              <li>Biomedical Engineering</li>
            </ul>

          </div>


          <div className="research-card" id="publications">

            <h3>Publications</h3>

            <p>
              Faculty and students actively contribute to
              international journals, conferences and research
              projects.
            </p>

            <ul>
              <li>150+ Research Publications</li>
              <li>30+ Active Research Projects</li>
              <li>20+ Industry Collaborations</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= CAMPUS LIFE ================= */}

      <section id="campus" className="content-section">

        <h2>Campus Life</h2>

        <p className="section-intro">
          Experience a vibrant campus community with opportunities
          beyond the classroom.
        </p>

        <div className="info-cards">

          <div className="info-card">
            <h3>Student Clubs</h3>
            <p>
              Technical, cultural and professional clubs
              for students to explore their interests.
            </p>
          </div>

          <div className="info-card">
            <h3>Sports</h3>
            <p>
              Modern sports facilities and opportunities to
              participate in university-level competitions.
            </p>
          </div>

          <div className="info-card">
            <h3>Cultural Events</h3>
            <p>
              Annual festivals, workshops and cultural events
              throughout the academic year.
            </p>
          </div>

        </div>

      </section>


      {/* ================= PLACEMENTS ================= */}

      <section id="placements" className="content-section light-section">

        <h2>Placements</h2>

        <p className="section-intro">
          Our dedicated placement cell helps students connect
          with leading organizations and build successful careers.
        </p>

        <div className="placement-stats">

          <div>
            <h3>95%</h3>
            <p>Placement Rate</p>
          </div>

          <div>
            <h3>150+</h3>
            <p>Recruiting Companies</p>
          </div>

          <div>
            <h3>12 LPA</h3>
            <p>Average Package</p>
          </div>

          <div>
            <h3>35 LPA</h3>
            <p>Highest Package</p>
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="content-section">

        <h2>Contact Us</h2>

        <div className="contact-box">

          <p>
            <strong>ABC University</strong>
          </p>

          <p>
            University Road, Chennai, Tamil Nadu - 600001
          </p>

          <p>
            Email: admissions@abcuniversity.edu
          </p>

          <p>
            Phone: +91 98765 43210
          </p>

          <p>
            Office Hours: Monday - Friday, 9:00 AM - 5:00 PM
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 ABC University | All Rights Reserved
        </p>

      </footer>

    </div>
  );
}

export default App;