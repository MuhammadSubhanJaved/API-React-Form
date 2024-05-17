//ok
// import React, { useState, useEffect } from 'react';
// import { FaTrash, FaEdit, FaEllipsisV } from 'react-icons/fa'; 
// import './App.css'; 

// const ApiTableActions = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data from the API', error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//   };

//   const handleDelete = async (id) => {
//     console.log(`Deleting row with ID ${id}`);

//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setData(data.filter(item => item.id !== id));
//       } else {
//         console.error('Failed to delete item');
//       }
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const handleToggleMenu = (id) => {
//     setSelectedItemId(selectedItemId === id ? null : id);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredData = data.filter(item =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.body.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const highlightText = (text, highlight) => {
//     const parts = text.split(new RegExp());
//     return parts.map((part, index) => 
//       part.toLowerCase() === highlight.toLowerCase() ? 
//         <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> 
//         : 
//         part
//     );
//   };

//   return (
//     <>
//       <div className='container'>
//         <div style={{ width: '290px', marginLeft: 'auto', padding:"20px" }}>
//           <form className="d-flex">
//             <input
//               className="form-control"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </form>
//         </div>

//         {loading && <div>Loading...</div>}

//         {!loading && (
//           <table className="custom-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Body</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map(item => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{highlightText(item.title, searchQuery)}</td>
//                   <td>{highlightText(item.body, searchQuery)}</td>
//                   <td>
//                     <div className="action-menu">
//                       <button className="action-button" onClick={() => handleToggleMenu(item.id)}><FaEllipsisV /></button>
//                       {selectedItemId === item.id && (
//                         <div className="action-dropdown">
//                           <button className="action-button" onClick={() => handleEdit(item.id)}>Edit</button>
//                           <button className="action-button" onClick={() => handleDelete(item.id)}>Delete</button>
//                         </div>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// };

// export default ApiTableActions;


// My Work 
// First I have to Add a state to store the search query.
// Secondly I have to Filter the data based on the search query.
// At last Highlight the matching part of the data in the UI.


// My Second Practice 
// import React, { useState, useEffect } from 'react';
// import { FaTrash, FaEdit, FaEllipsisV } from 'react-icons/fa'; 
// import './App.css'; 

// const ApiTableActions = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data from the API', error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//   };

//   const handleDelete = async (id) => {
//     console.log(`Deleting row with ID ${id}`);

//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setData(data.filter(item => item.id !== id));
//       } else {
//         console.error('Failed to delete item');
//       }
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const handleToggleMenu = (id) => {
//     setSelectedItemId(selectedItemId === id ? null : id);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredData = data.filter(item =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <div className='container'>
//         <div style={{ width: '290px', marginLeft: 'auto', padding:"20px" }}>
//           <form className="d-flex">
//             <input
//               className="form-control"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </form>
//         </div>

//         {loading && <div>Loading...</div>}

//         {!loading && (
//           <table className="custom-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Body</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map(item => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td dangerouslySetInnerHTML={{ __html: item.title.replace(new RegExp(searchQuery, 'gi'), '<span class="highlight">$&</span>') }}></td>
//                   <td>{item.body}</td>
//                   <td>
//                     <div className="action-menu">
//                       <button className="action-button" onClick={() => handleToggleMenu(item.id)}><FaEllipsisV /></button>
//                       {selectedItemId === item.id && (
//                         <div className="action-dropdown">
//                           <button className="action-button" onClick={() => handleEdit(item.id)}>Edit</button>
//                           <button className="action-button" onClick={() => handleDelete(item.id)}>Delete</button>
//                         </div>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// };

// export default ApiTableActions;






// My previous Data Practice
import React, { useState, useEffect } from 'react';
import { /*FaTrash, FaEdit,*/ FaEllipsisV } from 'react-icons/fa'; 
import './App.css'; 

const ApiTableActions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemBody, setSelectedItemBody] = useState('');

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

  const handleEdit = (id, body) => {
    setSelectedItemId(id);
    setSelectedItemBody(body);
  };
  const handleDelete = async (id) => {
    console.log(`Deleting row with ID ${id}`);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setData(data.filter(item => item.id !== id));
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  const handleToggleMenu = (id) => {
    setSelectedItemId(selectedItemId === id ? null : id);
  };

  const handleInputChange = (e) => {
    setSelectedItemBody(e.target.value);
  };

  return (
    <>
      <div className='container'>
        {loading && <div>Loading...</div>}

        <div className="container">
        <div style={{ width: '290px', marginLeft: 'auto', padding:"20px" }}>
          <form className="d-flex">
          <input
            className="form-control"
            type="search"
            value={selectedItemBody}
            onChange={handleInputChange}
            placeholder="Search"
            aria-label="Search"
          />
          </form>
        </div>
        </div>

        {!loading && (
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <div className="action-menu">
                      <button className="action-button" onClick={() => handleToggleMenu(item.id)}><FaEllipsisV /></button>
                      {selectedItemId === item.id && (
                        <div className="action-dropdown">
                          <button className="action-button" onClick={() => handleEdit(item.id, item.body)}>Edit</button>
                          <button className="action-button" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ApiTableActions;







// ---- ECMA standards and Data Types ----

// There is a huge difference in old and new JS  because in old JS there is no any classes, modules, arrow function in it
//  but now these are included so most of the code is written in old way so JS committee doesn't want to destroy all old 
//  code and they also want to give the standards of new version so that's why they introduce "use strict" to treat 
//  all the code to newer version/JS
// e.g alert(3+3) // Reference error will occur because we are using node JS not browser

// When JS is introducing in the market in the starting days so everyone has different standards and browser 
// but they all decided to defined a ECMA script specification which will write standards upon which JS is based. 
// It provides the rules, details, and guidelines that a scripting language must follow to be considered


// Data types are divided into two groups:
// * Primitive data types
// * Non-primitive data types
// Primitive Data types: 
// Primitive data types are the fundamental building blocks of data in a programming language. 
// They are simple and immutable, meaning their values cannot be changed
// A primitive type has always a value
// A primitive type starts with a lowercase
// Common primitive data types include: String, Number, BigInt, Boolean, Undefined, Null, Character
// Non-primitive data types: 
// Non-primitive data types are called reference types because they refer to objects.
// These data types are mutable
// Non-primitive types can be null
// Non-primitive types starts with an uppercase letter. 
// Common non-primitive data types include: Arrays, Objects, Strings, Functions, Classes etc


// -----  Let,const and var   -----

// Way : Console.table([accountId, accountEmail])
// In Js there are two types of entities for storing data: constant (declare using const) and Variable
// (declare using let,var)

// There is a issue in variable of scope initially, e.g Consider any Programer make a file and use for account, password 
// another programmer came use a condition for and again use account name and password so there's a lot of problem for 
// confusion... So prefer not to use var because of issue in block scope and function scope.

// J's is a safe language that we can easily reserve memory of a variable without writing it before let or const keyword 
// and can get the result, it's not good but a variable can also be declare the variable like this and if we declare a 
// variable and didn't assign the value so undefined will be occur















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './App.css';
// import { FaTrash, FaEdit } from 'react-icons/fa'; 

// const ApiTableActions = () => {
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

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//   };

//   const handleDelete = async (id) => {
//     console.log(`Deleting row with ID ${id}`);

//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setData(data.filter(item => item.id !== id));
//       } else {
//         console.error('Failed to delete item');
//       }
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <>
//       <div className='container'>
//         <div>
//           {loading && <div>Loading...</div>}

//           {!loading && (
//             <table border="1">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Title</th>
//                   <th>Body</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map(item => (
//                   <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.title}</td>
//                     <td>{item.body}</td>
//                     <td>
//                       <button onClick={() => handleEdit(item.id)}><FaEdit /></button>
//                       <br/>
//                       <br/>
//                       <button onClick={() => handleDelete(item.id)}><FaTrash /></button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ApiTableActions;





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './App.css';

// const ApiTableActions = () => {
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

//   const handleEdit = (id) => {
//     console.log(`Editing row with ID ${id}`);
//   };

//   const handleDelete = (id) => {
//     console.log(`Deleting row with ID ${id}`);
//   };

//   return (
//     <>
    
//     <div className='container'>
//     <div>
//       {loading && <div>Loading...</div>}

//       {!loading && (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Body</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(item => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.body}</td>
//                 <td>
//                   <button onClick={() => handleEdit(item.id)}>Edit</button>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//     </div>
//     </>
//   );
// };

// export default ApiTableActions;

