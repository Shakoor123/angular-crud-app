import express, { Request, Response } from "express";
import mobileController from "../controllers/Mobile";
const router = express.Router();
router.get("/", (req: Request, res: Response) => {
  res.send("home right now");
});
router.post("/phone", mobileController.cretePhone);
router.get("/phone", mobileController.getPhone);
router.put("/phone", mobileController.updatePhone);
router.delete("/phone/:phoneId", mobileController.deletePhone);

export default router;
