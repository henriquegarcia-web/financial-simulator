import styled from 'styled-components'

const adminHeaderHeight = '50px'
const adminMenuWidth = '250px'

export const Landing = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

// ============================================ HEADER

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${adminHeaderHeight};
  padding: 0 20px;

  background-color: #024c6c;
`

export const HeaderLogo = styled.div`
  display: flex;

  h1 {
    font-size: 20px;
    font-weight: 500;

    color: white;
  }
`

// ============================================ FOOTER

export const Footer = styled.div`
  display: flex;
`

// ============================================ VIEW

export const View = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 6px;

  border: 1px solid rgba(0, 0, 0, 0.15);
`

export const ViewHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 10px 0;

  font-size: 17px;
  font-weight: 500;

  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`

export const ViewContent = styled.div`
  display: flex;
  flex: 1;
`
