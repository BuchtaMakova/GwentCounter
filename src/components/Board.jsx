import "./board.css";
import { useState } from "react";
import Modal from "./Modal.jsx";
import Cards from "./Cards.jsx";
function Board() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [cardData1, setCardData1] = useState([]);
  const [cardData2, setCardData2] = useState([]);
  const [sum, setSum] = useState(0);
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);

  function openModal() {
    setOpen(true);
  }

  function openModal1() {
    setOpen1(true);
  }

  function openModal2() {
    setOpen2(true);
  }

  function closeModal() {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
  }

  function tightBond(cardData, setCardData, formData, setSum) {
    const newVar = [...cardData, formData];
    //console.log(formData);
    const numberInput = formData.numberInput;
    const tightBondCount = newVar.filter(
      (i) => i.selectedOption == "tightbond" && i.numberInputHard == numberInput
    ).length;

    const tightBondResult = tightBondCount * numberInput;
    const newData = newVar.map((card, index) => {
      //console.log(card);
      if (
        card.selectedOption === "tightbond" &&
        card.numberInputHard == numberInput
      ) {
        return {
          ...card,
          numberInput: tightBondResult,
          numberInputHard: numberInput,
        };
      }

      return card;
    });

    const sumTightBond = newData.reduce((acc, i) => acc + i.numberInput, 0);
    setSum(sumTightBond);

    console.log(sumTightBond);
    //console.log(newData);

    setCardData(newData);
  }

  function setData(formData) {
    if (open) {
      tightBond(cardData, setCardData, formData, setSum);
    } else if (open1) {
      tightBond(cardData1, setCardData1, formData, setSum1);
    } else if (open2) {
      tightBond(cardData2, setCardData2, formData, setSum2);
    }
  }

  return (
    <>
      <Modal
        open={open}
        open1={open1}
        open2={open2}
        closeModal={closeModal}
        setData={setData}
      />
      <div className="board">
        <div>{sum + sum1 + sum2}</div>
        <div className="row">
          {cardData.map((card, index) => {
            return (
              <div key={index}>
                <Cards card={card} />
              </div>
            );
          })}
          <div className="row-button">
            <button className="button_plus" onClick={openModal}></button>
          </div>
        </div>
        <div className="row">
          {cardData1.map((card, index) => {
            return (
              <div key={index}>
                <Cards card={card} />
              </div>
            );
          })}
          <div className="row-button">
            <button className="button_plus" onClick={openModal1}></button>
          </div>
        </div>
        <div className="row">
          {cardData2.map((card, index) => {
            return (
              <div key={index}>
                <Cards card={card} />
              </div>
            );
          })}
          <div className="row-button">
            <button className="button_plus" onClick={openModal2}></button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Board;
