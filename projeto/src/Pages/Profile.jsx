
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Profile.css'

function Profile() {
    const location = useLocation();
    const {name: charac} = location.state || {};

    if(!charac) return <p>Nenhum usuario selecionado</p>


return (
  <>
    <div className='card'>

      <div className='borda'>
      <div className='container-perfil'>
        <div className='container-text'>
          <h2 className='title'>Perfil do usuario</h2>
          <p>Nome: {charac.name}</p>
        </div>
      </div>
    </div>
    
    <div>
      <button >
        <Link to={'/'}> Home - Voltar</Link>
      </button>

    </div>
    </div>
  </>
  );
}

export default Profile
