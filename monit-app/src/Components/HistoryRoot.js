import React from 'react';
import { Outlet } from 'react-router-dom';
import HistoryMenu from './HistoryMenu';

const HistoryRoot = () => {
    return (
        <div>
            <HistoryMenu/>
            <Outlet/>
        </div>
    );
};

export default HistoryRoot;