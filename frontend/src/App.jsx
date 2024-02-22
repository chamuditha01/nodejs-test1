import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setData(data)) // Update state with fetched data
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <table>
        <thead>
          <tr> {/* Corrected opening tag */}
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th> {/* Corrected casing */}
            <th>Email</th>
          </tr> {/* Corrected closing tag */}
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.phone}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
