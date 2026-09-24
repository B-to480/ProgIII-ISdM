import{ createContext, useContext, useEffect, useState } from"react";
import{ supabase } from"../misupabase";


const AuthContext = createContext(null);
export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
        const[sesion, setSesion] = useState(null);
        const[cargando, setCargando] = useState(true);
        useEffect(() => {
            supabase.auth.getSession().then(({ data }) => {
            setSesion(data.session);
            setCargando(false);
        });
    const{ data: listener } = supabase.auth.onAuthStateChange((_ev, s) => 
        setSesion(s));return() => listener.subscription.unsubscribe();
    }, []);

    return(
        <AuthContext.Provider value={{ sesion, cargando }}>
        {children}
        </AuthContext.Provider>
    );
}