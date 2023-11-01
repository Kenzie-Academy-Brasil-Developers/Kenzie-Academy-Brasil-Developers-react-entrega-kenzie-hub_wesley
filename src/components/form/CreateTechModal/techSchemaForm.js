import { z } from "zod";
const techSchemaForm = z.object({
  title: z.string().min(1, "Title obrigatório"),
  status: z.string().min(1, "Campo obrigatório"),
});

export { techSchemaForm };
