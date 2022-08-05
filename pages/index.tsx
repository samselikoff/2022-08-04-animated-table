import { useIsPresent, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const peopleSeed = [
  {
    id: 1,
    name: "Person 1",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Person 2",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 3,
    name: "Person 3",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 4,
    name: "Person 4",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 5,
    name: "Person 5",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

export default function HomePage() {
  let [people, setPeople] = useState(peopleSeed);

  function deletePerson(id: number) {
    setPeople((people) => people.filter((p) => p.id !== id));
  }

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table
                cellPadding={0}
                className="min-w-full divide-y divide-gray-300 relative"
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <AnimatePresence>
                    {people.map((person) => (
                      <TR
                        person={person}
                        onClick={() => deletePerson(person.id)}
                        key={person.id}
                      />
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TR({ person, onClick }) {
  let isPresent = useIsPresent();

  return (
    <motion.tr
      layout
      transition={{ layout: { type: "tween" } }}
      exit={{ opacity: 0 }}
      style={{ position: isPresent ? "relative" : "absolute" }}
      className="w-full"
    >
      <td className="w-[20%] whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {person.name}
      </td>
      <td className="w-[20%] whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.title}
      </td>
      <td className="w-[20%] whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.email}
      </td>
      <td className="w-[20%] whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.role}
      </td>
      <td className="w-[20%] relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <button
          onClick={onClick}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Delete<span className="sr-only">, {person.name}</span>
        </button>
      </td>
    </motion.tr>
  );
}
