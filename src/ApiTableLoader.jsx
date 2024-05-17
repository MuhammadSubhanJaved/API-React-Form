import logo from './logo.svg';
import './AppAction.css';
import { Link } from 'react-router-dom';
import ApiTableActions from './ApiTableActions';
// import ApiTableLoader from './ApiTableLoader';
import React, { useState, useEffect } from 'react';

const ApiTableLoader = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const Data = await response.json();
        setData(Data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from the API', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
        {/* <Link to="/loader">Api Loader</Link> */}
    <div className='Container'>
    <div>
      {loading && <div>Loading...</div>}

      {!loading && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    {/* <ApiTableLoader/> */}
      {/* <ApiTableActions/> */}
</div>
    </>
  );
};

export default ApiTableLoader;








// import React, { useState, useEffect } from 'react';

// const ApiTableLoader = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const jsonData = await response.json();
//         setData(jsonData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data from the API', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {loading && <div>Loading...</div>}

//       {!loading && (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(item => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ApiTableLoader;
