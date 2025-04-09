import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.errors[0].message });
  }

  console.error("Unhandled Error:", err);
  res.status(500).json({ message: "Something went wrong" });
};
