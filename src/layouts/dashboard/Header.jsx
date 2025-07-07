import DarkModeToggle from "../../components/DarkModeToggle"

export const Header = () => {
  return (
    <div className='h-15 bg-stone-100 dark:bg-neutral-700 rounded-md p-4 flex items-center justify-end'>
      <DarkModeToggle/>
    </div>
  )
}
