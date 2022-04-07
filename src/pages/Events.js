import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getallLedger, addLedger, updateLedger } from '../statemgmt/actions/ledger';

import {Container,Row,Col,Stack, Form, Button, ListGroup } from 'react-bootstrap';

const Events = () => {

    const navigate = useNavigate();
    const nameRef = useRef();
    const commentsRef = useRef();
    const dispatch = useDispatch();
    const [btnText,setBtnText] = useState('Add');
    const [currentId, setCurrentId] = useState('');
    const [ledgers,setLedgers] = useState([]);
    const stateData = useSelector((state) => state.ledger);

    useEffect(() => {
        dispatch(getallLedger());
    },[]);

    const addHandler = () => {
        if(currentId === ''){
            //Create
            let data = {
                ledgerName: nameRef.current.value,
                comments: commentsRef.current.value
            }

            dispatch(addLedger(data));
            resetHandler();

        }else{
            //Update
            let data = {
                _id: currentId,
                ledgerName: nameRef.current.value,
                comments: commentsRef.current.value
            }

            dispatch(updateLedger(data));
            resetHandler();
        }
    }

    const resetHandler = () => {
        setCurrentId('');
        setBtnText('Add');
        nameRef.current.value = '';
        commentsRef.current.value = '';
    }

    const selectHandler = (selectedId) => {
        setCurrentId(selectedId);
        setBtnText('Update');
        nameRef.current.value = stateData.find(x => x._id === selectedId).ledgerName;
        commentsRef.current.value = stateData.find(x => x._id === selectedId).comments;
    }

    const expensetHandler = () => {
        navigate(`/expense/${currentId}/${nameRef.current.value}`);
    }

    return(
        <>
            <Container className='my-4'>
                <Row>
                    <Col>
                        <Stack direction='horizontal' gap='3' className='mb-3'>
                            <Form.Control placeholder='Event Name' ref={nameRef} />
                            <Form.Control placeholder='Comments' ref={commentsRef} />
                        </Stack>
                        <Stack direction='horizontal' gap='3'>
                            <Button variant='success' onClick={() => addHandler()}>{btnText}</Button>
                            <div className='vr' />
                            <Button variant='outline-danger' onClick={() => resetHandler()}>Reset</Button>
                            <div className='vr' />
                            <Button variant='outline-success' className={currentId !== '' ? '' : 'disabled' } onClick={() => expensetHandler()}>Manage Expense</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <Container>
            <hr/>
            </Container>
            
            <Container>
                <Row>
                    <Col>
                        {!stateData.length ? "Loading..."
                        : 
                        (
                            <ListGroup>
                                    {stateData.map((data,i) => (
                                        <ListGroup.Item
                                        className='d-flex justify-content-between align-items-start'
                                        key={data._id} action 
                                        onClick={() => selectHandler(data._id)}>
                                            {data.ledgerName}
                                        </ListGroup.Item>
                                        
                                    ))}
                                </ListGroup>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
        
    )
    
}

export default Events;