import prisma from "@/lib/prisma";

export default async function Page() {
  const students = await prisma.student.findMany({
    include: {
      enrollmentYear: true,
      enrollmentSemester: true,
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students</h1>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">ID</th>
            <th className="py-2 px-4 border-r">Student ID</th>
            <th className="py-2 px-4 border-r">First Name</th>
            <th className="py-2 px-4 border-r">Middle Name</th>
            <th className="py-2 px-4 border-r">Last Name</th>
            <th className="py-2 px-4 border-r">Email</th>
            <th className="py-2 px-4 border-r">Phone</th>
            <th className="py-2 px-4 border-r">Address</th>
            <th className="py-2 px-4 border-r">Date of Birth</th>
            <th className="py-2 px-4 border-r">Gender</th>
            <th className="py-2 px-4 border-r">Enrollment Year</th>
            <th className="py-2 px-4 border-r">Enrollment Semester</th>

            <th className="py-2 px-4 border-r">Program</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4 border-r">{student.id}</td>
              <td className="py-2 px-4 border-r">{student.studentId}</td>
              <td className="py-2 px-4 border-r">{student.firstName}</td>
              <td className="py-2 px-4 border-r">{student.middleName}</td>
              <td className="py-2 px-4 border-r">{student.lastName}</td>
              <td className="py-2 px-4 border-r">{student.email}</td>
              <td className="py-2 px-4 border-r">{student.phone}</td>
              <td className="py-2 px-4 border-r">{student.address ?? "N/A"}</td>
              <td className="py-2 px-4 border-r">
                {student.dateOfBirth
                  ? new Date(student.dateOfBirth).toLocaleDateString()
                  : "N/A"}
              </td>
              <td className="py-2 px-4 border-r">{student.gender}</td>
              <td className="py-2 px-4 border-r">
                {student.enrollmentYear.year}
              </td>
              <td className="py-2 px-4 border-r">
                {student.enrollmentSemester.semester}
              </td>

              <td className="py-2 px-4 border-r">{student.program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
