import { TarjetaPersonal } from './TarjetaPersonal'


export const Equipo = () => {

    return (
        <ul>
            <h2>Equipo</h2>
            <hr/>
            
            <TarjetaPersonal nombre="Martin FIordelisi" edad="25" curso="Python"/>
            <TarjetaPersonal nombre="Conrado Lanusse" edad="34" curso="ReactJS"/>

            <div>Coderhouse 2023</div>
        </ul>
    )
}

export default Equipo