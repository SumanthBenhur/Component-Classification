import React from 'react';
import PageHeading from '../components/PageHeading';
import { Container, Row } from 'react-bootstrap';
//import SubHeading  from '../components/SubHeading';
//import PageContent from '../components/PageContent'
import FormInput from '../components/FormInput'
function Predictions(){
    return(
        <div className = "page">
            <Container>
                <Row>
                <PageHeading PageHeading = "Predictions"/>
                </Row>
                <FormInput/>
            </Container>
        </div>
    )
}


export default Predictions;