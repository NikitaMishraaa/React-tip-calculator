// import React,{useState} from 'react'
// import { Row, Col, Container,Form,Button } from 'react-bootstrap';

// function Banner(props) {
//     const [state,setState]= useState("");

//     const handleChange=()=>{
//         setState(Event.target.value);
//     }

//     const addLink=()=>{
//         props.AddHeaderLinks(state)
//     }

//     return (
//         <Container>
//             <Row style={{ marginTop: "50px" }}>
//                 <Col>
//                     <h2>Add Header Component</h2>

//                     <Form>
//                         <Form.Group className="mb-3" controlId="formBasicEmail"/>
          
//                         <Form.Control type ="text" placeholder="Enter Link Name" />

                     

//                         <Button className= "my-3" variant="primary" type ="button" onClick={addLink}>
//                         Add Header Link
//                         </Button>
//                     </Form>
//                 </Col>
//                 <Col>

//                     <h2>Add Footer Component</h2>
//                 </Col>
//             </Row>

//         </Container >
//     )
// }

// export default Banner
