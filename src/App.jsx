import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  where,
  query,
} from 'firebase/firestore';

import { firestoreDB } from './firebase/firebaseConfig';




function App() {

   const formateador = new Intl.DateTimeFormat("es-MX", {
         dateStyle: "long",
         timeStyle: "short",
    })

    const milisegundosComoFecha = (milisegundos) => {  // '8 de agosto de 2024, 12:08 a.m.'

         return formateador.format(new Date(milisegundos))

    }



        const dbCollection = query(
          collection(firestoreDB, 'mensajes'),
          // where('email', '==', localStorage.getItem('userEmailLS'))
      );

    const [items, setItems] = useState([]);

    console.log(items)

      useEffect(() => {
       let isMounted = true;

       getDocs(dbCollection)
           .then((querySnapshot) => {
             if (querySnapshot.size === 0) {
               console.log('No results!');
           }

             const documents = querySnapshot.docs.map((doc) => ({
                 id: doc.id,
                 ...doc.data(),
             }));

             setItems(documents);
           })
           .catch((err) => {
             console.log('Error searching items', err);
           });

         isMounted = false;
      }, []);


  return (
    <>

     <h2>MLJxM Mensajes</h2>

      {items.sort((a, b) => b.date - a.date ).map((el, i)=>(
        <div className='div'>

          <p className='fecha' >{milisegundosComoFecha(el.date)}</p>
          <p className='dos' >NOMBRE: {el.name}</p>
          <p className='uno' >TELEFONO: {el.tel}</p>
          {/*<p className='dos' >CORREO: {el.mail}</p>*/}
          <p className='uno' >MENSAJE: {el.msj}</p>

        </div>
      ))}
    
    </>
  )
}

export default App
