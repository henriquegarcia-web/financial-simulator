import styled from 'styled-components'
import { Window } from '@/utils/styles/globals'

export const Admin = styled(Window)`
  justify-content: center;
  align-items: center;
`

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 600px;
  height: fit-content;
  padding: 30px;
  border-radius: 8px;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`

export const AdminContainerMenu = styled.div`
  display: flex;
  column-gap: 6px;

  /* border: 1px solid red; */
`

export const AdminContainerContent = styled.div`
  display: flex;
  padding: 15px;
  border-radius: 8px;

  border: 1px solid rgba(0, 0, 0, 0.1);

  /* border: 1px solid blue; */
`

// ============================================ SIMULATOR MENU

export const SimulatorMenu = styled.div`
  display: flex;
`

// ============================================ STYLING MENU

export const StylingMenu = styled.div`
  display: flex;
`
