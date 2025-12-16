import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-whiteBg shadow-card-hover mb-6 flex items-center justify-between rounded-full bg-white px-5 py-2">
      <div className="reltive">
        <Image
          src="/logo.svg"
          className="w-[211px]"
          alt="img"
          width={500}
          height={48}
        />
      </div>
      <div className="">
        <ul className="flex gap-8">
          <Link className="flex items-center" href="#">
            <Image src="/home.svg" alt="profile" width={16} height={16} />
            <span className="ml-2 text-[14px] font-bold text-[var(--black-dark)]">
              Overview
            </span>
          </Link>
          <Link
            className="flex items-center rounded-full bg-[var(--secondery-color)] px-4 py-2"
            href="#"
          >
            <Image src="/patients.svg" alt="profile" width={16} height={16} />
            <span className="ml-2 text-[14px] font-bold text-[var(--black-dark)]">
              Patients
            </span>
          </Link>
          <Link className="flex items-center" href="#">
            <Image src="/schedule.svg" alt="profile" width={16} height={16} />
            <span className="ml-2 text-[14px] font-bold text-[var(--black-dark)]">
              Schedule
            </span>
          </Link>
          <Link className="flex items-center" href="#">
            <Image src="/message.svg" alt="profile" width={16} height={16} />
            <span className="ml-2 text-[14px] font-bold text-[var(--black-dark)]">
              Message
            </span>
          </Link>
          <Link className="flex items-center" href="#">
            <Image
              src="/transactions.svg"
              alt="profile"
              width={16}
              height={16}
            />
            <span className="ml-2 text-[14px] font-bold text-[var(--black-dark)]">
              Transactions
            </span>
          </Link>
        </ul>
      </div>
      <div className="">
        <div className="flex items-center gap-2">
          <Image src="/doctor.png" alt="profile" width={44} height={44} />
          <div className="flex flex-col border-r border-[#EDEDED] pr-4">
            <p className="text-[14px] font-bold text-[var(--black-dark)]">
              Dr. Jose Simmons
            </p>
            <p className="text-[14px] text-[var(--gray-dark)]">
              General Practitioner
            </p>
          </div>
          <Image
            className="mr-2 ml-1"
            src="/seatting.svg"
            alt="profile"
            width={20}
            height={20}
          />
          <Image src="/more.svg" alt="profile" width={4} height={18} />
        </div>
      </div>
    </div>
  );
};

export default Header;
