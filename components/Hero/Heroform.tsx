"use client";
import { DownOutlined, UserOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Select } from "antd";
import Link from "next/link";
import { useState } from "react";

const { Option } = Select;

const HeroForm = () => {
  const [form] = Form.useForm();
  
  // State for rotating arrows
  const [qualOpen, setQualOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Puducherry"
  ];

  const qualifications = [
    "10th Standard", "12th Standard", "Undergraduate (Pursuing)", "Undergraduate (Completed)", "Postgraduate", "Working Professional"
  ];

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
    message.success("Demo booked successfully!");
  };

  // Rotating Icon Component
  const RotatingArrow = ({ isOpen }: { isOpen: boolean }) => (
    <DownOutlined 
      className={`transition-transform duration-300 ease-in-out text-gray-400 ${isOpen ? "rotate-180" : "rotate-0"}`} 
    />
  );

  return (
    <div className="w-full p-10 flex justify-center items-center">
      <div className="max-w-150 xl:p-15 rounded-lg h-full w-full px-10 border-gray-100 py-12 border-3 transition-all duration-500 hover:-translate-y-1 ">
        
        <div className="flex justify-between w-full mb-6">
          <h1 className="text-3xl text-[#1e293b] font-semibold min-w-67.5">
            Book a Live Demo
            <br />
            <span className="text-blue-600">For Free !</span>
          </h1>
          <div className="max-h-22 max-w-30.25 shrink-0">
            <img src="hero/hero-form-person-image.png" alt="Hero" className="w-full h-full object-contain" />
          </div>
        </div>

        <Form 
          form={form} 
          layout="vertical" 
          onFinish={onFinish} 
          requiredMark={false}
          scrollToFirstError // Automatically scrolls to the red error on mobile
        >
          {/* REQUIRED: Name */}
          <Form.Item
            label={<span className="font-semibold text-slate-600">Name</span>}
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input prefix={<UserOutlined className="text-gray-400" />} placeholder="Enter Your Name" className="py-2.5 rounded-md" />
          </Form.Item>

          {/* REQUIRED: Mobile */}
          <Form.Item
            label={<span className="font-semibold text-slate-600">Mobile Number (WhatsApp Number)</span>}
            name="mobile"
            rules={[
              { required: true, message: "Mobile number is required" },
              { pattern: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit number" }
            ]}
          >
            <Input
              prefix={<WhatsAppOutlined className="text-gray-400" />}
              addonBefore="+91"
              placeholder="Enter 10 Digit Number"
              className="py-1 rounded-md overflow-hidden"
            />
          </Form.Item>

          {/* NOT REQUIRED: Qualification */}
          <Form.Item
            label={<span className="font-semibold text-slate-600">Highest Qualification (Optional)</span>}
            name="qualification"
          >
            <Select 
              placeholder="Select Highest Qualification" 
              className="h-11"
              onDropdownVisibleChange={(open) => setQualOpen(open)}
              suffixIcon={<RotatingArrow isOpen={qualOpen} />}
            >
              {qualifications.map(q => <Option key={q} value={q}>{q}</Option>)}
            </Select>
          </Form.Item>

          {/* REQUIRED: State */}
          <Form.Item
            label={<span className="font-semibold text-slate-600">Native State</span>}
            name="state"
            rules={[{ required: true, message: "Please select your state" }]}
          >
            <Select 
              placeholder="Select State" 
              className="h-11"
              showSearch
              onDropdownVisibleChange={(open) => setStateOpen(open)}
              suffixIcon={<RotatingArrow isOpen={stateOpen} />}
            >
              {indianStates.map(s => <Option key={s} value={s}>{s}</Option>)}
            </Select>
          </Form.Item>

          <p className="mb-6 ">
            By proceeding further, I agree to the <Link href="#" className="text-blue-600 font-semibold">Terms & Conditions</Link> and <Link href="#" className="text-blue-600 font-semibold">Privacy Policy of NxtWave</Link>
          </p>

          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 bg-blue-600  hover:bg-blue-700 rounded-md shadow-lg border-none active:scale-[0.98] transition-transform"
            ><span className="font-semibold">

              Book My Free Demo
            </span>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default HeroForm;