import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { useContext } from 'react'
import { TechsContexts } from '../../../providers/TechContext'


const TechCard = ({ tecnologie, status, removeItem, editItem, cardTech }) => {
    const { actionModalEdit } = useContext(TechsContexts)

    const handleRemove = () => {
        removeItem()
    }
    const handleEditModal = () => {
        editItem()
        actionModalEdit(true)
    }
    return (
        <>
            <div>
                <p>{tecnologie}</p>
                <p>{status}</p>
            </div>
            <div>
                <MdOutlineModeEditOutline onClick={handleEditModal} />
                <RiDeleteBin6Line onClick={handleRemove} />
            </div>
        </>
    )
}

export default TechCard