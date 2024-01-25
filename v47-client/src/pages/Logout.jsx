import React from "react";

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div>
      <form>
        <button type="button" onClick={handleLogout} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Logout;
