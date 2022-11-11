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
  console.log(req.body);

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
const getPhone = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const phones = await Phone.find();
    res.status(200).json(phones);
  } catch (err) {
    res.status(500).json(err);
  }
};
//update
const updatePhone = async (req: Request, res: Response, next: NextFunction) => {
  const phoneId = req.body.phoneId;
  const phone = {
    name: req.body.name,
    ram: req.body.ram,
    memmory: req.body.memmory,
    price: req.body.price,
  };
  try {
    const updatedPhone = await Phone.updateOne(phoneId, phone);
    res.status(200).json(updatedPhone);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete
const deletePhone = async (req: Request, res: Response, next: NextFunction) => {
  const _id = req.params.phoneId;
  try {
    const deletedPhone = await Phone.deleteOne({ _id });
    res.status(200).json(deletedPhone);
  } catch (err) {
    res.status(500).json(err);
  }
};
export default { cretePhone, getPhone, updatePhone, deletePhone };
