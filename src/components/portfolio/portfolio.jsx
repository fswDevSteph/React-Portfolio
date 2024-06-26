import { Row, Col, Card } from 'react-bootstrap';
import './portfolio.css'
import Play__Date from './images/Play__Date.png'
// import Fitness__Tracker from './images/Fitness__Tracker.png'
import Weather__Dashboard from './images/Weather__Dashboard.png'
import Work__Day__Scheduler from './images/Work__Day__Scheduler.png'
import Password__Generator from './images/Password__Generator.png'




function Portfolio() {
  return (

    <section id='action/3.2' className='section-background-turq   relative  '>
      {/* curves divider  */}
      <div class='custom-shape-divider-top-1711564317'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>

          <defs>
            <linearGradient id='MyGradient'>
              <stop offset='33%' stop-color='#f857ac' />
              <stop offset='66%' stop-color='#f36d6b' />
              <stop offset='80%' stop-color='#f17853' />
              <stop offset='100%' stop-color='#ef8435' />
            </linearGradient>
          </defs>
          <path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' class='shape-fill'></path>
          <path d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' class='shape-fill'></path>
          <path d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' class='shape-fill'></path>
        </svg>
      </div>

      <div>

        <Row>
          <Row><h2 className='portfolio-title'>Portfolio </h2></Row>
          <Col md={4}>

            {/*card Play-Date */}
            <Card className='card-spacing' style={{ width: '18rem' }}>
              <Card.Img className="img-fluid" variant='top' src={Play__Date} />
              <Card.Body >
                <Card.Title>Play Date</Card.Title>
                <Card.Text className="hide">
                  Whether it's a last-minute adventure or a planned outing, Play Date makes it easy to discover nearby activities that cater to your family's interests. Get started today.
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Link href='https://github.com/fswDevSteph/Play-Date'>GitHub</Card.Link>
                <Card.Link href='https://fswdevsteph.github.io/Play-Date/'>Deployed</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className='card-spacing' style={{ width: '18rem' }}>
              <iframe width='100%' height='315' src='https://www.youtube.com/embed/9Ki3hUJsm1c' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text className="hide">
                  A minimalist note taking app that allows you to create, clear, save, and delete notes while maintaining saved notes
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href='https://github.com/fswDevSteph/note-taking-app'>GitHub</Card.Link>
                <Card.Link href='https://note-taking-app-cluy.onrender.com/'>Deployed</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          {/*card2 */}
          <Col md={4}>
            <Card className='card-spacing' style={{ width: '18rem' }}>
              <iframe width='100%' height='315' src='https://www.youtube.com/embed/u-LNHHbOiTI' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
              <Card.Body>
                <Card.Title>Fitness Tracker</Card.Title>
                <Card.Text className="hide">
                  A fitness tracker that can log various types of workouts, track water intake, and daily steps with encouraging messages.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href='https://github.com/fswDevSteph/fitness-tracker'>GitHub</Card.Link>
                <Card.Link href='https://fitness-tracker-cluy.onrender.com/'>Deployed</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          {/*card3 */}
          <Col md={4}>
            <Card className='card-spacing' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={Work__Day__Scheduler} />
              <Card.Body>
                <Card.Title>Work Day Scheduler</Card.Title>
                <Card.Text className="hide">
                  A simple work day calendar application that allows a user to save events for each hour of a typical working day (9am–5pm).
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Link href='https://github.com/fswDevSteph/Workday-Scheduler'>GitHub</Card.Link>
                <Card.Link href='https://fswdevsteph.github.io/Workday-Scheduler/'>Deployed</Card.Link>
              </Card.Body>
            </Card>
          </Col>


          {/*card4 */}
          <Col md={4}>
            <Card className='card-spacing' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={Weather__Dashboard} />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text className="hide">
                  A simple weather application that displays the current weather and a 5 day forecast. This application also stores the users prior searches
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Link href='https://github.com/fswDevSteph/Weather-Dashboard'>GitHub</Card.Link>
                <Card.Link href='https://fswdevsteph.github.io/Weather-Dashboard/'>Deployed</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          {/*card5 */}

          {/*card6 */}
          <Col md={4}>
            <Card className='card-spacing' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={Password__Generator} />
              <Card.Body >
                <Card.Title>Password Generator</Card.Title>
                <Card.Text className="hide">
                  A random password generator that allows users to generate a pass word between 8 and 12 characters in length.
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Card.Link href='#'>GitHub</Card.Link>
                <Card.Link href='#'>Deployed</Card.Link>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </div >

    </section >


  );

}


export default Portfolio;