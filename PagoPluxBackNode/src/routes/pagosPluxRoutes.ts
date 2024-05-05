import { Router } from "express";
import { validacionDeTransaccion } from "../services/pagosPluxService";

const router=Router();

router.post('/pagos_plux/tranascciones',async (req,res)=>{
    try {
        console.log('pasa')
        const numeroIdentificacion = req.body.numeroIdentificacion;
        const initialDate = req.body.initialDate;
        const finalDate = req.body.finalDate;
        const tipoPago = req.body.finalDate;
        const estado = req.body.finalDate;
        const identificacionCliente = req.body.finalDate;
        const response=await validacionDeTransaccion({numeroIdentificacion,initialDate,finalDate,tipoPago,estado,identificacionCliente});
        return res.status(200).json({ data:response,message:'Se extraido correctamente' });
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error" });
    }
})

export default router;