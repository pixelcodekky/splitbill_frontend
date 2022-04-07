import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getExpenseByLedger } from '../statemgmt/actions/expense';
import { getallfriend } from '../statemgmt/actions/friend';

import { Container,Row,Col,Form, Stack, Card, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const Expenses = () => {
    const initExpenseObj = {expenseName: '', ledgerId:'', paidAmount:0,paidBy:'',expenseItem:[]}
    const nameRef = useRef();
    const amountRef = useRef();
    const {Id,event} = useParams(); // LedgerID,EventName
    const [formText, setFormText] = useState('New');
    const dispatch = useDispatch();
    const stateData = useSelector((state) => state.expense);
    const friendsData = useSelector((state) => state.friend);
    const [friends, setFriends ] = useState([]); 
    const [btnText, setBtnText] = useState('Add');
    const [selPaidBy, setSelPaidBy] = useState('');
    const [shareAmt, setShareAmt] = useState(0);
    const [expenseObj, setExpenseObj] = useState(initExpenseObj);
    const [frichk, setFriChk] = useState(new Map());

    useEffect(() => {
        
        dispatch(getExpenseByLedger(Id));   

        if(friendsData.length === 0){
            dispatch(getallfriend());
        }
    },[])

    useEffect(() => {
        resetFriendCheck();
    },[friendsData]);


    const resetFriendCheck = () => {
        friendsData.map((data, i) => {
            setFriChk(frichk.set(data._id, false));
        })
    }

    const refreshHandler = () => {
        dispatch(getExpenseByLedger(Id));
        dispatch(getallfriend());
    }

    const selectHandler = (e) => {
        let selectedExpense = e.target.name;
        const tmpObj = stateData.find(x => x._id === selectedExpense);
        nameRef.current.value = tmpObj.expenseName;
        amountRef.current.value = tmpObj.paidAmount;
        
        tmpObj.expenseItem.map((data, i) => {
            if(frichk.has(data.personId)){
                setFriChk(frichk.set(data.personId, true));
            }
        });

        setExpenseObj(tmpObj);
        setBtnText('Update');
        setFormText('Edit');
    }

    const resetHandler = () => {
        nameRef.current.value = '';
        amountRef.current.value = '';
        setExpenseObj(initExpenseObj);
        setBtnText('Add');
        setFormText('New');
        resetFriendCheck();
    }

    const chkHandler = (e) => {
        const item = e.target.name;
        const isCheckd = e.target.checked;
        setFriChk((prev) => prev.set(item,isCheckd));
    }

    const CalculateShare = () => {

    }

    return (
        <Container className='my-4'>
            <Stack direction='horizontal' gap='3'>
            <h2>{event}</h2>
            <div className='ms-auto'>
                <Button variant='outline-warning' onClick={() => refreshHandler()}>Refresh</Button>
            </div>
            </Stack>

            <Row >
                <Col md={7} sm={12} xs={12} lg={6} className='my-4'>
                    <Row>
                        <Col>
                            <Form>
                                <h4>{formText} Expense</h4>
                                <Form.Control className='my-2' placeholder='Expense Name' ref={nameRef} />
                                <Form.Control className='my-2' placeholder='Amount' ref={amountRef} />
                                <div className='mb-3'>
                                <h5>Paid By</h5>
                                    <Form.Select aria-label="Default select example">
                                        {friendsData.map((data,i) => (
                                            <option key={i} value={data._id} selected={ expenseObj.paidBy === data._id ? true : false }>
                                                {data.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className='container'>
                                            <input type='checkbox' onChanged={() => resetHandler()} />
                                </div>
                                <h5>Persons</h5>
                                {
                                        (
                                            friendsData.map((data, i) => (
                                                <>
                                                <Stack direction='horizontal' gap='3'>
                                                    <div className='form-check' key={data._id}>
                                                        <input type='checkbox' id={data._id} checked={frichk.get(data._id)} name={data._id} className='form-check-input' onChange={chkHandler} />
                                                        <label for={data._id} className='form-check-label'>{data.name}</label>
                                                    </div>
                                                    <div className='ms-auto'>
                                                        <small>{data._id === expenseObj.paidBy ? 'to Collect' : 'to Pay'} $S</small>
                                                    </div>
                                                </Stack>
                                                </>
                                                
                                            ))
                                        )
                                }
                                <div className='mt-4 my-2'>
                                    <Stack direction='horizontal'>
                                        <Button className='m-2' variant='success'>{btnText}</Button>
                                        <Button className='m-2' variant='outline-danger' onClick={() => resetHandler()}>Reset</Button>
                                    </Stack>
                                </div>
                                <hr/>
                            </Form>
                            
                        </Col>
                    </Row>
                </Col>
                
                <Col md={5} sm={12} xs={12} lg={6} className='my-4'>
                <h4>Expense List</h4>
                    {stateData.length === 0 ? "No Expense"
                    :
                    stateData.map((data, i) => (
                        <>
                        <Stack direction="horizontal" gap='3' key={i}>
                            <Card style={{width: '100%'}} className='shadow my-3'>
                                <Card.Body>
                                    <Stack direction='horizontal' gap='3'>
                                        <div>
                                        <Card.Title>{data.expenseName}</Card.Title>
                                        <small>Total : {data.paidAmount}</small>
                                        </div>
                                        
                                        <div className='ms-auto'>
                                            <Button variant='outline-success' name={data._id} onClick={selectHandler}>Edit</Button>
                                        </div>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Stack>
                        </>
                    ))}
                    
                </Col>
            </Row>
        </Container>
        
        
    )
}

export default Expenses;