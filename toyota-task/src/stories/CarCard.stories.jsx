import { MemoryRouter, Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import car from "../assets/cars/car 15.png"; // Update the path

export default {
  title: "Components/CarCard",
  component: CarCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="max-w-4xl mx-auto p-6">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const ColumnLayout = {
  render: (args) => (
    <CarCard {...args}>
      <Link to="" className="text-red-600 underline">
        Change
      </Link>
    </CarCard>
  ),
  args: {
    car,
    vehicle: "Land Cruiser Hybrid 2026",
    layout: "column",
    className: "col-span-1",
  },
};

export const RowLayout = {
  render: (args) => (
    <CarCard {...args}>
      <Link to="" className="text-red-600 underline">
        Change
      </Link>
    </CarCard>
  ),
  args: {
    car,
    vehicle: "Land Cruiser Hybrid 2026",
    layout: "row",
    className: "col-span-1 lg:col-span-3",
  },
};

