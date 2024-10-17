import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CourseDetailsPage from '../pages/CourseDetailsPage';
import Lessons from '../lessons/Lessons';
import Container from '../container/Container';


function App() {
  return (
    <Router>
      <Container> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
          <Route path="/courses/:id/:module" element={<Lessons />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
