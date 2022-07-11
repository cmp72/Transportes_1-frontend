import "../../src/style/components/pages/HomePage.css";


const HomePage = (props) => {
    return (
        
        <main class="contenedor">
    <div class="homeimg">
        <img src="img/home/carga_avion.jpg" alt="avión"/>
    </div>
    <div class="columnas">
        <div class="bienvenidos">
            <h2>Bienvenidos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
        </div>
        <div class="testimonios">
            <h2>Testimonios</h2>
            <div class="testimonio">
                <span class="cita">Muy buena empresa</span>
                <span class="autor">José ArreCachiruli</span>
            </div> 
        </div> 
    </div>
</main>
        

        
        
    );
}
// 
export default HomePage;