import DarkModeToggle from "../../components/DarkModeToggle"

export const Header = () => {
  return (
    <div className='h-15 rounded-md p-4 flex items-center justify-end'>
      <DarkModeToggle/>
    </div>
  )
}
