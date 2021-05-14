import React from 'react';
import PageHeading from '../components/PageHeading';
import { Container, Row } from 'react-bootstrap';
import SubHeading  from '../components/SubHeading';

function Introduction() {
  return (
    <div className='page' >
      
      <Container>
                <Row>
                <PageHeading PageHeading = "Introduction"/>
                </Row>
                <SubHeading SubHeading = "sub heading 1" />
            </Container>
    </div>
  );
}

export default Introduction;
