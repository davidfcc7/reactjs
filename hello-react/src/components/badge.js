import React from 'react'
//Styles
import './styles/badge.css'
//Assets
import logo from '../images/physics.png'
import perfil from '../images/pp.jpg'

class Badge extends React.Component {
    render() {
        return (
        <section className="badge">
            <header className="badge__header">
                <img src={logo} alt="logo react"></img>
            </header>
            <main>
                <div className="badge__avatar">
                    <img src={perfil} alt="avatar"></img>
                    <div>
                        <h1>David Caicedo</h1>
                        <p>Desarrollador Frontend</p>
                    </div>
                    
                </div>
            </main>
            <footer>
                <div>
                    redes sociales
                </div>
            </footer>
        </section >
        )
    }
}

export default Badge
