

function Chip({title, isChosen,onClick}){
  
return(
    <div
    onClick={onClick} 
    className={`${isChosen ? "bg-purple-400 text-white" : "bg-white text-black"}
    cursor-pointer hover:bg-purple-100 inline-block m-2 p-1 w-fit px-4 border border-purple-200 rounded-md`}>
        <button>{title}</button>
    </div>
)
}
export default Chip;