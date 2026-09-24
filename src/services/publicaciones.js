import { supabase } from "../misupabase";

const TABLA = "publicaciones";

export async function obtenerPublicaciones(){
    const { data, error } = await supabase
        .from(TABLA)
        .select("id, titulo, contenido, creado_en")
        .order("creado_en", { ascending: false });

    if (error) throw error;
    return data;
}
export async function crearPublicacion({ titulo, contenido }) {
    const { data, error } = await supabase.from(TABLA).insert({ titulo, contenido });
    if (error) throw error;
    return data;
}

export async function actualizarPublicacion(id, titulo_publi, cont_publi){
    const { data, error } = await supabase
        .from(TABLA)
        .update({ titulo: titulo_publi, contenido: cont_publi })
        .eq("id", id);
    if (error) throw error;
    return data;
}

export async function eliminarPublicacion(id){
    const { data, error } = await supabase.from(TABLA).delete().eq("id", id);
    if (error) throw error;
    return data;
    }