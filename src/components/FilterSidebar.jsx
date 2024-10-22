import '../styles/FilterSidebar.css';
import Accordion from 'react-bootstrap/Accordion';

function FilterSidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar sticky-top filter-sidebar">
          <h5>Mens</h5>
          <h2>TOPS & STRINGERS</h2>
          <p>4 Products</p>
          <div className="btn-group mb-3" role="group">
            <button type="button" className="btn btn-outline-dark">Styles</button>
            <button type="button" className="btn btn-outline-dark">Colorways</button>
          </div>
          <input type="text" className="form-control mb-3" placeholder="Search products..." />
          <div className="accordion" id="filterAccordion">
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>SIZE</Accordion.Header>
        <Accordion.Body>
          SMALL 
        </Accordion.Body>
        <Accordion.Body>
          MEDIUM 
        </Accordion.Body>
        <Accordion.Body>
          LARGE 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>COLOR</Accordion.Header>
        <Accordion.Body>
          BLACK 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>COLLECTION</Accordion.Header>
        <Accordion.Body>
        SUMMER COLLECTION &apos;24 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

            </div>
        </div>
        <div className="col-9">
         
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;