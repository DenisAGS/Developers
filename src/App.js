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

  const InputChange = (e) => {
    const { name, value } = e.target;
    setNewDeveloper({ ...newDeveloper, [name]: value });
  };

  const handleInputFocus = (e) => {
    e.target.parentNode.classList.add('input-focused');
  };

  const handleInputBlur = (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.remove('input-focused');
    }
  };

  const AddDeveloper = () => {
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
                  <td><input type="text" id="name" name="name" value={newDeveloper.name} onChange={InputChange} placeholder='Nombre'/></td>
                </tr>
                <tr>
                  <td><input type="text" id="age" name="age" value={newDeveloper.age} onChange={InputChange} placeholder='Edad'/></td>
                </tr>
                <tr>
                  <td><input type="text" id="skills" name="skills" value={newDeveloper.skills} onChange={InputChange} placeholder='Habilidades'/></td>
                </tr>
                <tr>
                  <td colSpan="2"><button className='Btn-add' onClick={AddDeveloper}>Guardar</button></td>
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
