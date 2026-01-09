import posImage from "../../assets/images/pos.jpg"
import serviceImage from "../../assets/images/service Station.jpg"
import restaurantImage from "../../assets/images/dine.jpg"
import pharmacyImage from "../../assets/images/pharmacy management system.jpg"


export const projects = [
  {
    title: "Point of Sales System",
    description:
      "Developed a web-based POS solution for retail and wholesale businesses with a React.js frontend and Node.js backend. Implemented RESTful APIs for real-time operations and used MySQL for database management.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MySQL"],
    image: posImage,
  },
  {
    title: "Service Station Management System",
    description:
      "Engineered a full-stack app for managing vehicle and customer records, service tracking dashboards, and notifications using React.js, Node.js, and MySQL.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MySQL"],
    image: serviceImage,
  },
  {
    title: "Restaurant Management System",
    description:
      "Built a complete system for managing orders (KOT), billing, and inventory with a React.js and Material UI frontend, Laravel backend, and MySQL database.",
    tech: ["React.js", "Material UI", "Laravel", "MySQL"],
    image: restaurantImage,
  },
  {
    title: "Pharmacy Management System",
    description:
      "Designed modules for stock control, billing, and expiry tracking using React.js and Material UI, with Laravel backend and MySQL database.",
    tech: ["React.js", "Material UI", "Laravel", "MySQL"],
    image: pharmacyImage,
  },
];