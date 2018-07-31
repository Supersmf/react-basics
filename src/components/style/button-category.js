import styled from 'styled-components';

export default styled.div`
    position: absolute;
    right: 5%;
    top: 20%;
    // content: '+';
    min-height: 20px;
    display: flex;
    justify-content: space-between;
    z-index: 10;

    & button{
        margin-left: 5px;
        border-radius: 8px;
        border: 0.5px solid silver;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &:hover{
            background: #DFEFFF;
        }

        &:active{
            transform: scale(0.95);
        }

    }
`
