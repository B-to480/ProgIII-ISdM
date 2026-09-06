import { supabase } from "../supabaseClient";

// ---------- REGISTRO ----------
export async function registrar(email, contrasena) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: contrasena
  });
  if (error) throw new Error(error.message);
  return data.user;
}

// ---------- LOGIN ----------
export async function iniciarSesion(email, contrasena) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: contrasena
  });
  if (error) throw new Error(error.message);
  return data.user;
}

// ---------- LOGOUT ----------
export async function cerrarSesion() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

// ---------- USUARIO ACTUAL ----------
export async function obtenerUsuario() {
  const { data } = await supabase.auth.getUser();
  return data.user;   // null si no hay sesión
}

/*
export async function registrarse(email, password) { 
    return supabase.auth.signUp({ email, password }); }

export async function iniciarSesion(email, password) {
    return supabase.auth.signInWithPassword({ email, password }); }

export async function cerrarSesion() { return supabase.auth.signOut(); }
export function suscribirseASesion(callback) { const { data } =
    supabase.auth.onAuthStateChange((_evento, sesion) => {
    callback(sesion); });
return data.subscription; }*/