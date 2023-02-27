import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';

import TopPage from '@/pages/TopPage';
import MyRecordPage from '@/pages/MyRecordPage';
import ColumnPage from '@/pages/ColumnPage';

export default function BaseRoute() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path='/my-record' element={<MyRecordPage />} />
          <Route path='/column' element={<ColumnPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
