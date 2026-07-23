import { MemoryRouter, Link } from "react-router-dom";
import CarCard_2 from "../components/CarCard_2";
import car from "../assets/cars/car 15.png"; // Update the path

export default {
  title: "Components/CarCard_2",
  component: CarCard_2,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="max-w-5xl mx-auto p-6">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const AppointmentCard = {
  render: (args) => (
    <CarCard_2 {...args}>
      <Link
        to="/reschedule"
        className="text-red-600 underline hidden lg:inline-block"
      >
        Change
      </Link>
    </CarCard_2>
  ),
  args: {
    car,
    date: "Tuesday, 12 March 2026 - 08:30 AM",
    vehicle: "Land Cruiser 2026",
    showroom: "Toyota Abu Dhabi Airport Road",
    showEditIcon: true,
    className: "mr-4 lg:mr-0",
  },
};

export const ShowroomCard = {
  render: (args) => (
    <CarCard_2 {...args}>
      <Link to="" className="text-red-600 underline">
        <i className="bi bi-send-fill mr-3 text-sm"></i>
        Get Directions
      </Link>
    </CarCard_2>
  ),
  args: {
    car,
    date: "Tuesday, 12 March 2026 - 08:30 AM",
    vehicle: "Land Cruiser 2026",
    showroom: "Toyota Abu Dhabi Airport Road",
    className: "col-span-2 lg:col-span-1 order-1",
    imageContainerClassName: "2xl:-mt-3",
    imageClassName: "lg:h-fit",
  },
};

export const RowLayout = {
  render: (args) => (
    <CarCard_2 {...args}>
      <Link to="" className="text-red-600 underline">
        <i className="bi bi-send-fill mr-3"></i>
        Get Directions
      </Link>
    </CarCard_2>
  ),
  args: {
    layout: "row",
    car,
    date: "Tuesday, 12 March 2026 - 08:30 AM",
    vehicle: "Land Cruiser 2026",
    showroom: "Toyota Abu Dhabi Airport Road",
    className: "mt-12 mb-15",
    imageContainerClassName: "2xl:-mt-3 lg:pb-5",
    imageClassName: "lg:h-fit",
    dateClassName: "font-bold text-2xl lg:text-4xl text-black mb-6",
    valueClassName: "text-lg",
    contentPadding: "p-6",
  },
};