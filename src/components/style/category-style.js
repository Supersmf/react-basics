import styled from 'styled-components';

export default styled.details`
    & > details{
        width: 90%;
        margin-left:10%;
    }
    /*&[open]>summary:after {
        content: "-";
    }*/
}
`