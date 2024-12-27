// styles.js
import { styled } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

export const Header = styled.header`
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  /* Centraliza horizontalmente */
  flex-grow: 1;        /* Permite que o container ocupe o espaço disponível */
  padding-right: 120px; /* Compensa o espaço do logo para centralizar verdadeiramente */
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fb923c;
  margin: 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #fb923c;
  margin: 0;
  text-align: center;
`;

export const MainContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

export const VersionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const VersionItem = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const VersionButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #fb923c;
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f97316;
  }
`;

export const VersionContent = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: ${props => props.isActive ? 'block' : 'none'};
`;

export const UpdateList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: none;
`;

export const UpdateItem = styled.li`
  padding: 1rem;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fff7ed;
  }

  &:last-child {
    border-bottom: none;
  }
`;
