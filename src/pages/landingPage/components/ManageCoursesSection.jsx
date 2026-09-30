import ManageCoursesLeft from './ManageCoursesLeft'
import ManageCoursesRight from './ManageCoursesRight'
import girl from "../../../assets/images/tabGirl.png"

export default function ManageCoursesSection() {
  return (
    <section className="flex flex-col gap-10 px-4 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16  ">
      
     
      <ManageCoursesLeft src={girl} />
      <ManageCoursesRight />
    </section>
  )
}