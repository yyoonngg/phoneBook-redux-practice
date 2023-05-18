import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

//1. 좌측: 연락처 등록창, 우측: 연락처 서치창
//2. 유저는 이름과 번호를 저장할 수 있다.
//3. 유저는 저장한 연락처 리스트를 볼 수 있다.
//3-1. 저장한 연락처리스트에는 이름, 연락처, profile이 있고, 총 연락처 갯수가 있다.
//4. 유저는 연락처에서 검색해서 찾을 수 있다.

function App() {
  return (
    <Container className='mt-4'>
      <h1 className='text-center mb-5'>연락처</h1>
      <Row>
        <Col lg={6} className='border-column'>
          <ContactForm/>
        </Col>
        <Col lg={6}>
          <ContactList/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
