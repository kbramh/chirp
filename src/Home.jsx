import { createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';

const supabase = createClient(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_API_KEY
);

export default function Home() {
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
    <>
      <div class="sidenav">
        <h1>Chirp</h1>
        <a class="active" href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Search</a>
      </div>

      <div id="main">
        <h1>Home</h1>

        <div class="chirp-message-box">
          <div class="msg-chat-box">
            <textarea placeholder="What's on your mind?"></textarea>
          </div>
          <div class="msg-footer-box"><button>Chirp</button></div>
        </div>

        <hr class="line-style" />

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

        <div class="bottomnav">
          <a class="active-one" href="#">Advertising</a>
          <a class="active-two" href="#">Privacy</a>
          <a class="active-three" href="#">Terms</a>
        </div>
      </div>
    </>
  );
}
