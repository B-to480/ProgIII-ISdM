const { error } = modoRegistro ? await registrarse(email, password) : 
    await iniciarSesion(email, password); 
if (error) setError(error.message);