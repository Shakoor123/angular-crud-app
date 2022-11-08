import Phone from "../models/phone";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

// const registerFunction = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const hash = await bcrypt.hashSync(req.body.password, saltRounds);

//   const user = new User({
//     email: req.body.email,
//     username: req.body.username,
//     password: hash,
//   });
//   return user
//     .save()
//     .then((user) => res.status(201).json({ user }))
//     .catch((err) => res.status(500).json({ err }));
// };

// const loginFunction = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const email: String = req.body.email;
//   try {
//     const user = await User.findOne({ email });
//     if (user) {
//       const response = await bcrypt.compareSync(
//         req.body.password,
//         user?.password
//       );
//       if (response === true) {
//         res.status(201).json({ user });
//       } else {
//         res.status(500).json({ meassage: "password is incorrect" });
//       }
//     } else {
//       res.status(500).json({ meassage: "user is not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ err });
//   }
// };

//create
const cretePhone = async (req: Request, res: Response, next: NextFunction) => {
  const phone = new Phone({
    name: req.body.name,
    ram: req.body.ram,
    memmory: req.body.memmory,
    price: req.body.price,
  });
  return phone
    .save()
    .then((p) => res.status(201).json({ p }))
    .catch((err) => res.status(500).json({ err }));
};
//get
const getPhone = async (req: Request, res: Response, next: NextFunction) => {};
//update
const updatePhone = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

//delete
const deletePhone = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
export default { cretePhone, getPhone, updatePhone, deletePhone };
