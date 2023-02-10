
import Box from "../components/box"
import { BaseModal } from "../components/baseModal"

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Bienvenido a wordle
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Box value="G" status="correctLetter" />
        <Box value="A" status="empty"/>
        <Box value="T" status="empty"/>
        <Box value="O" status="empty"/>
        <Box value="S" status="empty"/>
      </div>
      <p className="text-sm text-gray-500">
        The letter G is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Box value="V" status="empty" />
        <Box value="O" status="empty"/>
        <Box value="C" status="presentLetter"/>
        <Box value="A" status="empty"/>
        <Box value="L" status="empty"/>
      </div>
      <p className="text-sm text-gray-500">
        The letter C is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Box value="c" status="empty" />
        <Box value="A" status="empty"/>
        <Box value="N" status="empty"/>
        <Box value="T" status="empty"/>
        <Box value="O" status="notPresentLetter"/>
      </div>
      <p className="text-sm text-gray-500">
        The letter O is not in the word in any spot.
      </p>
    </BaseModal>
  )
}