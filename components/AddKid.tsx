import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("body");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
    width: "90%",
    border: "none",
    borderRadius: "4px",
    boxShadow:
      "0px 10px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -5px rgba(0,0,0,0.04)",
    padding: "30px",
  },
};

const AddKidModal = ({
  isOpen,
  id,
  onClose,
}: {
  isOpen: boolean;
  id: number;
  onClose: () => void;
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [isSaving, setIsSaving] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setIsSaving(true);
      const payload = {
        name: data.name,
        age: data.age,
        gender: data.gender,
        userId: id,
      };
      // Perform the save action here
      const req = await axios.post("/api/child", { ...payload });
      console.log(req.data);
      reset();
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <h2 className="text-2xl font-semibold mb-4">Add Kid</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            What is name of your kid?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="What is name of your kid?"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            How old is she/he?
          </label>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            placeholder="How old is she/he?"
            {...register("age")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            What gender?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            placeholder="gender"
            {...register("gender")}
          />
        </div>
        <div className="mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSaving}
          >
            {isSaving ? "Adding kid" : "Add kid"}
          </button>
          <button
            className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClose}
            disabled={isSaving}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddKidModal;
