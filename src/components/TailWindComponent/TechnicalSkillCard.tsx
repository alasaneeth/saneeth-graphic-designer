import { ReactNode } from "react";

type SkillCardProps = {
  icon: ReactNode;
  label: string;
};

const SkillCard = ({ icon, label }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow hover:shadow-md transition w-28">
      <div className="text-4xl">{icon}</div>
      <p className="mt-2 text-sm font-medium text-gray-700 text-center">{label}</p>
    </div>
  );
};

export default SkillCard;
