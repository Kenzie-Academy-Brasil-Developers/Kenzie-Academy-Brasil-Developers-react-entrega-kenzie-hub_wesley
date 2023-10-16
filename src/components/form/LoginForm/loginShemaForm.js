import { z } from "zod";

const loginSchemaForm = z.object({
  email: z.string().email().min(1, "Email obrigatório"),
  password: z.string().min(1, "Senha obrigatório"),
});

export default loginSchemaForm;
