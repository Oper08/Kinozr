
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App


// import React from 'react';
// import Header from './components/Header.jsx';
// import Navigation from './components/Navigation.jsx';
// import BlogPost from './components/BlogPost.jsx';
// import AuthorDetails from './components/AuthorDetails.jsx';
// import Footer from './components/Footer.jsx';
// import './index.css';

// const posts = [
//   { id: 1, title: 'React-тің негіздері', content: 'React — бұл интерфейстерді құруға арналған күшті кітапхана.' },
//   { id: 2, title: 'Компоненттер мен Props', content: 'Компоненттер — бұл React-та қайта қолданылатын UI бөліктері.' }
// ];

// const author = {
//   name: 'Seisenbai Anuar',
//   bio: 'Anuar — fullstack developer and stydenet.'
// };

// const App = () => {
//   return (
//     <div className="container">
//       <Header />
//       <Navigation />
//       {posts.map((post) => (
//         <BlogPost key={post.id} title={post.title} content={post.content} />
//       ))}
//       <AuthorDetails name={author.name} bio={author.bio} />
//       <Footer />
//     </div>
//   );
// };

// export default App; 


// import { useState } from 'react';
// import './App.css';
// // import StateClasswork from './components/StateClasswork';

// function App() {
//     let isAdmin = false;
//     let isLoggedIn = true;
//     const [darkMode, setDarkMode] = useState(false);

//     return (
//         <div
//             style={{
//                 backgroundColor: darkMode ? 'black' : 'white',
//                 color: darkMode ? 'white' : 'black',
//                 width: '100%',
//                 height: '100vh',
//             }}
//         >
//             {isAdmin ? (
//                 <p>Сіз админ панеліне кіру кілтінсіз!</p>
//             ) : (
//                 <p>Сізге админ панеліне рұқсат жоқ!</p>
//             )}

//             {isLoggedIn && <p>Сіз тіркелгенсіз!</p>}

//             <p>{darkMode ? 'Қараңғы режим қосулы' : 'Қараңғы режим өшірулі'}</p>

//             <button onClick={() => setDarkMode(!darkMode)}>
//                 {darkMode ? 'Қараңғы режимді өшіру' : 'Қараңғы режимді қосу'}
//             </button>
//         </div>
//     );
// }

// export default App;

// import { useState } from 'react';
// import './App.css';

// function App() {
//     const [showText, setShowText] = useState(false); 

//     return (
//         <div>
           
//             {showText && <p>I LOVE BMW E60 530 2003/2007!</p>}

           
//             <button onClick={() => setShowText(!showText)}>TEXT</button>
//         </div>
//     );
// }

// export default App;

// import React, { useState } from 'react';

// export default function StateClasswork() {
//     const [task, setTask] = useState('');
//     const [tasks, setTasks] = useState([
//         { taskName: "Тапсырма 1", completed: true },
//         { taskName: "kundekikty homeworkhomework", completed: false }
//     ]);

//     function handleSubmit(e) {
//         e.preventDefault();
//         if (task.trim() === '') return; 
//         setTasks([...tasks, { taskName: task, completed: false }]);
//         setTask('');
//     }

//     function toggleTaskCompletion(index) {
//         setTasks(tasks.map((task, i) => 
//             i === index ? { ...task, completed: !task.completed } : task
//         ));
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     value={task} 
//                     type="text" 
//                     onChange={(e) => setTask(e.target.value)} 
//                 />
//                 <button type="submit">Қосу</button>
//             </form>
//             <ul>
//                 {tasks.map((taskItem, index) => (
//                     <li key={index}>
//                         {taskItem.taskName}
//                         <button 
//                             onClick={() => toggleTaskCompletion(index)}
//                             style={{ color: taskItem.completed ? "green" : "red" }}
//                         >
//                             {taskItem.completed ? "✔" : "❌"}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // киру
  const [isRegistering, setIsRegistering] = useState(false); // рег
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Егер тиркелу бети ашык болса, тиркелу формасы көрсетиледи */}
      {isRegistering ? (
        <div>
          <h2>Тиркелу</h2>
          <input
            type="text"
            placeholder="Email немесе телефон"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Купия соз"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={() => setIsRegistering(false)}>Register</button>
        </div>
      ) : (
        <div>
          {/* Егер қолданушы кирмеген болса */}
          {!isLoggedIn ? (
            <div>
              <h2>Жуйеге киру кажет</h2>
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
              <br />
              <button onClick={() => setIsRegistering(true)}>Register</button>
            </div>
          ) : (
            <div>
              <h2>Бастапқы бетке кош келдиңиз</h2>
              <button onClick={() => setIsLoggedIn(false)}>Log out</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;