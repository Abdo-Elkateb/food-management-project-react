
import noData from "/src/assets/images/Group 48102290.svg"

export default function DeleteData({deleteItem}) {
  return (
    <div className="text-center">
        <img className="" src={noData} alt="logo" />
        <h3>Delete this {deleteItem}?</h3>
        <p>are you sure you want to delete this item ? if you are sure just click on delete it</p>
      
    </div>
  )
}
