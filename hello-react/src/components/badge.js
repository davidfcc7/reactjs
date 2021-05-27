import React from 'react'
import logo from '../images/physics.png'
import perfil from '../images/pp.jpg'

class Badge extends React.Component{
    render (){
        return (
        <section>
            <header>
                <img src={logo} alt="logo react"></img>
            </header>
            <main>
                <div>
                    <img src={perfil} alt="avatar"></img>
                    <h1>David <br/> Caicedo</h1>
                    <p>Desarrollador Frontend</p>
                </div>
            </main>
            <footer>
                <div>
                    redes sociales
                </div>
            </footer>
        </section>
        )
    }
}

export default Badge
