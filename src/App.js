// En App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [developers, setDevelopers] = useState([
    { id: 1, name: 'Juan', age: 30, skills: 'React, JavaScript' },
    { id: 2, name: 'María', age: 25, skills: 'HTML, CSS' },
    { id: 3, name: 'Carlos', age: 28, skills: 'Python, Django' }
  ]);

  const [newDeveloper, setNewDeveloper] = useState({ name: '', age: '', skills: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDeveloper({ ...newDeveloper, [name]: value });
  };

  const handleAddDeveloper = () => {
    const id = developers.length + 1;
    setDevelopers([...developers, { id, ...newDeveloper }]);
    setNewDeveloper({ name: '', age: '', skills: '' });
  };

  return (
    <div className='main-background'>
      <div className='second-backgroud'>
        <div className='container'>
          <div className='container-add'>
            <h2>Datos</h2>
            <table>
              <tbody>
                <tr>
                  <td><label htmlFor="name">Nombre:</label></td>
                  <td><input type="text" id="name" name="name" value={newDeveloper.name} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <td><label htmlFor="age">Edad:</label></td>
                  <td><input type="text" id="age" name="age" value={newDeveloper.age} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <td><label htmlFor="skills">Habilidades:</label></td>
                  <td><input type="text" id="skills" name="skills" value={newDeveloper.skills} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <td colSpan="2"><button className='Btn-add' onClick={handleAddDeveloper}>Guardar</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='table-container'>
            <h2>Lista de Desarrolladores</h2>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Habilidades</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {developers.map((developer, index) => (
                  <tr key={developer.id}>
                    <td>{index + 1}</td>
                    <td>{developer.name}</td>
                    <td>{developer.age}</td>
                    <td>{developer.skills}</td>
                    <td>
                      <button onClick={() => console.log('Editar desarrollador:', developer.id)}>Editar</button>
                      <button onClick={() => setDevelopers(developers.filter(dev => dev.id !== developer.id))}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
