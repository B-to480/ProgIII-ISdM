import { supabase } from "../misupabase";

const TABLA = "Cursos";

// ---------- LEER todos ----------
export async function obtenerCursos() {
  const { data, error } = await supabase
    .from(TABLA)
    .select("*")
    .order("id_curso", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

// ---------- LEER uno ----------
export async function obtenerCursoPorId(id) {
  const { data, error } = await supabase
    .from(TABLA)
    .select("*")
    .eq("id_curso", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}