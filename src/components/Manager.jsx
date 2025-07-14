import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showpassword = () => {
    passwordRef.current.type = "password";
    if (ref.current.src.includes("icons/hide-view.svg")) {
      ref.current.src = "icons/view-icon.svg";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/hide-view.svg";
      passwordRef.current.type = "password";
    }
  };

  const savePassword = () => {
    if (!form.site.length < 3 || !form.username.length < 3 || !form.password.length < 3) {
      toast.error("Please fill all fields with valid data!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        progress: "undefined",
      });
    } else {
      const updatedArray = [...passwordArray, { ...form, id: uuidv4() }];
      setPasswordArray(updatedArray);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));
      setForm({ site: "", username: "", password: "" });
      toast("Password saved!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        progress: "undefined",
      });
    }
  };

  const editPassword = (id) => {
    setForm(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const deletePassword = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this password?"
    );
    if (!confirmDelete) return;
    const updatedArray = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    toast("Password deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: "undefined",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: "undefined",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <div className="overflow-scroll h-[85vh]">
        <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="mt-[50px] flex flex-col items-center justify-center">
          <span className="p-[10px]">
            <span className="text-green-500 text-3xl py-4 font-bold">&lt;</span>
            <span className="text-black text-3xl font-bold">PASS</span>
            <span className="text-green-500 text-3xl font-bold">OP/&gt;</span>
          </span>
          <h3 className="font-semibold text-gray-600">
            Your own Password Manager
          </h3>
        </div>

        <div className="flex items-center justify-center mt-10">
          <label className="w-[60vw]">
            <input
              type="text"
              placeholder="Enter Website URL"
              className="w-full px-2 h-[30px] text-gray-600 border-2 border-green-500 text-lg rounded-3xl focus:outline-none focus:ring-3 focus:ring-green-400 hover:border-black"
              name="site"
              value={form.site}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="flex items-center justify-center mt-8">
          <label className="w-[60vw] flex lg:flex-row md:flex-col sm:flex-col md:w-[80vw]] sm:w-[80vw]] xsm:flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Username"
              className="lg:w-3/4 px-2 h-[30px] text-gray-600 border-2 border-green-500 text-lg rounded-3xl focus:outline-none focus:ring-3 focus:ring-green-400 hover:border-black"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            <div className="relative w-full sm:w-full md:w-full lg:w-1/4">
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="w-full px-2 h-[30px] text-gray-600 border-2 border-green-500 text-lg rounded-3xl focus:outline-none focus:ring-3 focus:ring-green-400 hover:border-black"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <img
                ref={ref}
                src="icons/view-icon.svg"
                alt="View Icon"
                className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer "
                onClick={showpassword}
              />
            </div>
          </label>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={savePassword}
            className="mt-8 border-2 border-black bg-green-600 text-black px-6 py-2 rounded-full hover:bg-green-500 hover:font-semibold transition duration-300 flex items-center gap-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
            Save
          </button>
        </div>

        <div className="passwords flex justify-center w-full p-4">
          <h2 className="text-xl font-semibold mb-2 mt-2">Your Passwords</h2>
        </div>

        {passwordArray.length === 0 && (
          <div className="item-passwords flex justify-center w-full">
            No passwords to show.
          </div>
        )}

        {passwordArray.length !== 0 && (
          <div className="overflow-x-auto overflow-y-auto w-full px-4 mx-auto w-[60vw] max-w-6xl sm:w-full md:w-[80vw] sm:w-[90vw]">
            <table className="table-fixed min-w-[640px] sm:min-w-full max-w-6xl mx-auto rounded-md overflow-hidden shadow-lg">
              <thead className="bg-green-800 text-white text-center">
                <tr className="border-b border-2 border-gray-400">
                  <th className="w-[32%] sm:w-[32%] md:w-[28%] lg:w-[18%] border-b border-2 border-gray-400 py-2">
                    Site
                  </th>
                  <th className="w-[32%] sm:w-[32%] md:w-[28%] lg:w-[18%] border-b border-2 border-gray-400 py-2">
                    Username
                  </th>
                  <th className="w-[32%] sm:w-[32%] md:w-[28%] lg:w-[18%] border-b border-2 border-gray-400 py-2">
                    Password
                  </th>
                  <th className="w-[20%] sm:w-[20%] md:w-[16%] lg:w-[8%] border-b border-2 border-gray-400 py-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-center bg-green-100">
                {passwordArray.map((item, index) => (
                  <tr className="border-b border-2 border-white" key={index}>
                    <td className="py-2 break-words">
                      <a href={item.site} target="_blank" rel="noreferrer">
                        {item.site}
                      </a>
                    </td>
                    <td className="py-2 relative break-words">
                      {item.username}
                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        className="w-6 h-6 inline-block ml-2 cursor-pointer absolute right-3"
                        trigger="hover"
                        onClick={() => copyText(item.username)}
                      ></lord-icon>
                    </td>
                    <td className="py-2 relative break-words">
                      {"*".repeat(item.password.length)}
                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        className="w-6 h-6 inline-block ml-2 cursor-pointer absolute right-3"
                        trigger="hover"
                        onClick={() => copyText(item.password)}
                      ></lord-icon>
                    </td>
                    <td className="py-2 relative text-center">
                      <span
                        className="cursor-pointer mx-1"
                        onClick={() => editPassword(item.id)}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                      <span
                        className="cursor-pointer mx-1"
                        onClick={() => deletePassword(item.id)}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ width: "20px", height: "20px" }}
                        ></lord-icon>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Manager;
