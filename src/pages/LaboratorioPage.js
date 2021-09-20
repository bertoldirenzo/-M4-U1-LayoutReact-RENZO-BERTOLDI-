const LaboratorioPage = (props) => {
    return (
        <main>
            <h1>Laboratorio</h1>
            <div class="contenedor">
                <div class="laboratorio">
                    <img src="img/magna.png"  alt="Magna"/>
                    <div class ="info">
                    <h4>Impresora FDM</h4>
                    <p>Impresora con tecnología FDM capaz de realizar piezas complejas gracias a su doble extrusor</p>
                    </div>
                </div>
                <div class="laboratorio">
                    <img src="img/creality.png"  alt="creality"/>
                    <div class ="info">
                    <h4>Impresora LCD</h4>
                    <p>Impresora con tecnología LCD capaz de realizar todo tipo de piezas dentales gracias a las
                    diversas
                    resinas disponibles en el mercado</p>
                    </div>
                </div>
                <div class="laboratorio">
                    <img src="img/elego.png"  alt="elego"/>
                    <div class ="info">
                    <h4>Máquina de Curado</h4>
                    <p>Con este dispositivo podemos realizar la mejor terminación de nuestras piezas de resina</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default LaboratorioPage;