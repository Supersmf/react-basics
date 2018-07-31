import styled from 'styled-components';

export default styled.ul`
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    margin-left: 2%;
    // border: 0 solid silver;
    // border-width: 0 0 1px 1px;
    padding: 0;

    & li {
        border: 1px solid silver;
        border-bottom: 0;
        // border-width: 1px 1px 0 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        padding: 3%;

        &:last-child{
            border-bottom: 1px solid silver;
        }
    }    
}
`
