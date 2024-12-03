import { Heading, Img, SelectBox, Button, Input } from "@/components";
import { CloseSVG } from "../../components/Input/close";
import React from "react";
import { OptionProps } from "react-select";
import EmployeeModal from "./EmployeeCreate";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function EmployeeSection() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      {/* employee section */}
      <div className="flex items-center justify-center px-5 md:flex-col">
        <Heading
          size="headingmd"
          as="h1"
          className="font-['Maven_Pro'] text-[40px] font-bold text-[#000000] lg:text-[34px] md:text-[34px] sm:text-[32px]"
        >
          Employee
        </Heading>
        <div className="flex flex-1 justify-end md:flex-col md:self-stretch">
          <Input
            color="white_A700"
            size="xs"
            variant="fill"
            name="Search Field"
            placeholder={`Search`}
            value={searchBarValue3}
            onChange={(e) => setSearchBarValue3(e.target.value)}
            prefix={
              <div className="flex h-[20px] w-[20px] items-center justify-center">
                <Img
                  src="Vector (1).png"
                  width={20}
                  height={20}
                  alt="Rewind"
                  className="my-1 h-[20px] w-[20px] object-contain"
                />
              </div>
            }
            suffix={
              searchBarValue3?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue3("")} />
              ) : null
            }
            className="w-[22%] gap-2.5 rounded-[5px] border border-[#f25d07] font-['Nunito_Sans'] text-[#f25d07] md:w-full"
          />
          <SelectBox
            shape="round"
            indicator={
              <Img
                src="arrow_bottom.svg"
                width={24}
                height={20}
                alt="Arrow Down"
                className="h-[20px] w-[24px]"
              />
            }
            getOptionLabel={(e: OptionProps) => (
              <>
                <div className="flex items-center">
                  <span>{e.label}</span>
                </div>
              </>
            )}
            name="Filter Dropdown"
            placeholder={`Filter`}
            options={dropDownOptions}
            className="ml-5 w-[8%] gap-2.5 rounded-[5px] border border-solid border-[#f25d07] font-['Nunito_Sans'] md:ml-0 md:w-full"
          />
          <Button
            color="orange_800"
            size="xs"
            onClick={openModal}
            leftIcon={
              <Img
                src="img_pluscircle_white_a700.svg"
                width={20}
                height={20}
                alt="Plus-circle"
                className="mb-1.5 mt-1 h-[20px] w-[20px] object-contain"
              />
            }
            className="ml-5 min-w-[172px] gap-1 rounded-[5px] px-2 font-['Nunito_Sans'] md:ml-0"
          >
            Add Employee{" "}
          </Button>
        </div>
      </div>
      <EmployeeModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
