import './App.css';
import profilepic from './img/shraddha.png';
import bits from './img/bits.jpg';
import CG from './img/CGboard.jpg';
import CSVTU from './img/CSVTU.jpg';

function App() {
  return (
    <div className="container-fluid App">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
   
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#profile">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#workexperience">Work Experience</a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <div className="container-fluid" id="home">
        <div className="row " style={{ backgroundColor: "#bfff00" }}>
          <div className="col-md-6">
            <img src={profilepic} width="350" height="300" alt="Shraddha Athwani" className="img-fluid bio-image" />
          </div>
          <div className="col-md-6">
            <h2 style={{ color: "white", paddingTop: "100px" }}>Shraddha Athwani</h2>
            <h4 style={{ color: "white", padding: "5px" }}>Validation and Verification Engineer</h4>
            <h5 style={{ color: "white", padding: "5px" }}>Medtronic, Hyderabad, INDIA</h5>
            <h6 style={{ color: "white", padding: "5px" }}>Contact Detail: 2020mt93018@wilp.bits.pilani.ac.in</h6>
            <a style={{ color: "white" }} href="https://github.com/prerna2909/prerna-profile" className="btn btn-github"><i style={{ fontSize: "24px" }} className="fa">&#xf09b;</i> GitHub Link</a>
          </div>
        </div>
      </div>
      <br />
  
      <hr />
      <br />
      <div className="container" id="profile" >
        <div className="row">
          <div className="col">
            <h4 style={{ color: "#00bfff", padding: "5px" }}>Profile</h4>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#E0E0E0", borderRadius: "0.5rem", padding: "20px" }}>
          <div className="col">
            <p>Full-stack Developer with 2+ years of experience and demonstrated history of working in various
            technologies. Skilled in RESTful Web Services and API development, responsive and progressive web apps
            design and development using React and redux. Strong engineering professional with a Bachelor of
            Engineering (B.E.) focused in Information Technology and Master of Engineering (M.Tech) in Software
            Engineering(pursing).</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div className="container" id="education">
        <div className="row">
          <div className="col">
            <h4 style={{ color: "#00bfff", padding: "5px" }}>Education</h4>
          </div>
        </div>
        <div className="row" >
          <div className="col">
            <div className="card-deck">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={bits} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">M.Tech Software Engineering</h5>
                  <p className="card-text">BITS Pilani</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">2020-2022</li>
                  <li className="list-group-item">Percentage : (pursing)</li>
                </ul>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={pu} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">B.E Information Technologies</h5>
                  <p className="card-text">Savitribai Phule Pune University</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">2007-2011</li>
                  <li className="list-group-item">Percentage : 82.1%</li>
                </ul>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={cbse} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">12th Science</h5>
                  <p className="card-text">CG Board</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">2009-2010</li>
                  <li className="list-group-item">Percentage : 78.4%</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
      <br />
      <br />
      <hr />
      <div className="container-fluid" id="workexperience" >
        <div className="row">
          <div className="col">
            <h4 style={{ color: "#00bfff", padding: "5px" }}>Work Experience</h4>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "#00bfff", borderRadius: "0.5rem", paddingTop: "40px" }}>
          <div className="col">
            <div className="card-deck">
              <div className="card" style={{ width: "18rem" }}>
                {/* <img className="card-img-top" src={pu} alt="Card image cap" /> */}
                <div className="card-body">
                  <h5 className="card-title">Medtronic</h5>
                  <p className="card-text">Software Engineer II</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><p>
                    Tool & Technologies – React JS, Bootstrap 4, Spring Boot, Power
                    BI, JIRA, Docker</p></li>
                  <li className="list-group-item">Duration: 30 Sep 2019 to till date</li>
                </ul>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                {/* <img className="card-img-top" src={pu} alt="Card image cap" /> */}
                <div className="card-body">
                  <h5 className="card-title">Bombardier</h5>
                  <p className="card-text">Test lead</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><p>
                    Tools & Technologies – JAVA 8, J2EE, STRUTS, SPRING MVC,
                    JavaScript, JIRA, HTML, SQL, JDBC
                    </p></li>
                  <li className="list-group-item">Duration: 2nd Jan 2017 to 29th Sep 2019</li>
                </ul>
              </div>
            </div>
            <br />
            <br />

          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div className="container" id="skillset">
        <div className="row">
          <div className="col">
            <h4 style={{ color: "#00bfff", padding: "5px" }}>Skill Sets</h4>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <h6>Core and Advance Java</h6>
          </div>
          <div className="col-8">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                <span class="sr-only">70% Complete</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <h6>Spring MVC abd Spring Boot</h6>
          </div>
          <div className="col-8">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                <span class="sr-only">75% Complete</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <h6>React JS</h6>
          </div>
          <div className="col-8">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                <span class="sr-only">90% Complete</span>
              </div>
            </div>
          </div>
        </div>
          <br />
        <div className="row">
          <div className="col-4">
            <h6>JavaScript</h6>
          </div>
          <div className="col-8">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                <span class="sr-only">50% Complete</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <h6>HTML and CSS</h6>
          </div>
          <div className="col-8">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                <span class="sr-only">80% Complete</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <h6>Agile Software Development</h6>
          </div>
          <div className="col-8">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ color:"#00bfff",width: "90%" }}>
                <span class="sr-only">90% Complete</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <h6>API Design and Development</h6>
          </div>
          <div className="col-8">
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor:"#00bfff", width: "70%" }}>
                <span class="sr-only">70% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

