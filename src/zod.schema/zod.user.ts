import { z, TypeOf } from "zod";

export const userType = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "wright type is name",
      })

      .min(2, "name is too long"),

    email: z.string({
        required_error: "email is required",
        invalid_type_error: "wright type is email",
  
    }).email(),

    password: z.string(
        {
            required_error: "password is required",
            invalid_type_error: "wright type is password",
        }
    ),


     

  }),
});

export type userType = TypeOf<typeof userType> ["body"];
