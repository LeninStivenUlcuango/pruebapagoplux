import { Router } from "express";
import { sign } from "jsonwebtoken";
import verifyToken from "../utils/token";
import { createUser, findUser } from "../controllers/userController";
import { compare } from "bcryptjs";

const router=Router();
const secretKey=process.env.SCRET_KEY_TOKEN;

router.post('/create_user',async (req,res)=>{
  try {
      const email = req.body.email;
      const name = req.body.name;
      const password = req.body.password;
      const users= await createUser({email,name,password})
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Ha ocurrido un error" });
  }
})

router.post("/login",async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      if (!email || !password) {
        return res.status(400).json({ message: "Email y password e requerido" });
      }
      //Se llama al metodo fidn user para encontrar al usuario
      const user=await findUser(email)
      if (user.data) {
        //verificar si la contraseña es correcta
        const correctPass = await compare(password, user.data!.password);
        if(correctPass){
          console.log(secretKey)
          const token = sign({ email }, secretKey!, { expiresIn: "1h" });
          return res.status(200).json({ data:token,message:'Se ha logeado correctamente' });
        }else{
          return res.status(400).json({ message: "Fallo la autenticación" });
        }
      } else {
        return res.status(401).json({ message: "Fallo la autenticación" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Ha ocurrido un error" });
    }
  });

router.get("/protected", verifyToken, (req, res) => {
    return res.status(200).json({ message: "You have access" });
});


export default router;