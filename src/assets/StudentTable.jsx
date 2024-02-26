 
import studentsData from "./StudentData";

const StudentsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Grade</th>
            <th className="border border-gray-300 px-4 py-2">Subjects</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {student.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.age}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.grade}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.subjects ? student.subjects.join(", ") : "-------"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
