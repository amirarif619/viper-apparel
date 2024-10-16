import '../styles/FilterSidebar.css';
import Accordion from 'react-bootstrap/Accordion';

function FilterSidebar() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-2 sidebar sticky-top">
          <h5>Mens</h5>
          <h2>TANKS & STRINGERS</h2>
          <p>55 Products</p>
          <div className="btn-group mb-3" role="group">
            <button type="button" className="btn btn-outline-secondary">Styles</button>
            <button type="button" className="btn btn-outline-secondary">Colorways</button>
          </div>
          <input type="text" className="form-control mb-3" placeholder="Search products in this page..." />
          <div className="accordion" id="filterAccordion">
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>SIZE</Accordion.Header>
        <Accordion.Body>
          Lorem 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>COLOR</Accordion.Header>
        <Accordion.Body>
          Lorem 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>COLLECTION</Accordion.Header>
        <Accordion.Body>
          Lorem 
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