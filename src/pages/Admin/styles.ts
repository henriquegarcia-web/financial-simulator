import styled from 'styled-components'

const adminHeaderHeight = '50px'
const adminMenuWidth = '250px'

export const Admin = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

// ============================================ ADMIN HEADER

export const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${adminHeaderHeight};
  padding: 0 20px;

  background-color: #024c6c;
`

export const AdminHeaderLogo = styled.div`
  display: flex;

  h1 {
    font-size: 20px;
    font-weight: 500;

    color: white;
  }
`

export const AdminHeaderTitle = styled.div`
  display: flex;

  font-size: 18px;
  font-weight: 600;

  color: white;
`

export const AdminHeaderUserMenu = styled.div`
  display: flex;
`

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  &:hover {
    p {
      opacity: 1;
    }
  }
`

export const UserMenuName = styled.p`
  display: flex;
  transition: 0.3s;
  opacity: 0.8;

  font-size: 14px;

  color: white;
`

// ============================================ ADMIN

export const AdminContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - ${adminHeaderHeight});
`

// ============================================ ADMIN MENU

export const AdminMenu = styled.div`
  display: flex;
  width: ${adminMenuWidth};
  height: 100%;

  /* border: 1px solid red; */
`

// ============================================ ADMIN VIEWS

export const AdminViews = styled.div`
  display: flex;
  width: calc(100% - ${adminMenuWidth});
  height: 100%;
  padding: 15px;

  /* border: 1px solid blue; */
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
