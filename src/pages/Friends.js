import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getallfriend, createfriend, updatefriend, deletefriend } from '../statemgmt/actions/friend';

import { Container,Row,Col, Stack, Form, Button, ListGroup } from 'react-bootstrap';

const Friends = () => {
    const nameRef = useRef();
    const optionalRef = useRef();
    const dispatch = useDispatch();
    const [btnText, setBtnText] = useState('Add');
    const [currentId, setCurrentId] = useState('');
    const stateData = useSelector((state) => state.friend);

    useEffect(() => {
        dispatch(getallfriend());
    },[])

    const addNameHandler = () => {
        if(currentId !== ''){
            //update
            let data = {
             _id: currentId,
             name: nameRef.current.value,
             optional: optionalRef.current.value       
            }
            dispatch(updatefriend(data));
            resetHandler();
        }else{
            //create
            let data = {
                name: nameRef.current.value,
                optional: optionalRef.current.value
            }
            dispatch(createfriend(data));
            resetHandler();
        }
    }

    const deleteHandler = () => {
        if(currentId !== ''){
            dispatch(deletefriend(currentId));
            resetHandler();
        }
    }

    const resetHandler = () => {
        nameRef.current.value = '';
        optionalRef.current.value = '';
        setBtnText('Add');
        setCurrentId('');
    }

    const selectHandler = (selectedfriend) => {
        setCurrentId(selectedfriend);
        nameRef.current.value = stateData.find(x => x._id === selectedfriend).name;
        setBtnText('Update');
    }

    return (
        <>
            <div className='mt-4'>
                <Container>
                    <Row>
                        <Col>
                            <Stack direction='horizontal' gap={3}>
                                <Form.Control className='me-auto' placeholder='Add Name' ref={nameRef} />
                                <Form.Control className='me-auto' placeholder='Optional' ref={optionalRef} />
                                <Button variant='success' onClick={() => addNameHandler()}>{btnText}</Button>
                                <div className='vr' />
                                <Button variant='outline-danger' onClick={() => resetHandler()}>Reset</Button>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='mt-4'>
                                <ListGroup>
                                    {stateData.map((data,i) => (
                                        <>
                                            <ListGroup.Item
                                            className='d-flex justify-content-between align-items-start'
                                            key={i} action 
                                            onClick={() => selectHandler(data._id)}>
                                                {data.name}
                                            </ListGroup.Item>
                                        </>
                                        
                                    ))}
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>   
            </div>
        </>
    )
}

export default Friends;