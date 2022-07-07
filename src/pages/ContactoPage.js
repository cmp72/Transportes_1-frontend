const ContactoPage = (props) => {
    return (

        <main class="contenedor contacto">
     <div>
         <h2>Contacto Rápido</h2>
         <form action="" method="" class="formulario">
             <p>
                 <label for="nombre">Nombre</label>
                 <input type="text" name=""/>
             </p>
             <p>
                 <label for="email">Email</label>
                 <input type="email" name=""/>
             </p>
             <p>
                 <label for="number">Telefono</label>
                 <input type="" name=""/>
             </p>
             <p>
                 <label for="mensaje">Mensaje</label>
                 <textarea name=""></textarea>
             </p>
             <p class="acciones"><input type="submit" value="Enviar"/>
             </p>
         </form>
     </div>
     <div class="datos">
         
         <h2>Otras vías de comunicación</h2>
         <p> También puede contactar con nosotros a través de:</p>
         <ul>
             <li>Telefono: 455 123 456</li>
             <li>Email: contacto@transportesX.com</li>
             <li>Facebook:</li>
             <li>Twitter:</li>
             <li>Skype:</li>
         </ul>
     </div>
     </main> 

        
    );
}

export default ContactoPage;