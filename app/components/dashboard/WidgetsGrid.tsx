'use client';
import { useAppSelector } from "@/app/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const counter = useAppSelector(state => state.counter.count);
  const props = {
    title: counter,
    subtitle: 'Productos Agregados',
    label: 'Counter',
    icon: <IoCartOutline size={70} className="text-blue-500" />,
    href: '/dashboard/counter'
  }
  return (
    <div className="flex flex-wrap items-center justify-center p-2">
      <SimpleWidget {...props} />
    </div>
  )
}
