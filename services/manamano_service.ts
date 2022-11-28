// Supabase
import { supabase } from "./supabse";

// Models
import { Login } from "../models/login_model";
import { Register } from "../models/register_model";
import { AuthError, AuthResponse } from "@supabase/supabase-js";

export class ManaManoService {
  async SignUp(user: Register) {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      phone: user.phone,
    });

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    //return true;
  }
  async SignIn(user: Login) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });

    if (error) {
      console.log(error);
      return error;
    }
    console.log(data);

    return data;
  }
  async SignOut(): Promise<boolean> {
    const { error } = await supabase.auth.signOut();
    if (error) return false;
    return true;
  }
}
