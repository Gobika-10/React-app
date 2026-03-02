import React, { useState, useEffect, useRef, useMemo } from "react";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const inputRef = useRef(null);

  const API_URL = "http://localhost:4000/users";

  //  READ (GET)
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  //  Auto focus when editing
  useEffect(() => {
    inputRef.current?.focus();
  }, [editId]);

  //  CREATE + UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    if (editId) {
      // UPDATE (PUT)
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editId, name })
      });

      setUsers(users.map(user =>
        user.id === editId ? { ...user, name } : user
      ));

      setEditId(null);
    } else {
      // CREATE (POST)
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
      });

      const newUser = await res.json();
      setUsers([...users, newUser]);
    }

    setName("");
  };

  // DELETE
  const deleteUser = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    setUsers(users.filter(user => user.id !== id));
  };

  // EDIT
  const editUser = (user) => {
    setName(user.name);
    setEditId(user.id);
  };

  //  SEARCH (useMemo optimization)
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10">
          User Management (JSON Server)
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {/* ADD / UPDATE */}
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              {editId ? "Update User" : "Add User"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter user name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-lg"
              />

              <button className="w-full  bg-gray-800 hover:bg-black cursor-pointer text-white py-2 rounded-lg">
                {editId ? "Update User" : "Add User"}
              </button>
            </form>
          </div>

          {/* DELETE */}
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Delete User
            </h3>

            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {users.map(user => (
                <li key={user.id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                  <span>{user.name}</span>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 hover:text-red-400 cursor-pointer font-medium">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SEARCH & EDIT */}
          <div className="bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Search & Edit User
            </h3>

            <input
              type="text"
              placeholder="Search user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <p className="mb-4 font-semibold">
              Total: {filteredUsers.length}
            </p>

            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {filteredUsers.map(user => (
                <li key={user.id}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                  <span>{user.name}</span>
                  <button
                    onClick={() => editUser(user)}
                    className=" text-gray-800 hover:text-gray-600 cursor-pointer font-medium">
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Dashboard;