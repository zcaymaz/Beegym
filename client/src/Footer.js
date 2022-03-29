import { Container, Navbar, NavbarText, Row } from 'reactstrap';
import Copyright from './Copyright';
import Ulasım from './Ulasım';

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className='deneme3'
      >
        <Row style={{ alignItems: 'flex-end' }}>
          <Row style={{ padding: "0px", margin: "0" }}>
            <Ulasım />
          </Row>
          <Row style={{ padding: "0px", margin: "0" }}>
            <Navbar className='Footer'>
              <Copyright />
            </Navbar>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default Footer

