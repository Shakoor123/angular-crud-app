import express, { Request, Response } from "express";
import authController from "../controllers/Auth";
const router = express.Router();
router.get("/", (req: Request, res: Response) => {
  res.send("home right now");
});
router.post("/phone", authController.cretePhone);
router.get("/phone", authController.getPhone);
router.put("/phone", authController.updatePhone);
router.delete("/phone", authController.deletePhone);

export default router;
