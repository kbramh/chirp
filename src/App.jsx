//import Login from './Login';
//import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';

const supabase = createClient(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_API_KEY
);

//function LoginPage() {
 // return <Login />;
//}

export function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    supabase
      .from('chirps')
      .select('*, profiles!chirps_author_fkey ( * )')
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data.map((chirp) => (
        <div className="frontnav" key={chirp.id}>
          <div className="frontnav-header">
            {chirp.profiles.first_name} {chirp.profiles.last_name}
            <div className="frontnav-description">
              @{chirp.profiles.username}
            </div>
          </div>
          <div className="frontnav-content">{chirp.content}</div>
          <div className="frontnav-footer">
            <i className="fa-solid fa-heart frontnav-action"></i>
            <i className="frontnav-chirp-data">1.2k</i>
            <i className="fa-solid fa-comment frontnav-action"></i>
            <i className="frontnav-chirp-data">36</i>
            <i className="fa-solid fa-share frontnav-action"></i>
            <i className="frontnav-chirp-data">12</i>
          </div>
        </div>
      ))}
    </div>
  );
}
