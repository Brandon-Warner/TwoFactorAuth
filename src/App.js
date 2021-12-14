import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const App = () => {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [thirdNum, setThirdNum] = useState('');
    const [fourthNum, setFourthNum] = useState('');
    const [allNums, setAllNums] = useState('');

    const firstInput = useRef();
    const focusFirstInput = () => firstInput.current.focus();
    const secondInput = useRef();
    const focusSecondInput = () => secondInput.current.focus();
    const thirdInput = useRef();
    const focusThirdInput = () => thirdInput.current.focus();
    const fourthInput = useRef();
    const focusFourthInput = () => fourthInput.current.focus();
    const buttonRef = useRef();
    const focusButton = () => buttonRef.current.focus();

    const assignFirstNum = e => {
        setFirstNum(e.target.value);
        focusSecondInput();
    };
    const assignSecondNum = e => {
        setSecondNum(e.target.value);
        focusThirdInput();
    };
    const assignThirdNum = e => {
        setThirdNum(e.target.value);
        focusFourthInput();
    };
    const assignFourthNum = e => {
        setFourthNum(e.target.value);
        focusButton();
    };

    const submit = e => {
        e.preventDefault();
        console.log(firstNum, secondNum, thirdNum, fourthNum);
    };

    return (
        <Container>
            <Form type='submit' onSubmit={submit}>
                <Input
                    type='text'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    ref={firstInput}
                    value={firstNum}
                    onChange={assignFirstNum}
                />
                <Input
                    type='text'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    ref={secondInput}
                    value={secondNum}
                    onChange={assignSecondNum}
                />
                <Input
                    type='text'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    ref={thirdInput}
                    value={thirdNum}
                    onChange={assignThirdNum}
                />
                <Input
                    type='text'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    ref={fourthInput}
                    value={fourthNum}
                    onChange={assignFourthNum}
                />

                <Button ref={buttonRef}>submit</Button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    padding: 0;
    margin: 0;
    text-align: center;
`;

const Form = styled.form`
    margin: 15% auto;
    width: 75%;
    height: 200px;
    item-align: center;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 80% 20%;
`;

const Input = styled.input`
    height: 100px;
    width: 100px;
    margin: 0 auto;
    font-size: 40px;
    text-align: center;
`;

const Button = styled.button`
    display: inline-block;
    grid-column: 4 / span 1;
    width: 50%;
    margin: 0 auto;
    text-align: center;
`;

export default App;
