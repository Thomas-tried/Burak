import { Request, Response } from "express";

import { T } from "../libs/types/common";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home page");
  } catch (err) {
    console.log("ERROR, goHome:", err);
  }
};

memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login page");
  } catch (err) {
    console.log("ERROR, getLogin:", err);
  }
};

memberController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup page");
  } catch (err) {
    console.log("ERROR, goHgetSignupome:", err);
  }
};

export default memberController;
