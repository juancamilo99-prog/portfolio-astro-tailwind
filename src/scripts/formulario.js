const form = document.getElementById('form');
const formStatus = document.getElementById('form-status');

if (form && formStatus) {
   const buttonSend = document.querySelector('button');
   
   form.addEventListener('submit', async(event) => {
    event.preventDefault();

    formStatus.textContent = 'Enviando...';
    //desactivamos el boton
    buttonSend.disabled = true;

    try{
        const response = await fetch(form.action, {
            method: 'POST',
            headers: { Accept: 'application/json'},
            body: new FormData(form)
        });

        const data = await response.json();

        if(data.success){
            formStatus.textContent = '¡Gracias! Te respondere pronto.'
            form.reset();
        } else {
            formStatus.textContent = 'Algo ha fallado. Intentalo de nuevo.';
        }

    }catch {
        formStatus.textContent = 'Error de conexión, Intentalo mas tarde';
    }finally {
        buttonSend.disabled = false;
    }

   });
}

