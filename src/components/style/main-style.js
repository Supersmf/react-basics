import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    // border: 1px solid;
    display: flex;
    flex-direction: column;
`

const AppHeader = styled.header`
    // border: 1px solid green;
    flex: 1;
    display: flex;
    flex-direction: column;
`

const AppTitle = styled.header`
    // border: 1px solid green;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
`

const AppMain = styled.main`
    // border: 1px solid blue;
    flex: 5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const AppNav = styled.nav`
    // border: 1px solid red;
    flex: 4;
    margin: 0 10px;
`
const AppSection = styled.section`
    // border: 1px solid red;
    flex: 8;
`
const AppAdd = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 1%;
`

export {Wrapper, AppHeader, AppTitle, AppMain, AppNav, AppSection, AppAdd}
