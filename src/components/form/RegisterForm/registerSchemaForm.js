import { z } from "zod";

const registerSchemaForm = z
  .object({
    name: z.string().min(1, "Nome obrigatório"),
    contact: z.string().min(1, "Campo obrigatório"),
    email: z.string().email().min(1, "Email obrigatório"),
    password: z
      .string()
      .min(8, "Mínimo 6 caracteres")
      .regex(/[a-z]+/g, "Senha precisa conter pelo menos uma letra minúscula")
      .regex(/[A-z]+/g, "Senha precisa conter  pelo menos uma letra maiúscula")
      .regex(/[0-9]+/g, "Senha precisa conter pelo menos um número")
      .regex(
        /[^a-zA-Z 0-9]+/g,
        "Senha precisa conter pelo menos um caracter especial"
      ),

    confirmPassword: z.string().min(6, "Confirme sua senha"),
    bio: z.string().min(10, "Bio obrigatório"),
    course_module: z.string().min(1, "Campo obrigatório"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Senhas não correspondem.",
    path: ["confirmPassword"],
  });

export { registerSchemaForm };
