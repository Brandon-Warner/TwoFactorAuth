import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const App = () => {
    return (
        <Container>
            <Form type='submit'>
                <Input type='text' />
                <Input type='text' />
                <Input type='text' />
                <Input type='text' />

                <Button>submit</Button>
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
