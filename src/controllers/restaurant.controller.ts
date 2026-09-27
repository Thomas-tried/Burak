import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Members.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home page");
  } catch (err) {
    console.log("ERROR, goHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login page");
  } catch (err) {
    console.log("ERROR, getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup page");
  } catch (err) {
    console.log("ERROR, goHgetSignupome:", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("DONE");
  } catch (err) {
    console.log("ERROR, processLogin:", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    res.send("DONE");
  } catch (err) {
    console.log("ERROR, processSignup:", err);
  }
};

export default restaurantController;
