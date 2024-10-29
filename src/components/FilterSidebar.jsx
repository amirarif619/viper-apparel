import { Button, Form } from 'react-bootstrap';
import '../styles/FilterSidebar.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

function FilterSidebar({ onColorChange, onSortChange, onClearAll }) {
  const [selectedSort, setSelectedSort] = useState('')

  const colors = [
    { name: 'Black', code: '#000000' },
    { name: 'Grey', code: '#808080' },
    { name: 'Olive', code: '#808000' },
  ];

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSort(value);
    onSortChange(value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar sticky-top filter-sidebar">
          <h5>Mens</h5>
          <h2>TOPS & STRINGERS</h2>
          <p>8 Products</p>
          <div className="btn-group mb-3" role="group">
            <button type="button" className="btn btn-outline-dark">Styles</button>
            <button type="button" className="btn btn-outline-dark">Colorways</button>
          </div>
          <input type="text" className="form-control mb-3" placeholder="Filter by...." />


          <p className="clear-all-link text-muted" onClick={onClearAll} style={{ cursor: 'pointer' }}>
            &times; Clear All
          </p>

          <div className="accordion" id="filterAccordion">
          <Accordion defaultActiveKey="1">


      <Accordion.Item eventKey="0">
      <Accordion.Header>SORT BY</Accordion.Header>
                 <Accordion.Body>
                  <Form>
                    <Form.Check 
                      type="radio" 
                      label="Price: High to Low" 
                      name="sortOptions" 
                      value="PRICE_HIGH_TO_LOW" 
                      checked={selectedSort === 'PRICE_HIGH_TO_LOW'} 
                      onChange={handleSortChange} 
                    />
                    <Form.Check 
                      type="radio" 
                      label="Price: Low to High" 
                      name="sortOptions" 
                      value="PRICE_LOW_TO_HIGH" 
                      checked={selectedSort === 'PRICE_LOW_TO_HIGH'} 
                      onChange={handleSortChange} 
                    />
                    <Form.Check 
                      type="radio" 
                      label="Newest" 
                      name="sortOptions" 
                      value="NEWEST" 
                      checked={selectedSort === 'NEWEST'} 
                      onChange={handleSortChange} 
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>


      <Accordion.Item eventKey="1">
      <Accordion.Header>COLOR</Accordion.Header>
                <Accordion.Body>
                  <div className="color-filter">
                    {colors.map((color) => (
                      <Button
                        key={color.name}
                        variant="link"
                        className="color-button"
                        onClick={() => onColorChange(color.name)}
                      >
                        <span
                          className="color-circle"
                          style={{ backgroundColor: color.code }}
                        ></span>
                        <span className="color-label">{color.name}</span>
                      </Button>
                    ))}
                    <Button 
                      variant="link" 
                      className="remove-filter-button"
                      onClick={() => onColorChange('')}
                    >
                      Reset Color
                    </Button>
                  </div>
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
         {/*   <Button 
            variant="outline-danger" 
            className="w-100 mt-3" 
            onClick={onClearAll}
          >
            Clear All
          </Button>  */}
        </div> 
        <div className="col-9"> 
         
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;