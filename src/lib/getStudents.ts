// lib/getStudents.ts
import prisma from "@/lib/prisma";

export async function getStudents() {
  return await prisma.student.findMany();
}
