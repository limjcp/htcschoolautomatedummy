import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      studentId,
      firstName,
      middleName,
      lastName,
      email,
      phone,
      address,
      dateOfBirth,
      gender,
      enrollmentYear,
      status,
      program,
      yearLevel,
    } = req.body;

    try {
      const newStudent = await prisma.student.create({
        data: {
          studentId,
          firstName,
          middleName,
          lastName,
          email,
          phone,
          address,
          dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
          gender,
          enrollmentYear: parseInt(enrollmentYear, 10),
          status,
          program,
          yearLevel,
        },
      });
      res.status(201).json(newStudent);
    } catch (error) {
      console.error("Error creating student:", error);
      res.status(500).json({ error: "Failed to register student" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
