const ContactoPage = (props) => {
    return (
        <main>

            <div class="contacto">
                <h1>Contacto</h1>
                <form class="row g-3 p-3">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" class="form-control" placeholder="Nombre" aria-label="First name"/>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name"/>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <input type="text" class="form-control" placeholder="Teléfono" aria-label="Last name"/>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <button type="submit" class="btn btn-success">Enviar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default ContactoPage;