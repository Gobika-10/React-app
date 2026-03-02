import React from "react";

function Section() {
  return (
    <section className="flex-grow  py-16 px-6 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 ">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
        Smart User Administration
        </h2>
        <p className="text-gray-600 mb-12">
      </p>

        {/* Grid Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Role & Permission Management</h3>
            <p className="text-gray-600">
                    Assign roles and manage access levels securely.
                    Ensure that users only access the features and data relevant to their responsibilities. </p>
                            </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Search & Data Optimization</h3>
            <p className="text-gray-600">
           Quickly search and filter users using dynamic search functionality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">         User Registration & Control</h3>
            <p className="text-gray-600">
              Add, edit, and delete users easily through an interactive dashboard.
Maintain accurate user records with real-time updates and validation. 
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Section;