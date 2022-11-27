import { Register } from "../models/register_model";
import { supabase } from "./supabse";

export class RegisterService {
  async createUser(user: Register) {
    return true;
  }
}
