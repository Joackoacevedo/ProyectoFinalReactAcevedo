


export const TarjetaPersonal = ( {nombre, edad, curso} ) => {

    return (
        <li>
            <h4>Nombre: {nombre}</h4>
            <p>Edad: {edad}</p>
            <p>Curso: {curso}</p>
        </li>
    )
}


export default TarjetaPersonal



// export const TarjetaPersonal = (props) => {

//     const { curso, nombre, edad } = props

//     return (
//         <div>
//             <h4>Nombre: {nombre}</h4>
//             <p>Edad: {edad}</p>
//             <p>Curso: {curso}</p>
//         </div>
//     )
// }

// export const TarjetaPersonal = (props) => {
//     console.log(props)

//     return (
//         <div>
//             <h4>Nombre: {props.nombre}</h4>
//             <p>Edad: {props.edad}</p>
//             <p>Curso: {props.curso}</p>
//         </div>
//     )
// }

// const user = {
//     nombre: "Martin",
//     edad: 15,
//     curso: "Cocina"
// }

// const nombre = user.nombre
// const edad = user.edad
// const curso = user.curso

// const { prop1, prop2 } = objecto
// const { nombre, edad } = user

// console.log(nombre) // "Martin"
// console.log(edad) // 15
