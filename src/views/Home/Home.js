import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <ul>
    <li><Link to="/animal/:id">Animals</Link></li>
  </ul>
);

export default Home;