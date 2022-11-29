// Supabase
import { supabase } from "./supabse";

// Models
import { Login } from "../models/login_model";
import { Register } from "../models/register_model";
import { AuthResponse } from "@supabase/supabase-js";

export class ManaManoService {
  static async SignUp(user: Register): Promise<AuthResponse> {
    const response = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });
    return response;
  }

  static async SignIn(user: Login): Promise<AuthResponse> {
    const response = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });
    return response;
  }

  static async SignOut(): Promise<boolean> {
    const { error } = await supabase.auth.signOut();
    if (error) return false;
    return true;
  }
}
