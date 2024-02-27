import React from "react";

interface Props {
  handleLogout: () => void;
}

const Logout = (props: Props) => {
  const { handleLogout } = props;
  const logout = () => {
    if (handleLogout) {
      handleLogout();
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <button
          type="button"
          onClick={logout}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Logout;
