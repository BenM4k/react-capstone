import { Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';

const Layout = () => (
  <>
    <header><SearchBar /></header>
    <main><Outlet /></main>
  </>
);

export default Layout;
