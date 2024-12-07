import { Img, Input } from "../../components";

const EmployeeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-5xl shadow-lg p-8 w-full max-w-[800px] border-4 border-orange-500 ">
        <h1 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Add Employee
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-4">
            {/* Form Fields */}
            <div className="flex items-center">
              <label
                htmlFor="name"
                className="min-w-[100px] text-gray-700 capitalize mb-2"
              >
                Name
              </label>
              <Input
                color="white_A700"
                size="xs"
                variant="fill"
                name="name"
                className="flex-1 gap-2.5 ml-[10px] rounded-[5px] border border-[#f25d07] font-['Nunito_Sans'] text-[#f25d07] md:w-full"
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="gender"
                className="min-w-[100px] text-gray-700 capitalize mb-2"
              >
                Gender
              </label>
              <Input
                color="white_A700"
                size="xs"
                variant="fill"
                name="gender"
                className="flex-1 gap-2.5 ml-[10px] rounded-[5px] border border-[#f25d07] font-['Nunito_Sans'] text-[#f25d07] md:w-full"
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="dob"
                className="min-w-[100px] text-gray-700 capitalize mb-2"
              >
                Date of Birth
              </label>
              <Input
                color="white_A700"
                size="xs"
                variant="fill"
                name="date"
                className="flex-1 gap-2.5 ml-[10px] rounded-[5px] border border-[#f25d07] font-['Nunito_Sans'] text-[#f25d07] md:w-full"
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="role"
                className="min-w-[100px] text-gray-700 capitalize mb-2"
              >
                Role
              </label>
              <Input
                color="white_A700"
                size="xs"
                variant="fill"
                name="role"
                className="flex-1 gap-2.5 ml-[10px] rounded-[5px] border border-[#f25d07] font-['Nunito_Sans'] text-[#f25d07] md:w-full"
              />
            </div>
            <div className="flex col-span-2">
              <div className="w-[50%] mr-[20px]">
                <div className="flex items-center mb-2">
                  <label
                    htmlFor="address"
                    className="text-gray-700 capitalize mb-2 min-w-[100px]"
                  >
                    Address
                  </label>
                  <Input
                    color="white_A700"
                    size="xs"
                    variant="fill"
                    name="address"
                    className="flex-1 gap-2.5 ml-[10px] rounded-[5px] border border-[#f25d07] font-['Nunito_Sans'] text-[#f25d07] md:w-full"
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="identification"
                    className="text-gray-700 capitalize mb-2 min-w-[100px]"
                  >
                    Identification
                  </label>
                  <Input
                    color="white_A700"
                    size="xs"
                    variant="fill"
                    name="identification"
                    className="flex-1 gap-2.5 ml-[10px] rounded-[5px] border border-[#f25d07] font-['Nunito_Sans'] text-[#f25d07] md:w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center col-span-2">
                <label className="block text-gray-700 mb-2">Picture</label>
                <div className="w-24 h-24 bg-orange-500 rounded flex items-center justify-center text-white text-2xl">
                  <Img
                    src="Plus.svg"
                    width={50}
                    height={50}
                    alt="Rewind"
                    className="my-1 h-[20px] w-[20px] object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Picture Input */}
          </div>
          {/* Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              type="submit"
              className="flex items-center bg-orange-500 text-white px-4 py-2 rounded"
            >
              <Img
                src="Plus.svg"
                width={50}
                height={50}
                alt="Rewind"
                className="my-1 h-[20px] w-[20px] object-contain ml-[10px]"
              />{" "}
              <span>Add</span>
            </button>
            <button
              type="button"
              className="flex items-center bg-[#F23005] text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              <Img
                src="delete.svg"
                width={50}
                height={50}
                alt="Rewind"
                className="my-1 h-[20px] w-[20px] object-contain ml-[10px]"
              />{" "}
              <span>Cancel</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
